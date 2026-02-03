# PWA Icons Setup Instructions

## Required Icon Sizes

To complete the PWA setup, you need to generate the following icon files from your logo:

### Favicons
- `favicon.ico` (multi-size: 16x16, 32x32, 48x48)
- `favicon-16x16.png`
- `favicon-32x32.png`

### Apple Touch Icon
- `apple-touch-icon.png` (180x180)

### PWA Icons
Create these in the `/public/icons/` folder:
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`

## How to Generate Icons

### Option 1: Using Online Tools
1. Visit https://realfavicongenerator.net/
2. Upload your logo/brand image (square, at least 512x512px)
3. Configure settings for different platforms
4. Download the generated icon pack
5. Place icons in the correct locations:
   - Favicons in `/public/` root
   - PWA icons in `/public/icons/`

### Option 2: Using ImageMagick (Command Line)
If you have ImageMagick installed, use your base logo image (logo.png):

```bash
# Generate PWA icons
convert logo.png -resize 72x72 public/icons/icon-72x72.png
convert logo.png -resize 96x96 public/icons/icon-96x96.png
convert logo.png -resize 128x128 public/icons/icon-128x128.png
convert logo.png -resize 144x144 public/icons/icon-144x144.png
convert logo.png -resize 152x152 public/icons/icon-152x152.png
convert logo.png -resize 192x192 public/icons/icon-192x192.png
convert logo.png -resize 384x384 public/icons/icon-384x384.png
convert logo.png -resize 512x512 public/icons/icon-512x512.png

# Generate favicons
convert logo.png -resize 16x16 public/favicon-16x16.png
convert logo.png -resize 32x32 public/favicon-32x32.png
convert logo.png -resize 180x180 public/apple-touch-icon.png

# Generate multi-size .ico file
convert logo.png -resize 16x16 -resize 32x32 -resize 48x48 public/favicon.ico
```

### Option 3: Using Design Software
- Adobe Photoshop, Illustrator, Figma, or Canva
- Export your logo at each required size
- Save as PNG with transparent background where appropriate
- Ensure consistent branding across all sizes

## Icon Design Best Practices

1. **Square Format**: Icons should be square (1:1 ratio)
2. **Transparent Background**: Use PNG format with transparency for flexibility
3. **Simple Design**: Icons will appear small - keep design simple and recognizable
4. **Safe Zone**: Keep important elements within the center 80% of the canvas
5. **Color Scheme**: Use your brand colors consistently
6. **High Contrast**: Ensure icon is visible on both light and dark backgrounds

## Verification

After adding icons:
1. Check manifest is accessible at: https://travelmysore.com/manifest.json
2. Use Chrome DevTools > Application > Manifest to verify
3. Test PWA installation on mobile devices
4. Verify icons appear correctly when app is installed

## Configuration Files Updated

The following files have been configured:
- ✅ `/public/manifest.json` - PWA manifest with icon references
- ✅ `/src/app/layout.tsx` - Added manifest link and meta tags
- ✅ Theme color set to `#2563eb` (blue) - adjust if needed

You can customize the theme color in both `manifest.json` and `layout.tsx` to match your brand.
