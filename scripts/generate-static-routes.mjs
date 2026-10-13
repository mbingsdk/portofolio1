/**
 * Publish BrowserRouter paths as real GitHub Pages pages.
 * Run after Vite: npm run build
 * Generates /portfolio/, /about/, /contact/, /gallery/ with independent
 * canonical tags, snippets, and crawlable HTML before React runs.
 *
 * GitHub Pages has no SPA history fallback. Each route must have index.html.
 */
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const domain = 'https://mbingsdk.my.id';
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const projects = JSON.parse(await readFile(path.join(root, 'public', 'projects.json'), 'utf8'));

const escape = (input) => String(input ?? '').replace(/[&<>"']/g, character => (
  {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]
));
const link = (href, label) => '<a href="' + escape(href) + '">' + escape(label) + '</a>';
const nav = '<nav aria-label="Halaman portfolio">' +
  link('/', 'Beranda') + link('/portfolio/', 'Projects') +
  link('/about/', 'About') + link('/gallery/', 'Gallery') + link('/contact/', 'Contact') + '</nav>';
const content = (label, heading, intro, section) =>
  '<main class="pre-render-content"><p>' + escape(label) + '</p><h1>' + escape(heading) +
  '</h1><p>' + escape(intro) + '</p>' + nav + section + '</main>';

const projectMarkup = '<section aria-label="Portfolio project"><h2>Project yang pernah dibangun</h2>' +
  projects.map(project => {
    const name = escape(project.title);
    const description = escape(project.description);
    const external = project.link ? link(project.link, 'Lihat ' + project.title) : '';
    const code = project.repo ? ' · ' + link(project.repo, 'Kode sumber') : '';
    return '<article><h3>' + name + '</h3><p>' + description + '</p><p>' +
      external + code + '</p></article>';
  }).join('') + '</section>';

const routes = {
  portfolio: {
    title: 'Portfolio Project Mbing SDK | Web Apps, Commerce & Automation',
    description: 'Lihat kumpulan project Mbing SDK: Punti.id, Koperasi Ledger, Yurra Production, sistem Mikrotik, aplikasi web, dan automasi API.',
    body: content('Portfolio / Project archive', 'Project digital yang pernah saya bangun',
      'Kumpulan aplikasi web, commerce, sistem koperasi, automasi, dan eksperimen teknologi.',
      projectMarkup),
  },
  about: {
    title: 'Tentang Mbing SDK | Full-Stack Developer Indonesia',
    description: 'Kenali Mbing SDK, full-stack developer di Enrekang, Sulawesi Selatan. Fokus pada React, backend, automasi, integrasi API, dan sistem jaringan.',
    body: content('About / Mbing SDK', 'Tentang Mbing SDK',
      'Saya full-stack developer yang tertarik pada produk digital fungsional, desain interaktif, automasi, dan teknologi.',
      '<section><h2>Keahlian & teknologi</h2><p>React, Next.js, JavaScript, Go (Golang), Kotlin, Dart, Node.js, Python, PostgreSQL, API, WhatsApp Cloud API, Mikrotik, Linux, Docker, dan desain UI.</p></section>'),
  },
  contact: {
    title: 'Kontak & Kolaborasi | Mbing SDK',
    description: 'Hubungi Mbing SDK untuk diskusi aplikasi web, sistem custom, dashboard bisnis, integrasi API, atau kolaborasi software development.',
    body: content('Contact / Collaboration', 'Hubungi Mbing SDK',
      'Ceritakan ide atau kebutuhan pengembangan aplikasi, integrasi, automasi, dan sistem digital.',
      '<section><h2>Mulai percakapan</h2><p>' + link('https://wa.me/message/Y357TXW37QACL1', 'WhatsApp') +
      ' · ' + link('mailto:mbe@mbingsdk.my.id', 'Email') +
      ' · ' + link('https://instagram.com/mbingsdk', 'Instagram') + '</p></section>'),
  },
  gallery: {
    title: 'Gallery Visual & Eksperimen Desain | Mbing SDK',
    description: 'Galeri gambar, inspirasi visual, dan eksplorasi desain yang dikurasi oleh Mbing SDK.',
    body: content('Gallery / Visual collection', 'Galeri dan inspirasi visual',
      'Kumpulan gambar, eksplorasi estetika, dan inspirasi desain.',
      '<section><h2>Visual collection</h2><p>Buka halaman ini untuk menjelajahi galeri dan melihat gambar berukuran penuh.</p></section>'),
  },
};

// Fail the build if the Vite HTML template has changed unexpectedly.
const assert = (ok, message) => { if (!ok) throw new Error('Static route generation: ' + message); };
assert(template.includes('id="root"'), 'root element missing');
assert(/<title>[\s\S]*?<\/title>/i.test(template), 'title missing');
assert(/<link rel="canonical"[^>]*>/i.test(template), 'canonical missing');
assert(/<meta name="description"[^>]*>/i.test(template), 'meta description missing');
assert(/<script type="module"[^>]*src="\/assets\//i.test(template), 'Vite built JavaScript asset missing');

for (const [slug, page] of Object.entries(routes)) {
  const url = domain + '/' + slug + '/';
  const webPageData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url + '#webpage',
    url, name: page.title, description: page.description, inLanguage: 'id-ID',
    isPartOf: { '@id': domain + '/#website' },
  }).replace(/</g, '\\u003c');

  let html = template;
  const replaceRequired = (regex, replacement, field) => {
    assert(regex.test(html), field + ' tag missing');
    html = html.replace(regex, replacement);
  };
  replaceRequired(/<title>[\s\S]*?<\/title>/i, '<title>' + escape(page.title) + '</title>', 'title');
  replaceRequired(/<meta name="description" content="[^"]*"\s*\/?>/i,
    '<meta name="description" content="' + escape(page.description) + '" />', 'description');
  replaceRequired(/<link rel="canonical" href="[^"]*"\s*\/?>/i,
    '<link rel="canonical" href="' + url + '" />', 'canonical');

  for (const [attribute, name, value] of [
    ['property', 'og:title', page.title],
    ['property', 'og:description', page.description],
    ['property', 'og:url', url],
    ['name', 'twitter:title', page.title],
    ['name', 'twitter:description', page.description],
  ]) {
    const regexp = new RegExp('<meta ' + attribute + '="' + name + '" content="[^"]*"\\s*\\/?>', 'i');
    replaceRequired(regexp, '<meta ' + attribute + '="' + name + '" content="' + escape(value) + '" />', name);
  }

  replaceRequired(/<div id="root">[\s\S]*?<\/div>/i,
    '<div id="root">' + page.body + '</div>', 'root content');
  assert(html.includes('</head>'), 'closing head missing');
  html = html.replace('</head>', '    <script type="application/ld+json">' + webPageData + '</script>\n  </head>');
  const directory = path.join(dist, slug);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html, 'utf8');
  console.log('Generated /' + slug + '/index.html');
}
const notFound = '<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="robots" content="noindex">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1"><title>Halaman Tidak Ditemukan | SDK-Dev</title></head>' +
  '<body style="font:16px system-ui,sans-serif;background:#edf0f7;color:#303853;padding:10vh 20px;text-align:center">' +
  '<h1>Halaman tidak ditemukan</h1><p>URL tersebut tidak ada.</p><p>' + link('/', 'Kembali ke beranda') + '</p></body></html>';
await writeFile(path.join(dist, '404.html'), notFound, 'utf8');
console.log('Generated 404.html');
