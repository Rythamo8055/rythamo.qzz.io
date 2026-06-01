# Design

This document details the visual style system and visual assets of **The Rythamo Gazette**, capturing the committed typography scales, layout tokens, and custom components that establish the editorial newspaper identity.

---

## 🎨 Color Palette & Composition

Our color strategy is **Restrained**—tinted neutrals form the body, while specialized ink colors and deep Vermilion red accents are utilized in small ratios (≤ 5%) to create a striking, authentic printing-press atmosphere.

### Color Tokens

| Token Name | Hex Value | OKLCH Value | Role & Usage |
|---|---|---|---|
| `--color-paper` | `#FAF6F0` | `oklch(97.2% 0.007 55)` | Primary page background; highly textured newsprint cream. |
| `--color-paper-dark` | `#F2E9DB` | `oklch(93.1% 0.015 65)` | Saturated background for profile indices, photo frames, and sidebar widgets. |
| `--color-paper-light` | `#FCFAF7` | `oklch(98.8% 0.003 55)` | Clean background for card grids and classified components. |
| `--color-ink` | `#1C1A17` | `oklch(14.8% 0.005 50)` | Primary body typography and sharp borders; soft print-press black. |
| `--color-ink-light` | `#47433B` | `oklch(31.2% 0.009 60)` | Secondary descriptive texts and editorial columns. |
| `--color-ink-muted` | `#6E685C` | `oklch(47.5% 0.012 60)` | Monospace headers, caption labels, and small subtitles. |
| `--color-accent` | `#6A5D21` | `oklch(43.5% 0.098 94)` | **Rikancha (Color of Soul)**: Traditional & Trustworthy Olive Gold. Main brand accent used for editorial stamps, custom badges, telegram elements, and link hovers. |

---

## font-family & Typography Hierarchy

Typography is the core of our printing-press theme. We import and stack Google Fonts via `next/font/google` variables.

- **Display Serif (`var(--font-playfair)`)**: *Playfair Display* (bold, black, italic). Used for the grand header masthead and lead H2/H3 story headlines.
- **Body Serif (`var(--font-lora)`)**: *Lora* (regular, regular-italic). Used for editorial articles, biography texts, and descriptions. Provides outstanding high-density reading.
- **Monospace Typewriter (`var(--font-courier)`)**: *Courier Prime* (regular, bold). Used for weather stats, classified ads, date lines, telegram inputs, and index tickers.
- **Sans-Serif Modern (`var(--font-outfit)`)**: *Outfit* (bold). Used sparingly for high-visibility category badges (e.g. *★ SPECIAL DISPATCH ★*).

### Typographical Scale

- **H1 (Masthead)**: `font-size: clamp(2.5rem, 6vw, 4.5rem)` with letter-spacing floor `-0.01em` (never below `-0.04em`).
- **H2 (Main Headline)**: `font-size: clamp(1.85rem, 4vw, 3rem)` with line-height `1.15`.
- **H3 (Bulletins)**: `font-size: 1.25rem` with bold weight.
- **Body Prose**: `font-size: 0.875rem` (`14px`) with `line-height: 1.625` to provide breathing room inside tight grids.
- **Monospace Tags**: `font-size: 0.75rem` (`12px`) with letter-spacing `0.05em`.

---

## 🧱 Custom Components

### 1. The Circular Wax-Seal Emblem (`logo.svg`)
- A concentric, dashed and solid SVG circular emblem that encapsulates the minimal serif `"Ry_"` ligature. 
- Designed to rotate slowly (`emblem-stamp-spin` animation) on desktop viewports, pausing on hover to allow detailed inspection of Gooty AP credentials.

### 2. Halftone Photographic Engravings (`.photo-print-frame`)
- Framing wraps with a repeating horizontal raster stripe simulation using clean CSS gradients.
- Grayscale print filter (`filter: grayscale(100%) contrast(1.15)`) applied to emulate standard printing press pictures. 
- Interactive state smoothly lifts filters and expands zoom parameters (`transform: scale(1.02)`) on desktop hovers.

### 3. Telegram Wire System (`.IndianTelegraph`)
- Layout inspired by vintage telegraph forms, compiling name, email, and messages in all-caps stopping formats.
- Complete with custom watermarked "DELIVERED" seal overlays.

### 4. Foot Index Marquee Ticker (`.ticker-marquee`)
- A continuous looping stock-ticker marquee holding portfolio indicators, academic checks, and server compilations.
- Moves at a steady velocity, pausing on hover to preserve screen readability.

---

## 📐 Layout & Spacing Rhythm

- **Responsive Breakdown Grid**:
  - Desktop (≥1024px): 12-column grid. Main story spans 6 columns, flanked by a 3-column sidebar bio and a 3-column classified ad widget.
  - Tablet (768px–1023px): Stacks into clear vertical segments with double borders dividing lead chronicles from side bulletins.
  - Mobile (<768px): Solid 1-column layout. High-contrast headlines remain readable and drop caps scale proportionately.
- **Vertical Spacing**: Clean `gap-8` and `space-y-6` increments aligned to double hair-lines keep components separated without SaaS cards.
