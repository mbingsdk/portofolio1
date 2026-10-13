import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './liquid-glass.css';
import App from './App.jsx';

// Preserve previously shared /#/portfolio-style links after migrating to BrowserRouter.
const oldHashRoute = window.location.hash.match(/^#\/(portfolio|about|contact|gallery|discord)\/?$/);
if (oldHashRoute) {
  window.history.replaceState(null, '', `/${oldHashRoute[1]}/`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
