# Subdomain Deployment Guide for There Tech Website

## 🌐 Setting Up a Subdomain in cPanel

Since you already have a main website, let's host this as a subdomain (e.g., `tech.yourdomain.com` or `there.yourdomain.com`).

### 📋 Step 1: Create Subdomain in cPanel

1. **Log into cPanel**
2. **Find "Subdomains"** (usually in Domains section)
3. **Create new subdomain**:
   - **Subdomain name**: `tech` (or `there`, `company`, etc.)
   - **Domain**: Your main domain
   - **Document Root**: `public_html/tech` (or whatever you choose)
4. **Click "Create"**

### 📁 Step 2: Upload Files to Subdomain Directory

Upload **ALL** files from the `dist` folder to your subdomain directory:

**Example**: If your subdomain is `tech.yourdomain.com`
- Upload to: `public_html/tech/`
- Files to upload:
  - `index.html`
  - `vite.svg`
  - `assets/` folder (with all contents)

### 🔧 Step 3: File Structure

Your subdomain directory should look like this:
```
public_html/
├── your-main-website-files/
└── tech/                    ← Your subdomain directory
    ├── index.html
    ├── vite.svg
    └── assets/
        ├── index-CWPzNqtX.js
        └── index-B8Jeyh-L.css
```

### 🌍 Step 4: Access Your Website

Your There Tech website will be available at:
- **https://tech.yourdomain.com** (or whatever subdomain you chose)

### ⚠️ Important Notes

- **Separate from main site**: Your main website remains untouched
- **Independent hosting**: The subdomain works independently
- **Same features**: All React features work the same
- **SSL certificate**: If your hosting has SSL, the subdomain will also be secure

### 🎯 Benefits of Subdomain Approach

✅ **Keep main website intact**
✅ **Easy to manage separately**
✅ **Can have different SSL certificates**
✅ **Easy to remove if needed**
✅ **Professional URL structure**

### 📱 Your Subdomain Features

Your There Tech subdomain will include:
- ✅ Responsive design for all devices
- ✅ Modern hamburger menu for mobile
- ✅ Professional branding and colors
- ✅ Contact forms and navigation
- ✅ Optimized for performance

### 🚀 Quick Upload Steps

1. **Create subdomain in cPanel**
2. **Open File Manager**
3. **Navigate to subdomain directory** (e.g., `public_html/tech/`)
4. **Upload all files from `dist` folder**
5. **Test your subdomain URL**

Your There Tech website will be live at your subdomain once uploaded! 🎉 