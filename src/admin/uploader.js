export async function uploadToCloudinary(file, options = {}) {
  const cloudName = options.cloudName || import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = options.uploadPreset || import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const folder = options.folder || import.meta.env.VITE_CLOUDINARY_FOLDER || '';

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary config missing. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  if (folder) formData.append('folder', folder);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error(`Cloudinary upload failed: ${res.status}`);
  return res.json();
}





