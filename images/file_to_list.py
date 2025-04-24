import os
import json

def list_files_in_folder(folder_path, recursive=False, allowed_extensions=None):
    file_list = []

    if allowed_extensions:
        allowed_extensions = set(ext.lower() for ext in allowed_extensions)

    if recursive:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                if allowed_extensions and not file.lower().endswith(tuple(allowed_extensions)):
                    continue
                full_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_path, folder_path)
                file_list.append(relative_path)
    else:
        for file in os.listdir(folder_path):
            full_path = os.path.join(folder_path, file)
            if os.path.isfile(full_path):
                if allowed_extensions and not file.lower().endswith(tuple(allowed_extensions)):
                    continue
                file_list.append(file)

    return file_list

def save_to_json(data, output_file):
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"Saved {len(data)} filenames to {output_file}")

# ==== Konfigurasi ====
folder_target = os.path.dirname(os.path.abspath(__file__))  # Folder tempat script berada
output_json = 'file_list.json'
scan_recursively = True

# Masukkan ekstensi yang ingin kamu simpan (pakai titik, huruf kecil)
# Contoh: ['.js', '.jsx', '.jpg', '.png', '.md']
allowed_extensions = ['.jpg']
# ======================

files = list_files_in_folder(
    folder_target,
    recursive=scan_recursively,
    allowed_extensions=allowed_extensions
)
save_to_json(files, output_json)
