# Custom Reveal.js Theme Guide

## Overview

You now have a fully integrated custom Reveal.js theme that uses your website's design system and is easily customizable. The theme automatically adapts to your light/dark mode and maintains consistency with your site's styling.

## Files Created

### 1. `public/revealjs/theme/custom.css`

- Main theme file that integrates with your website styles
- Uses CSS custom properties for easy customization
- Includes all Reveal.js components styled consistently

### 2. `src/styles/reveal-theme-config.scss`

- Configuration file for easy theme customization
- Color schemes, typography, spacing, and layout variables
- Utility classes for quick styling

## How to Customize

### 🎨 Changing Colors

Edit `src/styles/reveal-theme-config.scss` and modify the color variables:

```scss
:root {
  --reveal-bg: var(--surface000); // Background color
  --reveal-text: var(--text-primary); // Main text color
  --reveal-text-secondary: var(--text-secondary); // Secondary text
  --reveal-text-tertiary: var(--text-tertiary); // Tertiary text
  --reveal-link: var(--link); // Link color
  --reveal-link-hover: var(--link-hover); // Link hover color
  --reveal-accent: var(--red200); // Accent color (highlights, etc.)
  --reveal-border: var(--divider); // Border color
  --reveal-card-bg: var(--surface200); // Card backgrounds
}
```

### 📝 Changing Typography

Modify typography variables in the same file:

```scss
:root {
  --reveal-font-primary: "Work Sans", sans-serif; // Main font
  --reveal-font-mono: "Monaco", "Menlo", "Ubuntu Mono", monospace; // Code font

  --reveal-font-size-h1: 3rem; // H1 size
  --reveal-font-size-h2: 2rem; // H2 size
  --reveal-font-size-h3: 1.5rem; // H3 size
  --reveal-font-size-body: 1.2rem; // Body text size

  --reveal-font-weight-normal: 400; // Normal weight
  --reveal-font-weight-medium: 500; // Medium weight
  --reveal-font-weight-semibold: 600; // Semibold weight
  --reveal-font-weight-bold: 700; // Bold weight
}
```

### 📐 Changing Layout & Spacing

Adjust spacing and layout variables:

```scss
:root {
  --reveal-spacing-xs: 0.25rem; // Extra small spacing
  --reveal-spacing-sm: 0.5rem; // Small spacing
  --reveal-spacing-md: 1rem; // Medium spacing
  --reveal-spacing-lg: 1.5rem; // Large spacing
  --reveal-spacing-xl: 2rem; // Extra large spacing

  --reveal-radius-sm: 4px; // Small border radius
  --reveal-radius-md: 8px; // Medium border radius
  --reveal-radius-lg: 12px; // Large border radius
}
```

## Pre-built Color Themes

### Default Theme (Your Website Colors)

Already active - uses your existing color system

### Dark Theme Variant

Uncomment this section in `reveal-theme-config.scss`:

```scss
:root {
  --reveal-bg: #0a0a0a;
  --reveal-text: #ffffff;
  --reveal-text-secondary: #b3b3b3;
  --reveal-text-tertiary: #808080;
  --reveal-link: #4a9eff;
  --reveal-link-hover: #6bb6ff;
  --reveal-accent: #ff6b6b;
  --reveal-border: #333333;
  --reveal-card-bg: #1a1a1a;
}
```

### Light Theme Variant

Uncomment this section:

```scss
:root {
  --reveal-bg: #ffffff;
  --reveal-text: #222222;
  --reveal-text-secondary: #4c4c4c;
  --reveal-text-tertiary: #7c7c7c;
  --reveal-link: #0066cc;
  --reveal-link-hover: #004499;
  --reveal-accent: #ff4444;
  --reveal-border: #e0e0e0;
  --reveal-card-bg: #f8f8f8;
}
```

## Using Utility Classes

Your theme includes utility classes for quick styling:

### Text Colors

