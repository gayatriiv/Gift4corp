# Gift4corp UI Revamp — Complete Design Specification

> **Version**: 1.0  
> **Last Updated**: January 2026  
> **Design Reference**: GARM (garm.com) — Premium Streetwear E-commerce  
> **Objective**: Transform Gift4corp into a premium, high-fashion e-commerce experience while maintaining all existing backend logic.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Design System Foundation](#2-design-system-foundation)
3. [Global Components](#3-global-components)
4. [Home Page Components](#4-home-page-components)
5. [Product & Collection Pages](#5-product--collection-pages)
6. [Cart & Checkout Flow](#6-cart--checkout-flow)
7. [Authentication Pages](#7-authentication-pages)
8. [Supporting Pages](#8-supporting-pages)
9. [Responsive Design](#9-responsive-design)
10. [Animation & Interaction Guidelines](#10-animation--interaction-guidelines)
11. [Implementation Checklist](#11-implementation-checklist)

---

## 1. Design Philosophy

### 1.1 Core Principles

The new Gift4corp design embraces **Premium Minimalism** — a design language that communicates luxury through restraint, intentional whitespace, and confident typography.

#### Key Characteristics:

| Principle | Description |
|-----------|-------------|
| **Editorial Aesthetic** | Every page should feel like a high-fashion lookbook, not a traditional e-commerce store |
| **Full-Bleed Imagery** | Hero sections and category showcases extend edge-to-edge, creating immersive visual experiences |
| **Bold Typography** | Large, confident headlines create visual hierarchy and brand presence |
| **Monochromatic Foundation** | Black, white, and off-white form the base; accent colors are used sparingly |
| **Intentional Restraint** | Remove visual clutter; every element must earn its place |
| **Premium Feel** | Subtle animations, refined spacing, and polished interactions convey quality |

### 1.2 Brand Positioning

Gift4corp should feel like a **luxury corporate gifting destination** — sophisticated, professional, yet approachable. The design should communicate:

- **Trust & Reliability**: Clean, organized layouts
- **Premium Quality**: High-end visual treatment
- **Professionalism**: Refined typography and spacing
- **Modern & Current**: Contemporary design trends

### 1.3 Visual Mood

- **Photography Style**: Natural lighting, outdoor/lifestyle settings, models in relaxed poses
- **Color Temperature**: Warm neutrals with high contrast black/white
- **Texture**: Minimal; flat design with subtle shadows for depth
- **Composition**: Asymmetric layouts, generous negative space

---

## 2. Design System Foundation

### 2.1 Color Palette

#### Primary Colors

```css
:root {
  /* === PRIMARY BRAND COLORS === */
  --color-black: #000000;           /* Primary text, buttons, headers */
  --color-white: #FFFFFF;           /* Backgrounds, text on dark */
  --color-off-white: #FAFAFA;       /* Page background */
  --color-cream: #F5F5F0;           /* Secondary background, cards */
  
  /* === ACCENT COLOR === */
  --color-accent: #FF4D00;          /* CTAs, highlights, sale badges */
  --color-accent-hover: #E64500;    /* Accent hover state */
  --color-accent-light: #FFF0EB;    /* Accent background tint */
  
  /* === TEXT COLORS === */
  --color-text-primary: #000000;    /* Headings, primary text */
  --color-text-secondary: #666666;  /* Body text, descriptions */
  --color-text-tertiary: #999999;   /* Captions, placeholders */
  --color-text-muted: #CCCCCC;      /* Disabled text */
  
  /* === BORDER COLORS === */
  --color-border-light: #E5E5E5;    /* Subtle borders */
  --color-border-medium: #D0D0D0;   /* Input borders */
  --color-border-dark: #000000;     /* Strong borders */
  
  /* === STATUS COLORS === */
  --color-success: #22C55E;         /* In stock, success messages */
  --color-warning: #F59E0B;         /* Low stock, warnings */
  --color-error: #EF4444;           /* Sold out, errors */
  --color-info: #3B82F6;            /* Information, links */
}
```

#### Tailwind Config Extension

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': {
          black: '#000000',
          white: '#FFFFFF',
          'off-white': '#FAFAFA',
          cream: '#F5F5F0',
        },
        'accent': {
          DEFAULT: '#FF4D00',
          hover: '#E64500',
          light: '#FFF0EB',
        },
        'text': {
          primary: '#000000',
          secondary: '#666666',
          tertiary: '#999999',
          muted: '#CCCCCC',
        },
        'border': {
          light: '#E5E5E5',
          medium: '#D0D0D0',
          dark: '#000000',
        },
      },
    },
  },
}
```

### 2.2 Typography

#### Font Family

```css
:root {
  /* === PRIMARY FONTS === */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Anton', 'Impact', sans-serif;  /* For large hero text */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;  /* For prices, codes */
}
```

**Font Loading (index.html)**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### Typography Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Transform |
|---------|---------------|---------------|--------|-------------|----------------|-----------|
| Hero Display | 180px | 72px | 400 | 0.85 | -0.02em | uppercase |
| H1 | 48px | 32px | 700 | 1.1 | -0.02em | none |
| H2 | 36px | 28px | 600 | 1.2 | -0.01em | none |
| H3 | 24px | 20px | 600 | 1.3 | 0 | none |
| H4 | 18px | 16px | 600 | 1.4 | 0 | none |
| Body Large | 18px | 16px | 400 | 1.6 | 0 | none |
| Body | 16px | 14px | 400 | 1.6 | 0 | none |
| Body Small | 14px | 13px | 400 | 1.5 | 0 | none |
| Caption | 12px | 11px | 500 | 1.4 | 0.02em | uppercase |
| Nav Link | 13px | 12px | 500 | 1 | 0.05em | uppercase |
| Button | 14px | 13px | 600 | 1 | 0.05em | uppercase |
| Price | 18px | 16px | 600 | 1 | 0 | none |
| Price Strike | 14px | 13px | 400 | 1 | 0 | none |

#### CSS Implementation

```css
/* Typography Classes */
.text-hero-display {
  font-family: var(--font-display);
  font-size: clamp(72px, 15vw, 180px);
  font-weight: 400;
  line-height: 0.85;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.text-h1 {
  font-family: var(--font-primary);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.text-h2 {
  font-family: var(--font-primary);
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.text-nav {
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text-button {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text-caption {
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
```

### 2.3 Spacing System

Use an **8px base grid** for all spacing decisions.

```css
:root {
  --space-0: 0;
  --space-1: 4px;    /* 0.5x - Tight */
  --space-2: 8px;    /* 1x - Base */
  --space-3: 12px;   /* 1.5x */
  --space-4: 16px;   /* 2x - Default gap */
  --space-5: 24px;   /* 3x */
  --space-6: 32px;   /* 4x - Section padding */
  --space-7: 48px;   /* 6x */
  --space-8: 64px;   /* 8x - Large sections */
  --space-9: 80px;   /* 10x */
  --space-10: 96px;  /* 12x */
  --space-11: 128px; /* 16x - Hero spacing */
  --space-12: 160px; /* 20x */
}
```

#### Tailwind Spacing Extension

```javascript
// tailwind.config.js
spacing: {
  '18': '4.5rem',   // 72px
  '22': '5.5rem',   // 88px
  '26': '6.5rem',   // 104px
  '30': '7.5rem',   // 120px
}
```

### 2.4 Border Radius

Keep borders minimal and sharp for a premium feel:

```css
:root {
  --radius-none: 0;
  --radius-sm: 2px;    /* Subtle rounding */
  --radius-md: 4px;    /* Buttons, inputs */
  --radius-lg: 8px;    /* Cards */
  --radius-full: 9999px; /* Pills, badges */
}
```

**Design Rule**: Most elements should use `--radius-none` or `--radius-sm`. Reserve larger radii for specific components like badges and pills.

### 2.5 Shadows

Minimal shadow usage for premium feel:

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### 2.6 Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-modal-backdrop: 40;
  --z-modal: 50;
  --z-popover: 60;
  --z-tooltip: 70;
  --z-toast: 80;
}
```

---

## 3. Global Components

### 3.1 Announcement Bar

The announcement bar sits at the very top of the page, displaying scrolling promotional messages.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Height | 36px (desktop), 32px (mobile) |
| Background | `#000000` (black) |
| Text Color | `#FFFFFF` (white) |
| Font Size | 12px |
| Font Weight | 500 |
| Letter Spacing | 0.05em |
| Text Transform | uppercase |
| Animation | Horizontal scroll, 30s duration, infinite loop |

#### Content Structure

```
[Message 1] — [Separator] — [Message 2] — [Separator] — [Message 3] ...
```

Example messages:
- "FREE SHIPPING ON ORDERS OVER ₹2000"
- "SAVE 10% WITH CODE CORPORATE10"
- "BULK ORDERS? CALL +91 9620044401"

#### JSX Structure

```jsx
// Components/AnnouncementBar.jsx
const AnnouncementBar = () => {
  const messages = [
    "FREE SHIPPING ON ORDERS OVER ₹2000",
    "SAVE 10% WITH CODE CORPORATE10",
    "BULK ORDERS? CALL +91 9620044401",
    "PAN-INDIA DELIVERY AVAILABLE"
  ];

  return (
    <div className="bg-black text-white h-9 overflow-hidden relative">
      <div className="announcement-scroll flex items-center h-full">
        {[...messages, ...messages, ...messages].map((msg, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-medium tracking-wider uppercase whitespace-nowrap px-8">
              {msg}
            </span>
            <span className="text-white/40 mx-4">—</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
```

#### CSS Animation

```css
.announcement-scroll {
  animation: scroll-left 30s linear infinite;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

.announcement-scroll:hover {
  animation-play-state: paused;
}
```

---

### 3.2 Navbar

The navbar is minimal, sophisticated, and functional. It should feel invisible yet always accessible.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Height | 72px (desktop), 64px (mobile) |
| Background | `#FAFAFA` (off-white) / transparent over hero |
| Position | Sticky top |
| Border Bottom | 1px solid `#E5E5E5` (visible on scroll) |
| Padding Horizontal | 48px (desktop), 16px (mobile) |

#### Layout Structure (Desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [LOGO]          [SHOP] [COLLECTIONS] [MORE]        [🔍] [👤] [🛒⁰]  │
└─────────────────────────────────────────────────────────────────────┘
```

#### Layout Structure (Mobile)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [☰]                    [LOGO]                          [🔍] [🛒⁰]  │
└─────────────────────────────────────────────────────────────────────┘
```

#### Logo Specifications

| Property | Value |
|----------|-------|
| Max Width | 160px (desktop), 120px (mobile) |
| Height | Auto |
| Display | Primary brand wordmark |

#### Navigation Links

| Property | Value |
|----------|-------|
| Font Size | 13px |
| Font Weight | 500 |
| Letter Spacing | 0.05em |
| Text Transform | uppercase |
| Color (Default) | `#000000` |
| Color (Hover) | `#666666` |
| Gap Between Links | 32px |

#### Icon Buttons

| Property | Value |
|----------|-------|
| Size | 20px × 20px |
| Color | `#000000` |
| Hover Color | `#666666` |
| Gap Between Icons | 24px |
| Cart Badge | 16px circle, `#FF4D00` background |

#### Dropdown Menu (College Merchandise)

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | 1px solid `#E5E5E5` |
| Shadow | `--shadow-lg` |
| Border Radius | 0 |
| Padding | 16px 0 |
| Item Padding | 12px 24px |
| Item Hover BG | `#F5F5F0` |
| Min Width | 220px |
| Animation | Fade + slide down, 200ms |

#### JSX Structure

```jsx
// Components/Navbar.jsx
const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-brand-off-white border-b border-border-light">
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Main Navigation */}
      <nav className="h-18 px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Gift4corp" className="h-8 w-auto" />
        </Link>
        
        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/collection" className="text-nav hover:text-text-secondary transition-colors">
            Shop
          </NavLink>
          <NavLink to="/collegemerchandise" className="text-nav hover:text-text-secondary transition-colors">
            Collections
          </NavLink>
          <div className="relative group">
            <button className="text-nav hover:text-text-secondary transition-colors flex items-center gap-1">
              More
              <ChevronDown size={14} />
            </button>
            {/* Dropdown */}
          </div>
        </div>
        
        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          <button onClick={() => setShowSearch(true)} className="hover:opacity-60 transition-opacity">
            <Search size={20} />
          </button>
          <Link to="/login" className="hover:opacity-60 transition-opacity hidden md:block">
            <User size={20} />
          </Link>
          <Link to="/cart" className="relative hover:opacity-60 transition-opacity">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};
```

#### Mobile Navigation Drawer

| Property | Value |
|----------|-------|
| Width | 100% |
| Background | `#FFFFFF` |
| Position | Fixed, full screen |
| Animation | Slide from right, 300ms |
| Close Button | Top right, 48px tap target |
| Menu Item Height | 56px |
| Menu Item Font | 16px, 500 weight, uppercase |
| Menu Item Border | 1px solid `#E5E5E5` bottom |

---

### 3.3 Footer

The footer is text-centric and minimal, avoiding visual clutter while providing essential links.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Background | `#000000` (black) |
| Text Color | `#FFFFFF` (white) |
| Padding Top | 64px |
| Padding Bottom | 32px |
| Padding Horizontal | 48px (desktop), 16px (mobile) |

#### Layout Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [COLLECTIONS PHOTOSHOOT]          [WINTER COLLECTION 3]           │
│  [Image Grid - 2 images]           [Image Grid - 2 images]         │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  TWITTER/X  INSTAGRAM  TIKTOK  |  FAQ  CONTACT  REFUNDS  TERMS     │
│                                   PRIVACY POLICY                    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│            BE THE FIRST TO HEAR OF RELEASES                        │
│            [email@example.com          ] [SUBSCRIBE]                │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  BY GIFT4CORP            [LOGO]                    © 2026 GIFT4CORP │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### Footer Links

| Property | Value |
|----------|-------|
| Font Size | 12px |
| Font Weight | 400 |
| Letter Spacing | 0.03em |
| Text Transform | uppercase |
| Color (Default) | `#FFFFFF` |
| Color (Hover) | `#999999` |
| Separator | `|` with 16px padding |

#### Newsletter Section

| Property | Value |
|----------|-------|
| Heading Font Size | 12px |
| Heading Font Weight | 500 |
| Heading Letter Spacing | 0.05em |
| Input Height | 44px |
| Input Background | transparent |
| Input Border | 1px solid `#FFFFFF` |
| Input Text Color | `#FFFFFF` |
| Input Placeholder Color | `#666666` |
| Button Background | `#FF4D00` |
| Button Text Color | `#FFFFFF` |
| Button Padding | 0 24px |

#### JSX Structure

```jsx
// Components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Image Gallery Section */}
      <div className="grid grid-cols-2 gap-px">
        <div className="p-8">
          <p className="text-caption mb-4">Collections Photoshoot</p>
          <div className="grid grid-cols-2 gap-2">
            <img src={photo1} className="aspect-[3/4] object-cover" />
            <img src={photo2} className="aspect-[3/4] object-cover" />
          </div>
        </div>
        <div className="p-8">
          <p className="text-caption mb-4">Latest Collection</p>
          <div className="grid grid-cols-2 gap-2">
            <img src={photo3} className="aspect-[3/4] object-cover" />
            <img src={photo4} className="aspect-[3/4] object-cover" />
          </div>
        </div>
      </div>
      
      {/* Links Section */}
      <div className="border-t border-white/20 px-6 lg:px-12 py-8">
        <div className="flex flex-wrap justify-center gap-4 text-xs tracking-wider">
          <a href="#" className="hover:text-white/60 transition-colors">TWITTER/X</a>
          <a href="#" className="hover:text-white/60 transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-white/60 transition-colors">LINKEDIN</a>
          <span className="text-white/40">|</span>
          <Link to="/faq" className="hover:text-white/60 transition-colors">FAQ</Link>
          <Link to="/contact" className="hover:text-white/60 transition-colors">CONTACT</Link>
          <Link to="/returns-refunds" className="hover:text-white/60 transition-colors">REFUNDS</Link>
          <Link to="/terms-and-conditions" className="hover:text-white/60 transition-colors">TERMS</Link>
          <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">PRIVACY POLICY</Link>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="border-t border-white/20 px-6 lg:px-12 py-12 text-center">
        <p className="text-caption mb-6">Be the first to hear of releases</p>
        <form className="flex justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="ENTER EMAIL ADDRESS"
            className="flex-1 h-11 px-4 bg-transparent border border-white text-white text-xs tracking-wider placeholder:text-white/40 focus:outline-none"
          />
          <button className="h-11 px-6 bg-accent text-white text-xs font-semibold tracking-wider hover:bg-accent-hover transition-colors">
            SUBSCRIBE
          </button>
        </form>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-6 lg:px-12 py-6 flex items-center justify-between text-xs text-white/60">
        <span>BY GIFT4CORP</span>
        <img src={logo} alt="Gift4corp" className="h-5 invert" />
        <span>© 2026 GIFT4CORP</span>
      </div>
    </footer>
  );
};
```

---

### 3.4 Search Overlay

A full-screen search experience that feels premium and focused.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Background | `rgba(255, 255, 255, 0.98)` with backdrop blur |
| Position | Fixed, full viewport |
| Z-Index | 50 |
| Animation | Fade in, 200ms |

#### Search Input

| Property | Value |
|----------|-------|
| Width | 80% max, centered |
| Font Size | 48px (desktop), 24px (mobile) |
| Font Weight | 300 |
| Border | None (only bottom border) |
| Border Bottom | 2px solid `#000000` |
| Placeholder Color | `#CCCCCC` |
| Padding | 16px 0 |

#### Search Results

| Property | Value |
|----------|-------|
| Max Height | 60vh |
| Overflow | Auto with custom scrollbar |
| Item Height | 80px |
| Item Gap | 0 (separated by border) |
| Image Size | 64px × 64px |
| Title Font | 14px, 500 weight |
| Price Font | 14px, 400 weight, `#666666` |

---

### 3.5 Toast Notifications

Minimal, elegant notification system.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Position | Top right |
| Top Offset | 100px |
| Right Offset | 24px |
| Width | 360px max |
| Background | `#000000` |
| Text Color | `#FFFFFF` |
| Font Size | 14px |
| Padding | 16px 20px |
| Border Radius | 0 |
| Animation | Slide from right, 300ms |

#### Variants

| Variant | Left Border Color |
|---------|-------------------|
| Success | `#22C55E` |
| Error | `#EF4444` |
| Warning | `#F59E0B` |
| Info | `#3B82F6` |

---

### 3.6 Loading States

#### Page Loader

| Property | Value |
|----------|-------|
| Type | Minimal line animation |
| Position | Top of viewport, fixed |
| Height | 2px |
| Background | `#FF4D00` |
| Animation | Left to right progress |

#### Component Loader

| Property | Value |
|----------|-------|
| Type | Simple spinner or pulsing dots |
| Size | 24px |
| Color | `#000000` |
| Animation | 800ms rotation |

```jsx
// Components/LoadingSpinner.jsx
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
  </div>
);
```

---

## 4. Home Page Components

### 4.1 Hero Section

The hero is the most impactful element — a full-bleed, immersive visual statement.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Height | 100vh - navbar height (desktop), 70vh (mobile) |
| Width | 100vw (full bleed, no margins) |
| Position | Relative |
| Overflow | Hidden |

#### Background Image

| Property | Value |
|----------|-------|
| Object Fit | cover |
| Object Position | center |
| Filter | None (keep natural colors) |

#### Overlay

| Property | Value |
|----------|-------|
| Type | Subtle gradient for text readability |
| Gradient | `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))` |

#### Typography Overlay

| Property | Value |
|----------|-------|
| Brand Text | Font: Anton, Size: 15vw (clamp 72px-180px) |
| Brand Text Color | `#FFFFFF` with text shadow |
| Brand Text Position | Center, slightly above middle |
| CTA Text | "SHOP NOW" |
| CTA Font | 16px, 600 weight, uppercase |
| CTA Position | Below brand text, centered |
| CTA Style | Text with arrow icon, hover underline |

#### Slider Indicators

| Property | Value |
|----------|-------|
| Position | Bottom center, 32px from bottom |
| Type | Small circles or lines |
| Active Color | `#FFFFFF` |
| Inactive Color | `rgba(255, 255, 255, 0.4)` |
| Size | 8px circles or 24px × 2px lines |
| Gap | 12px |

#### JSX Structure

```jsx
// Components/Hero.jsx
const Hero = () => {
  const slides = [
    { image: heroImg1, title: "GIFT4CORP", cta: "SHOP NOW" },
    { image: heroImg2, title: "GIFT4CORP", cta: "EXPLORE MORE" },
    { image: heroImg3, title: "GIFT4CORP", cta: "DISCOVER NOW" },
  ];

  return (
    <section className="relative h-[calc(100vh-108px)] md:h-[calc(100vh-108px)] w-screen -mx-[calc(50vw-50%)]">
      {/* Background Image */}
      <img 
        src={slides[currentIndex].image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="font-display text-[15vw] leading-[0.85] tracking-tight">
          {slides[currentIndex].title}
        </h1>
        <Link 
          to="/collection"
          className="mt-8 text-button flex items-center gap-2 group"
        >
          <span className="border-b-2 border-transparent group-hover:border-white transition-all">
            {slides[currentIndex].cta}
          </span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-white w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
```

---

### 4.2 Release Banner

A thin announcement strip below the hero highlighting current promotions or new releases.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Height | 48px |
| Background | `#FAFAFA` |
| Border Top | 1px solid `#E5E5E5` |
| Border Bottom | 1px solid `#E5E5E5` |
| Layout | Flex, space-between |
| Padding | 0 48px (desktop), 0 16px (mobile) |

#### Content

| Element | Property | Value |
|---------|----------|-------|
| Left Text | Font Size | 13px |
| | Font Weight | 500 |
| | Letter Spacing | 0.03em |
| | Text Transform | uppercase |
| | Example | "WINTER COLLECTION OUT NOW" |
| Right Link | Font Size | 13px |
| | Font Weight | 500 |
| | Letter Spacing | 0.03em |
| | Text Transform | uppercase |
| | Example | "BROWSE RELEASE →" |
| | Color | `#000000` |
| | Hover | Underline |

```jsx
// Components/ReleaseBanner.jsx
const ReleaseBanner = () => (
  <div className="h-12 px-6 lg:px-12 flex items-center justify-between border-y border-border-light bg-brand-off-white">
    <p className="text-[13px] font-medium tracking-wider uppercase">
      Corporate Gifting Season is Here.
    </p>
    <Link 
      to="/collection"
      className="text-[13px] font-medium tracking-wider uppercase flex items-center gap-2 hover:underline"
    >
      Browse Collection
      <ArrowUpRight size={14} />
    </Link>
  </div>
);
```

---

### 4.3 Category Showcase

Two large, side-by-side category cards creating visual impact.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Layout | 2-column grid (desktop), 1-column stack (mobile) |
| Gap | 0 (edge-to-edge) |
| Card Height | 600px (desktop), 400px (mobile) |
| Container | Full width, no padding |

#### Category Card

| Property | Value |
|----------|-------|
| Background | Full-bleed image |
| Overlay | `linear-gradient(to top, rgba(0,0,0,0.5), transparent)` |
| Content Position | Bottom center, 48px from bottom |
| Title Font | 24px, 600 weight, uppercase, white |
| Title Position | Centered above button |
| Button Background | `#FFFFFF` |
| Button Text | `#000000`, 13px, 600 weight, uppercase |
| Button Padding | 16px 32px |
| Button Hover | Background `#000000`, Text `#FFFFFF` |

#### JSX Structure

```jsx
// Components/CategoryShowcase.jsx
const CategoryShowcase = () => {
  const categories = [
    { title: "CORPORATE GIFTS", image: corpImg, link: "/category/corporate" },
    { title: "COLLEGE MERCHANDISE", image: collegeImg, link: "/collegemerchandise" },
  ];

  return (
    <section className="w-screen -mx-[calc(50vw-50%)]">
      {/* Section Header */}
      <div className="text-center py-16 px-6">
        <p className="text-caption text-text-secondary mb-2">Welcome to Gift4corp</p>
        <h2 className="text-h2">Explore the Catalog.</h2>
      </div>
      
      {/* Category Grid */}
      <div className="grid md:grid-cols-2">
        {categories.map((cat) => (
          <Link 
            key={cat.title}
            to={cat.link}
            className="relative h-[400px] md:h-[600px] group overflow-hidden"
          >
            <img 
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-12 flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold tracking-wider uppercase mb-4">
                {cat.title}
              </h3>
              <span className="px-8 py-4 bg-white text-black text-[13px] font-semibold tracking-wider uppercase group-hover:bg-black group-hover:text-white transition-colors">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
```

---

### 4.4 Featured Products Slider

An editorial-style product showcase with text and sliding products.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Background | `#F5F5F0` (cream) |
| Padding | 80px vertical, 48px horizontal |
| Layout | 2 columns (text left, products right) |
| Gap | 64px |

#### Left Column (Text)

| Property | Value |
|----------|-------|
| Width | 40% |
| Heading | "Handpicked Featured Drops" |
| Heading Font | 36px, 600 weight |
| Accent Word | "Featured" in `#FF4D00` |
| Description | 16px, 400 weight, `#666666` |
| CTA Button | Black background, white text |
| CTA Padding | 16px 32px |
| CTA Font | 14px, 600 weight, uppercase |

#### Right Column (Products)

| Property | Value |
|----------|-------|
| Width | 60% |
| Layout | 2-column grid |
| Gap | 24px |
| Product Card BG | `#FFFFFF` |
| Product Card Padding | 16px |
| Auto-rotation | Every 4 seconds |

---

### 4.5 Brand Marquee

Showcasing partner brands in a continuous scroll.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Padding | 80px vertical |
| Section Header | Centered, above marquee |

#### Header

| Property | Value |
|----------|-------|
| Title | "Brands We Serve" |
| Title Font | 36px, 700 weight |
| Subtitle | "Trusted by leading brands worldwide" |
| Subtitle Font | 16px, 400 weight, `#666666` |

#### Marquee Track

| Property | Value |
|----------|-------|
| Animation | Scroll left, 40s duration, infinite |
| Item Spacing | 64px between logos |
| Logo Container | 160px × 80px |
| Logo Style | Grayscale, 70% opacity |
| Logo Hover | Full color, 100% opacity |
| Fade Edges | White gradient fade on left/right |

#### Stats Grid

| Property | Value |
|----------|-------|
| Layout | 4 columns |
| Gap | 24px |
| Item Background | `#FFFFFF` |
| Item Border | 1px solid `#E5E5E5` |
| Item Padding | 24px |
| Number Font | 32px, 700 weight |
| Label Font | 14px, 400 weight, `#666666` |

---

### 4.6 Why Choose Us

Value propositions displayed in a clean grid.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Background | `#F5F5F0` |
| Padding | 80px vertical |
| Layout | 3-column grid (desktop), 2-column (tablet), 1-column (mobile) |
| Gap | 24px |

#### Section Header

| Property | Value |
|----------|-------|
| Title | "Why Choose Us?" |
| Title Font | 36px, 700 weight |
| Accent | "Us?" in `#FF4D00` |
| Subtitle | Centered description |

#### Feature Card

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Padding | 32px |
| Border Radius | 0 |
| Hover | Translate Y -4px, shadow-lg |
| Icon Size | 32px |
| Icon Color | `#FF4D00` |
| Title Font | 18px, 600 weight |
| Description | 14px, 400 weight, `#666666` |
| Alignment | Center |

---

### 4.7 Product Ratings / Testimonials

Social proof section with customer testimonials.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Background | `#000000` |
| Text Color | `#FFFFFF` |
| Padding | 80px vertical |
| Layout | Centered content |

#### Content

| Property | Value |
|----------|-------|
| Quote Font | 24px, 300 weight, italic |
| Quote Max Width | 800px |
| Author | 14px, 500 weight, uppercase |
| Company | 13px, 400 weight, `#999999` |
| Navigation | Dots or arrows for multiple testimonials |

---

## 5. Product & Collection Pages

### 5.1 Collection Page Layout

#### Visual Specifications

| Property | Value |
|----------|-------|
| Layout | Sidebar (left) + Product Grid (right) |
| Sidebar Width | 260px |
| Gap | 48px |
| Padding | 48px horizontal |
| Background | `#FAFAFA` |

### 5.2 Filter Sidebar

#### Visual Specifications

| Property | Value |
|----------|-------|
| Width | 260px |
| Position | Sticky, top: 100px |
| Max Height | calc(100vh - 150px) |
| Overflow | Auto |
| Background | `#FFFFFF` |
| Border | 1px solid `#E5E5E5` |
| Padding | 24px |

#### Filter Header

| Property | Value |
|----------|-------|
| Title | "FILTERS" |
| Title Font | 14px, 600 weight, uppercase |
| Letter Spacing | 0.05em |
| Border Bottom | 1px solid `#E5E5E5` |
| Padding Bottom | 16px |
| Margin Bottom | 24px |

#### Filter Section

| Property | Value |
|----------|-------|
| Section Title | 12px, 600 weight, uppercase |
| Section Gap | 24px between sections |
| Checkbox Size | 16px × 16px |
| Checkbox Border | 1px solid `#000000` |
| Checkbox Checked | Black fill with white checkmark |
| Label Font | 14px, 400 weight |
| Label Gap | 8px from checkbox |

#### Color Filter

| Property | Value |
|----------|-------|
| Type | Pill buttons |
| Pill Padding | 8px 16px |
| Pill Border | 1px solid `#E5E5E5` |
| Pill Active | Black background, white text |
| Pill Font | 12px, 500 weight |

### 5.3 Sort Dropdown

| Property | Value |
|----------|-------|
| Position | Top right of product grid |
| Height | 44px |
| Min Width | 180px |
| Background | `#FFFFFF` |
| Border | 1px solid `#E5E5E5` |
| Font | 13px, 500 weight |
| Padding | 0 16px |
| Icon | Chevron down, right side |

### 5.4 Product Grid

| Property | Value |
|----------|-------|
| Layout | 4 columns (desktop), 3 (tablet), 2 (mobile) |
| Gap | 24px horizontal, 48px vertical |
| Items per row | 4 (can be 3 with larger cards) |

### 5.5 Product Card

The product card is minimal and focuses on the product image.

#### Visual Specifications

| Property | Value |
|----------|-------|
| Aspect Ratio | 3:4 (portrait) |
| Background | `#F5F5F0` |
| Border | None |
| Border Radius | 0 |
| Overflow | Hidden |

#### Image

| Property | Value |
|----------|-------|
| Object Fit | cover |
| Transition | Transform 500ms ease |
| Hover | Scale 1.05 |

#### Content (Below Image)

| Property | Value |
|----------|-------|
| Padding | 16px 0 |
| Name Font | 14px, 500 weight |
| Name Lines | Max 2, ellipsis |
| Name Margin Bottom | 8px |
| Price Font | 14px, 600 weight |
| Price Color | `#000000` |
| MRP Font | 13px, 400 weight |
| MRP Color | `#999999` |
| MRP Style | Line-through |
| Discount Badge | Background `#FF4D00`, color white, 10px font |

#### Badges

| Badge | Background | Text Color | Position |
|-------|------------|------------|----------|
| SOLD OUT | `#000000` | `#FFFFFF` | Top left |
| LOW STOCK | `#FF4D00` | `#FFFFFF` | Top left |
| NEW | `#000000` | `#FFFFFF` | Top left |
| SALE | `#FF4D00` | `#FFFFFF` | Top right |

#### JSX Structure

```jsx
// Components/ProductItem.jsx
const ProductItem = ({ id, image, name, price, mrpPrice, quantity }) => {
  const isOutOfStock = quantity === 0;
  const isLowStock = quantity > 0 && quantity < 10;
  
  return (
    <Link to={`/product/${id}`} className="group block">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-brand-cream overflow-hidden">
        <img 
          src={image[0]} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        {isOutOfStock && (
          <span className="absolute top-3 left-3 px-3 py-1.5 bg-black text-white text-[10px] font-semibold tracking-wider uppercase">
            Sold Out
          </span>
        )}
        {isLowStock && (
          <span className="absolute top-3 left-3 px-3 py-1.5 bg-accent text-white text-[10px] font-semibold tracking-wider uppercase">
            Low Stock
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="pt-4">
        <h3 className="text-sm font-medium line-clamp-2 mb-2">{name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">₹{price}</span>
          {mrpPrice > price && (
            <span className="text-sm text-text-tertiary line-through">₹{mrpPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
};
```

---

### 5.6 Product Detail Page

The product detail page is where conversion happens — it must be clean, informative, and persuasive.

#### Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌───────────────────────────┐  ┌─────────────────────────────────┐│
│  │                           │  │ Product Name                    ││
│  │                           │  │ ★★★★☆ (122 reviews)             ││
│  │                           │  │                                 ││
│  │      MAIN IMAGE           │  │ ₹1,299                          ││
│  │                           │  │ M.R.P: ₹1,999 (35% off)         ││
│  │                           │  │                                 ││
│  │                           │  │ Description text...             ││
│  │                           │  │                                 ││
│  └───────────────────────────┘  │ SELECT SIZE                     ││
│  [thumb] [thumb] [thumb]        │ [S] [M] [L] [XL] [XXL]          ││
│                                 │                                 ││
│                                 │ [    ADD TO CART    ]           ││
│                                 │                                 ││
│                                 │ Delivery: Check pincode         ││
│                                 └─────────────────────────────────┘│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### Image Gallery (Left)

| Property | Value |
|----------|-------|
| Width | 55% |
| Main Image Aspect | 3:4 |
| Main Image BG | `#F5F5F0` |
| Thumbnails | Below main image, horizontal scroll |
| Thumbnail Size | 80px × 80px |
| Thumbnail Gap | 12px |
| Thumbnail Border | 2px solid transparent |
| Thumbnail Active | 2px solid `#000000` |

#### Product Info (Right)

| Property | Value |
|----------|-------|
| Width | 45% |
| Padding Left | 48px |
| Sticky | Yes, top: 100px |

#### Product Name

| Property | Value |
|----------|-------|
| Font | 28px, 600 weight |
| Color | `#000000` |
| Margin Bottom | 12px |

#### Rating

| Property | Value |
|----------|-------|
| Star Size | 16px |
| Star Color Filled | `#000000` |
| Star Color Empty | `#E5E5E5` |
| Review Count | 14px, 400 weight, `#666666` |
| Margin Bottom | 24px |

#### Price

| Property | Value |
|----------|-------|
| Current Price Font | 32px, 600 weight |
| Current Price Color | `#000000` |
| MRP Font | 16px, 400 weight |
| MRP Color | `#999999` |
| MRP Style | Line-through |
| Discount Badge | Background `#22C55E`, color white |

#### Size Selector

| Property | Value |
|----------|-------|
| Label | "SELECT SIZE", 13px, 600 weight, uppercase |
| Margin Top | 32px |
| Button Size | 48px × 48px |
| Button Border | 1px solid `#E5E5E5` |
| Button Font | 14px, 500 weight |
| Button Gap | 8px |
| Button Selected | Border 2px solid `#000000` |
| Button Disabled | Opacity 0.4, cursor not-allowed |
| Button Hover | Border color `#000000` |

#### Add to Cart Button

| Property | Value |
|----------|-------|
| Width | 100% |
| Height | 56px |
| Background | `#000000` |
| Text | `#FFFFFF`, 14px, 600 weight, uppercase |
| Letter Spacing | 0.1em |
| Hover | Background `#333333` |
| Disabled | Background `#CCCCCC`, cursor not-allowed |
| Margin Top | 32px |

#### Stock Status

| Status | Display |
|--------|---------|
| In Stock | Green checkmark + "In Stock" |
| Low Stock | Orange warning + "Only X left" |
| Out of Stock | Red X + "Sold Out" |

---

## 6. Cart & Checkout Flow

### 6.1 Cart Page

#### Visual Specifications

| Property | Value |
|----------|-------|
| Layout | 2 columns: Cart Items (left), Summary (right) |
| Left Width | 65% |
| Right Width | 35% |
| Gap | 48px |
| Padding | 48px |
| Background | `#FAFAFA` |

#### Page Header

| Property | Value |
|----------|-------|
| Title | "YOUR CART" |
| Font | 32px, 600 weight |
| Margin Bottom | 32px |

#### Cart Item

| Property | Value |
|----------|-------|
| Layout | Image + Details + Quantity + Remove |
| Background | `#FFFFFF` |
| Padding | 24px |
| Border Bottom | 1px solid `#E5E5E5` |
| Image Size | 100px × 120px |
| Image Object Fit | cover |

#### Item Details

| Property | Value |
|----------|-------|
| Name Font | 16px, 500 weight |
| Size Font | 13px, 400 weight, `#666666` |
| Price Font | 16px, 600 weight |

#### Quantity Control

| Property | Value |
|----------|-------|
| Style | Input with border |
| Width | 80px |
| Height | 40px |
| Border | 1px solid `#E5E5E5` |
| Text Align | Center |

#### Remove Button

| Property | Value |
|----------|-------|
| Type | Icon (trash/X) |
| Size | 20px |
| Color | `#999999` |
| Hover Color | `#000000` |

### 6.2 Cart Summary

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Padding | 32px |
| Position | Sticky, top: 100px |
| Border | 1px solid `#E5E5E5` |

#### Summary Lines

| Property | Value |
|----------|-------|
| Font | 14px |
| Row Height | 40px |
| Subtotal Label | 400 weight |
| Subtotal Value | 500 weight |
| Shipping Label | 400 weight, `#666666` |
| Total Label | 16px, 600 weight |
| Total Value | 18px, 700 weight |
| Divider | 1px solid `#E5E5E5` above total |

#### Checkout Button

| Property | Value |
|----------|-------|
| Width | 100% |
| Height | 56px |
| Background | `#000000` |
| Text | "PROCEED TO CHECKOUT" |
| Font | 14px, 600 weight, uppercase |
| Letter Spacing | 0.1em |
| Margin Top | 24px |

---

### 6.3 Checkout Page (PlaceOrder)

#### Layout

| Property | Value |
|----------|-------|
| Layout | 2 columns: Form (left), Summary (right) |
| Left Width | 60% |
| Right Width | 40% |
| Gap | 48px |
| Padding | 48px |

#### Form Sections

1. Delivery Information
2. Payment Method

#### Form Styling

| Element | Property | Value |
|---------|----------|-------|
| Section Title | Font | 18px, 600 weight |
| | Margin Bottom | 24px |
| Label | Font | 13px, 500 weight, uppercase |
| | Letter Spacing | 0.03em |
| | Margin Bottom | 8px |
| Input | Height | 48px |
| | Border | 1px solid `#E5E5E5` |
| | Border Radius | 0 |
| | Padding | 0 16px |
| | Font | 15px, 400 weight |
| | Focus | Border color `#000000` |
| Input Error | Border | 1px solid `#EF4444` |
| | Error Text | 12px, `#EF4444` |
| Button | Full black styling as above |

---

## 7. Authentication Pages

### 7.1 Login Page

#### Visual Specifications

| Property | Value |
|----------|-------|
| Layout | Centered form |
| Max Width | 400px |
| Background | `#FAFAFA` full page |
| Padding | 48px horizontal |

#### Form Container

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Padding | 48px |
| Border | 1px solid `#E5E5E5` |

#### Header

| Property | Value |
|----------|-------|
| Title | "LOGIN" or "SIGN UP" |
| Font | 24px, 600 weight |
| Letter Spacing | 0.05em |
| Margin Bottom | 32px |
| Text Align | Center |
| Decorative Line | 32px wide, 2px height, below title |

#### Form Fields

| Property | Value |
|----------|-------|
| Gap | 16px |
| Label | Hidden (placeholder only) |
| Input Height | 52px |
| Input Border | 1px solid `#000000` |
| Input Placeholder | 14px, `#999999` |
| Input Focus | Border 2px solid `#000000` |

#### Submit Button

| Property | Value |
|----------|-------|
| Width | 100% |
| Height | 52px |
| Background | `#000000` |
| Text | "SIGN IN" / "CREATE ACCOUNT" |
| Font | 14px, 600 weight, uppercase |
| Margin Top | 24px |

#### Footer Links

| Property | Value |
|----------|-------|
| Font | 13px, 400 weight |
| Color | `#666666` |
| Link Color | `#000000` |
| Link Style | Underline on hover |

---

## 8. Supporting Pages

### 8.1 About Page

#### Layout

| Property | Value |
|----------|-------|
| Hero Image | Full width, 50vh height |
| Content | Centered, max-width 800px |
| Section Padding | 80px vertical |

#### Typography

| Element | Property | Value |
|---------|----------|-------|
| Page Title | Font | 48px, 700 weight |
| | Position | Centered over hero |
| | Color | `#FFFFFF` |
| Section Title | Font | 28px, 600 weight |
| | Margin Bottom | 24px |
| Body Text | Font | 16px, 400 weight |
| | Line Height | 1.8 |
| | Color | `#666666` |

### 8.2 Contact Page

#### Layout

| Property | Value |
|----------|-------|
| Layout | 2 columns: Form + Contact Info |
| Gap | 64px |
| Padding | 80px vertical |

#### Contact Form

Same styling as checkout form.

#### Contact Info

| Property | Value |
|----------|-------|
| Background | `#000000` |
| Text Color | `#FFFFFF` |
| Padding | 48px |
| Title | "GET IN TOUCH", 18px, 600 weight |
| Info Items | Icon + Text, 16px |
| Icon Color | `#FF4D00` |

### 8.3 Policy Pages (Privacy, Terms, Returns, Shipping)

#### Layout

| Property | Value |
|----------|-------|
| Max Width | 800px |
| Margin | Auto (centered) |
| Padding | 80px vertical |

#### Typography

| Element | Property | Value |
|---------|----------|-------|
| Page Title | Font | 36px, 700 weight |
| | Margin Bottom | 48px |
| Section Title | Font | 20px, 600 weight |
| | Margin Top | 48px |
| | Margin Bottom | 16px |
| Body | Font | 15px, 400 weight |
| | Line Height | 1.8 |
| | Color | `#444444` |
| List Item | Bullet | `#FF4D00` |
| | Margin | 8px 0 |

---

## 9. Responsive Design

### 9.1 Breakpoints

```css
/* Tailwind default + custom */
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### 9.2 Mobile-First Approach

All styles should be written mobile-first, with larger breakpoints adding complexity.

### 9.3 Responsive Behavior by Component

| Component | Mobile (<768px) | Tablet (768-1024px) | Desktop (>1024px) |
|-----------|-----------------|---------------------|-------------------|
| Navbar | Hamburger menu | Hamburger menu | Full nav visible |
| Hero | 70vh, smaller text | 80vh | 100vh - nav |
| Category Showcase | 1 column stack | 2 columns | 2 columns |
| Product Grid | 2 columns | 3 columns | 4 columns |
| Product Detail | Stack (image top) | Stack | Side by side |
| Cart | Stack | Stack | Side by side |
| Footer | Stack sections | 2 columns | Full layout |

### 9.4 Mobile Navigation

#### Slide-out Menu

| Property | Value |
|----------|-------|
| Width | 100% |
| Height | 100vh |
| Background | `#FFFFFF` |
| Position | Fixed, right |
| Z-Index | 50 |
| Animation | Slide from right, 300ms |

#### Menu Items

| Property | Value |
|----------|-------|
| Height | 64px |
| Font | 16px, 500 weight, uppercase |
| Letter Spacing | 0.05em |
| Border Bottom | 1px solid `#E5E5E5` |
| Padding | 0 24px |

#### Close Button

| Property | Value |
|----------|-------|
| Position | Top right |
| Size | 48px tap target |
| Icon Size | 24px |

---

## 10. Animation & Interaction Guidelines

### 10.1 Timing Functions

```css
:root {
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 10.2 Duration Scale

| Type | Duration |
|------|----------|
| Instant | 0ms |
| Fast | 150ms |
| Normal | 300ms |
| Slow | 500ms |
| Very Slow | 700ms |

### 10.3 Common Animations

#### Hover Lift

```css
.hover-lift {
  transition: transform 300ms var(--ease-out), box-shadow 300ms var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

#### Image Zoom

```css
.image-zoom {
  overflow: hidden;
}

.image-zoom img {
  transition: transform 500ms var(--ease-out);
}

.image-zoom:hover img {
  transform: scale(1.05);
}
```

#### Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 500ms var(--ease-out) forwards;
}
```

#### Slide In Right (Mobile Menu)

```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 300ms var(--ease-out) forwards;
}
```

### 10.4 Micro-interactions

| Interaction | Animation |
|-------------|-----------|
| Button Press | Scale 0.98 on active |
| Link Hover | Underline slide in from left |
| Card Hover | Subtle lift + shadow |
| Image Hover | Slight zoom |
| Input Focus | Border color transition |
| Checkbox Toggle | Scale bounce |
| Toast Enter | Slide from right + fade |
| Page Transition | Fade |

### 10.5 Page Load Animations

Stagger content reveal on page load:

```css
.stagger-1 { animation-delay: 100ms; }
.stagger-2 { animation-delay: 200ms; }
.stagger-3 { animation-delay: 300ms; }
.stagger-4 { animation-delay: 400ms; }
```

---

## 11. Implementation Checklist

### Phase 1: Foundation

- [ ] Update `tailwind.config.js` with new color palette and spacing
- [ ] Update `index.css` with new font imports and base styles
- [ ] Create CSS variables file for design tokens
- [ ] Add Anton font for display typography

### Phase 2: Global Components

- [ ] Create `AnnouncementBar.jsx` component
- [ ] Revamp `Navbar.jsx` with new design
- [ ] Revamp `Footer.jsx` with new design
- [ ] Create `SearchOverlay.jsx` component
- [ ] Update toast notification styling
- [ ] Create `LoadingSpinner.jsx` component

### Phase 3: Home Page

- [ ] Revamp `Hero.jsx` with full-bleed design
- [ ] Create `ReleaseBanner.jsx` component
- [ ] Revamp `CategoryShowcase.jsx` with new layout
- [ ] Revamp `FeaturedSlider.jsx` with editorial style
- [ ] Revamp `BrandMarquee.jsx` styling
- [ ] Revamp `WhyChooseUs.jsx` card design
- [ ] Create testimonials section
- [ ] Update `Home.jsx` composition

### Phase 4: Product & Collection

- [ ] Revamp `Collection.jsx` layout and filters
- [ ] Revamp `Productitem.jsx` card design
- [ ] Revamp `Product.jsx` detail page
- [ ] Update size selector component
- [ ] Update `RelatedProduct.jsx` styling

### Phase 5: Cart & Checkout

- [ ] Revamp `Cart.jsx` layout
- [ ] Revamp `CartTotal.jsx` summary
- [ ] Revamp `PlaceOrder.jsx` checkout form
- [ ] Update `PincodeChecker.jsx` styling

### Phase 6: Authentication & Support

- [ ] Revamp `Login.jsx` page
- [ ] Revamp `About.jsx` page
- [ ] Revamp `Contact.jsx` page
- [ ] Revamp policy pages (Privacy, Terms, Returns, Shipping)

### Phase 7: Responsive & Polish

- [ ] Test all components on mobile
- [ ] Implement mobile navigation drawer
- [ ] Add page transition animations
- [ ] Performance optimization
- [ ] Cross-browser testing

---

## Appendix A: Tailwind Config (Complete)

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          white: '#FFFFFF',
          'off-white': '#FAFAFA',
          cream: '#F5F5F0',
        },
        accent: {
          DEFAULT: '#FF4D00',
          hover: '#E64500',
          light: '#FFF0EB',
        },
        text: {
          primary: '#000000',
          secondary: '#666666',
          tertiary: '#999999',
          muted: '#CCCCCC',
        },
        border: {
          light: '#E5E5E5',
          medium: '#D0D0D0',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Anton', 'Impact', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(72px, 15vw, 180px)', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
        'h1': ['clamp(32px, 5vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(28px, 4vw, 36px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'nav': ['13px', { lineHeight: '1', letterSpacing: '0.05em' }],
        'button': ['14px', { lineHeight: '1', letterSpacing: '0.05em' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'fade-in-up': 'fadeInUp 500ms ease-out forwards',
        'slide-in-right': 'slideInRight 300ms ease-out forwards',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## Appendix B: CSS Base Styles (Complete)

```css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* === BASE STYLES === */
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  background-color: #FAFAFA;
  color: #000000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* === TYPOGRAPHY UTILITIES === */
.font-display {
  font-family: 'Anton', Impact, sans-serif;
}

.text-hero {
  font-family: 'Anton', Impact, sans-serif;
  font-size: clamp(72px, 15vw, 180px);
  line-height: 0.85;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

/* === SCROLLBAR === */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #F5F5F0;
}

::-webkit-scrollbar-thumb {
  background: #CCCCCC;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #999999;
}

/* === SELECTION === */
::selection {
  background-color: #000000;
  color: #FFFFFF;
}

/* === FOCUS STATES === */
:focus-visible {
  outline: 2px solid #000000;
  outline-offset: 2px;
}

/* === ANIMATIONS === */
.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

.animate-scroll-left:hover {
  animation-play-state: paused;
}

/* === COMPONENT UTILITIES === */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .full-bleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }
}
```

---

## Appendix C: Icon System

Use **Lucide React** for all icons for consistency:

```bash
npm install lucide-react
```

Common icons used:
- `Search` - Search functionality
- `User` - Profile/account
- `ShoppingBag` - Cart
- `Menu` - Mobile menu
- `X` - Close
- `ChevronDown` - Dropdowns
- `ArrowRight` - CTAs
- `ArrowUpRight` - External links
- `Trash2` - Remove from cart
- `Plus` / `Minus` - Quantity controls
- `Check` - Success states
- `AlertCircle` - Warnings
- `Star` - Ratings

---

**End of Design Specification Document**

*This document serves as the single source of truth for the Gift4corp UI revamp. All developers should reference this document when implementing UI changes to ensure consistency across the application.*

