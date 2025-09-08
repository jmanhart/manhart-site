# Reveal.js Slideshow Development Guide

## Overview

Your Astro site now has a fully functional Reveal.js slideshow system. Here's everything you need to know to create and manage presentations.

## What We Fixed

1. **Node.js Version**: Upgraded from v18.20.5 to v20.19.5 (Astro requirement)
2. **Missing Component**: Fixed `demo-presentation.astro` to use `SlideLayout` instead of non-existent `RevealPresentation`
3. **Layout Structure**: Fixed `SlideLayout.astro` to create proper HTML document with reveal div
4. **Script Bundling**: Added `is:inline` directive to prevent Astro from bundling Reveal.js scripts
5. **File Paths**: Updated to use Reveal.js files from `public/revealjs/` directory

## File Structure

```
src/
├── layouts/
│   └── SlideLayout.astro          # Main layout for presentations
├── pages/
│   ├── demo-presentation.astro    # Demo presentation
│   ├── presentation.astro         # Your main presentation
│   └── slides.astro               # List of all slides
├── slides/
│   └── flexbox.astro              # Individual slide files
└── utils/
    └── getSlides.ts               # Utility to get all slides

public/
└── revealjs/                      # Reveal.js assets
    ├── reveal.js
    ├── reveal.css
    └── theme/
        ├── black.css
        ├── white.css
        └── ... (other themes)
```

## How to Create a New Presentation

### Method 1: Individual Slide Files (Recommended)

Create new `.astro` files in the `src/slides/` directory:

```astro
---
import SlideLayout from "../layouts/SlideLayout.astro";

export const title = "Your Presentation Title";
export const authors = ["Your Name"];
export const publishedAt = "2025-01-27";
export const description = "Brief description of your presentation";
export const draft = false; // Set to true to hide from slides list
---

<SlideLayout {title} {authors} {description}>
  <section>
    <h1>Slide 1 Title</h1>
    <p>Your content here</p>
  </section>

  <section>
    <h2>Slide 2 Title</h2>
    <ul>
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
  </section>

  <section>
    <h2>Code Example</h2>
    <pre><code class="language-javascript" data-trim>
function hello() {
  console.log("Hello, world!");
}
    </code></pre>
  </section>
</SlideLayout>
```

### Method 2: Direct Page Files

Create `.astro` files directly in `src/pages/`:

```astro
---
import SlideLayout from "../layouts/SlideLayout.astro";

export const title = "My Presentation";
export const authors = ["John Manhart"];
export const description = "A presentation about...";
---

<SlideLayout {title} {authors} {description}>
  <section>
    <h1>Welcome</h1>
    <p>This is my presentation</p>
  </section>

  <section>
    <h2>Next Slide</h2>
    <p>More content...</p>
  </section>
</SlideLayout>
```

## Available Themes

Your Reveal.js setup includes these themes (in `public/revealjs/theme/`):

- `black.css` - Dark theme (default)
- `white.css` - Light theme
- `league.css` - Professional theme
- `beige.css` - Warm theme
- `sky.css` - Blue theme
- `night.css` - Dark blue theme
- `moon.css` - Dark theme variant
- `serif.css` - Serif fonts
- `simple.css` - Minimal theme
- `solarized.css` - Solarized color scheme

To change themes, edit `src/layouts/SlideLayout.astro` and update this line:

```html
<link rel="stylesheet" href="/revealjs/theme/black.css" />
```

## Reveal.js Features You Can Use

### Fragments (Progressive Disclosure)

```html
<section>
  <h2>Progressive Disclosure</h2>
  <ul>
    <li class="fragment">This appears first</li>
    <li class="fragment">This appears second</li>
    <li class="fragment">This appears third</li>
  </ul>
</section>
```

### Code Highlighting

```html
<section>
  <pre><code class="language-javascript" data-trim>
function example() {
  return "Hello World";
}
  </code></pre>
</section>
```

### Background Images

```html
<section data-background-image="/path/to/image.jpg">
  <h2>Slide with Background</h2>
</section>
```

### Vertical Slides

```html
<section>
  <section>
    <h2>Main Slide</h2>
  </section>
  <section>
    <h3>Sub-slide 1</h3>
  </section>
  <section>
    <h3>Sub-slide 2</h3>
  </section>
</section>
```

## Development Workflow

### 1. Start Development Server

```bash
# Make sure you're using Node.js v20.19.5+
nvm use 20.19.5
npm run dev
```

### 2. Access Your Presentations

- Main site: `http://localhost:4321/`
- Demo presentation: `http://localhost:4321/demo-presentation`
- Your presentation: `http://localhost:4321/presentation`
- All slides list: `http://localhost:4321/slides`
- Individual slide: `http://localhost:4321/slides/flexbox`

### 3. Navigation Controls

- **Arrow keys**: Navigate between slides
- **Space bar**: Next slide
- **ESC**: Overview mode
- **F**: Fullscreen
- **N**: Next slide (custom shortcut)
- **P**: Previous slide (custom shortcut)

## Customization

### Adding Custom Styles

Edit `src/layouts/SlideLayout.astro` and add styles in the `<style>` section:

```html
<style>
  .reveal h1 {
    color: #ff6b6b;
    font-size: 3rem;
  }

  .reveal .slides section {
    text-align: center;
  }
</style>
```

### Changing Reveal.js Settings

Edit the initialization in `src/layouts/SlideLayout.astro`:

```javascript
let deck = new Reveal({
  controls: true, // Show navigation arrows
  progress: true, // Show progress bar
  center: true, // Center slides
  hash: true, // Use hash navigation
  transition: "slide", // Transition effect
  backgroundTransition: "fade",
});
```

## Troubleshooting

### Common Issues

1. **"Unable to find presentation root" error**

   - Make sure you're using `SlideLayout` component
   - Check that the `<div class="reveal">` element exists

2. **Script bundling errors**

   - Ensure Reveal.js scripts have `is:inline` directive
   - Check that files exist in `public/revealjs/`

3. **Node.js version errors**

   - Run `nvm use 20.19.5` before starting dev server
   - Check version with `node --version`

4. **Styling issues**
   - Verify theme CSS files are linked correctly
   - Check for CSS conflicts in your custom styles

## Next Steps

1. **Create your first presentation**: Start with a simple slide file in `src/slides/`
2. **Experiment with themes**: Try different themes to find your preferred style
3. **Add content**: Build out your slides with text, images, and code examples
4. **Customize styling**: Modify the layout to match your brand
5. **Test navigation**: Make sure all slides work correctly

## Resources

- [Reveal.js Documentation](https://revealjs.com/)
- [Reveal.js Themes](https://revealjs.com/themes/)
- [Reveal.js Examples](https://revealjs.com/examples/)
- [Astro Documentation](https://docs.astro.build/)

Happy presenting! 🎉