```html
<section>
  <h1 class="text-accent">Accent Color Title</h1>
  <p class="text-secondary">Secondary text</p>
  <p class="text-tertiary">Tertiary text</p>
</section>
```

### Backgrounds

```html
<section>
  <div class="bg-card rounded shadow">
    <h2>Card with background</h2>
    <p>This has a card background with rounded corners and shadow</p>
  </div>
</section>
```

### Custom Components

```html
<section>
  <h1 class="custom-title">Custom Styled Title</h1>
  <h2 class="custom-subtitle">Custom Subtitle</h2>
  <div class="custom-card">
    <p>This is a custom card with hover effects</p>
  </div>
  <span class="custom-highlight">Highlighted text</span>
</section>
```

### Layout Utilities

```html
<section>
  <div class="flex flex-center gap-2">
    <div class="custom-card">Card 1</div>
    <div class="custom-card">Card 2</div>
  </div>
  <div class="flex flex-between mt-2">
    <span>Left content</span>
    <span>Right content</span>
  </div>
</section>
```

## Switching Between Themes

### Method 1: Change Theme File

Edit `src/layouts/SlideLayout.astro` and change the theme link:

```html
<!-- Current: Custom theme -->
<link rel="stylesheet" href="/revealjs/theme/custom.css" />

<!-- Alternative: Built-in themes -->
<link rel="stylesheet" href="/revealjs/theme/black.css" />
<link rel="stylesheet" href="/revealjs/theme/white.css" />
<link rel="stylesheet" href="/revealjs/theme/league.css" />
<link rel="stylesheet" href="/revealjs/theme/blood.css" />
```

### Method 2: Create Multiple Theme Files

1. Copy `custom.css` to `custom-dark.css`, `custom-light.css`, etc.
2. Modify the color variables in each file
3. Switch between them in `SlideLayout.astro`

## Advanced Customization

### Adding New Components

Add custom components to `custom.css`:

```css
.reveal .my-custom-component {
  background: var(--reveal-card-bg);
  border: 2px solid var(--reveal-accent);
  border-radius: var(--reveal-radius-lg);
  padding: var(--reveal-spacing-lg);
  margin: var(--reveal-spacing-md) 0;
}

.reveal .my-custom-component:hover {
  box-shadow: var(--reveal-shadow-lg);
  transform: translateY(-2px);
  transition: all var(--reveal-transition-normal);
}
```

### Custom Animations

Add animations to `reveal-theme-config.scss`:

```scss
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.reveal .animate-slide-in {
  animation: slideInFromLeft var(--reveal-animation-duration)
    var(--reveal-animation-easing);
}
```

## Integration with Your Website

### Automatic Dark Mode

Your theme automatically uses your website's dark mode variables:

- When `.dark-theme` is applied to `<body>`, the presentation adapts
- Colors automatically switch between light and dark variants
- Maintains consistency with your site's theme

### Consistent Typography

- Uses your `Work Sans` font family
- Matches your website's font sizes and weights
- Consistent line heights and spacing

### Shared Design Tokens

- Uses your existing CSS custom properties
- Maintains your color palette
- Consistent with your card styles and shadows

## Best Practices

1. **Use CSS Variables**: Always use the CSS custom properties for colors, spacing, etc.
2. **Test Both Themes**: Make sure your customizations work in both light and dark modes
3. **Mobile Responsive**: The theme includes mobile breakpoints - test on different screen sizes
4. **Performance**: Keep custom CSS minimal and efficient
5. **Consistency**: Use the utility classes for common patterns

## Troubleshooting

### Colors Not Updating

- Make sure you're editing `reveal-theme-config.scss`, not `custom.css`
- Check that the CSS variables are properly defined
- Clear browser cache

### Typography Issues

- Verify font families are loaded
- Check font-size variables are correct
- Ensure line-height values are appropriate

### Layout Problems

- Use the spacing variables consistently
- Check responsive breakpoints
- Verify flexbox utilities are working

Your custom theme is now fully integrated and ready to use! 🎉
