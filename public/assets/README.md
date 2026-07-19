# Assets Directory

Place your images and icons in this directory structure.

## Directory Structure

```
assets/
├── images/          # All photos and graphics
│   ├── logo.png
│   ├── founder.jpg
│   └── og-image.jpg
└── icons/           # Custom icons (if any)
```

## Recommended Image Specifications

### Logo
- **File:** `logo.png` or `logo.svg` (SVG preferred)
- **Size:** 256x256px (or vector)
- **Format:** PNG with transparency or SVG
- **Usage:** Header navigation and footer

### Founder Photo
- **File:** `founder.jpg`
- **Size:** 320x320px (square)
- **Format:** JPG or WebP
- **Quality:** 85% compression
- **Usage:** Founder story section

### Open Graph Image (Social Sharing)
- **File:** `og-image.jpg`
- **Size:** 1200x630px
- **Format:** JPG
- **Quality:** 90% compression
- **Usage:** When page is shared on social media
- **Requirements:**
  - Keep text in the center 1000x500px area
  - Avoid text near edges
  - Use high contrast

### Case Study Images (Optional)
- **Files:** `case-study-1.jpg`, `case-study-2.jpg`, etc.
- **Size:** 800x600px
- **Format:** JPG or WebP
- **Quality:** 85% compression

## Image Optimization

### Before Upload, Optimize Your Images:

#### Using ImageMagick (Command Line)
```bash
# Resize and compress
convert input.jpg -quality 85 -resize 1200x630 output.jpg

# Optimize PNG
optipng -o7 image.png
```

#### Using Online Tools
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Modern formats (WebP)
- [ImageOptim](https://imageoptim.com/) - Mac app

#### Using Modern Formats (WebP)
```bash
# Convert to WebP
cwebp -q 85 input.jpg -o output.webp
```

## How to Add Images to Your Site

### 1. Replace Logo

**In HTML** (`index.html` around line 74):
```html
<div class="nav-logo">
    <img src="assets/images/logo.png" alt="Voltage Software" class="logo-icon">
    <span class="logo-text">Voltage Software</span>
</div>
```

### 2. Add Founder Photo

**In HTML** (`index.html` around line 586):
```html
<div class="founder-image">
    <img src="assets/images/founder.jpg" alt="Alex Hartmann, Founder" class="founder-photo">
</div>
```

**Remove placeholder** and add this CSS in `styles.css`:
```css
.founder-photo {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--color-primary);
}
```

### 3. Update Open Graph Image

**In HTML** (`index.html` around line 18):
```html
<meta property="og:image" content="https://voltage-software.com/assets/images/og-image.jpg">
<meta property="twitter:image" content="https://voltage-software.com/assets/images/og-image.jpg">
```

### 4. Add Case Study Images (Optional)

```html
<div class="case-study-image">
    <img src="assets/images/case-study-1.jpg" alt="FinTech Customer Portal">
</div>
```

## Image Lazy Loading

For better performance, add lazy loading to images:

```html
<img src="assets/images/image.jpg" loading="lazy" alt="Description">
```

## Responsive Images

For different screen sizes:

```html
<img
    src="assets/images/image.jpg"
    srcset="
        assets/images/image-320.jpg 320w,
        assets/images/image-640.jpg 640w,
        assets/images/image-1024.jpg 1024w
    "
    sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px"
    alt="Description"
>
```

## Current Placeholder Status

- [ ] Logo (currently SVG placeholder)
- [ ] Founder photo (currently SVG placeholder)
- [ ] Open Graph image (needs creation)
- [ ] Case study images (optional)

## Quick Checklist

When adding images:

- [ ] Optimize file size (aim for < 200KB per image)
- [ ] Use descriptive alt text
- [ ] Use appropriate format (JPG for photos, PNG for graphics, SVG for logos)
- [ ] Test on mobile devices
- [ ] Verify social sharing preview
- [ ] Add lazy loading for images below the fold

## Testing Social Sharing

After adding your Open Graph image, test it:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

Need help with image optimization or placement? Check the main README.md file.
