---
name: D+Dents Odontologia e Estética (Jardim Zaira)
description: Warmth proven by evidence. Forest-green brand bars, one gold accent, real photos, pill buttons, quiet type.
colors:
  forest-bar: "#1e3a2f"
  forest-bar-deep: "#142a21"
  bar-ink: "#f2f6f2"
  bar-ink-muted: "#b9cabf"
  gold: "#c9a84c"
  gold-hover: "#d8bc68"
  on-gold: "#142a21"
  star-gold: "#8f6f1b"
  paper: "#f5f8f5"
  surface: "#ffffff"
  surface-sage: "#e9f0ea"
  ink: "#102219"
  ink-muted: "#41564a"
  line: "#d3ddd6"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 3.4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.3rem + 2vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.022em"
  quote:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.6vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  item-title:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  sm: "6px"
  md: "16px"
  pill: "999px"
spacing:
  xs: "12px"
  sm: "24px"
  md: "32px"
  lg: "56px"
  section: "clamp(4rem, 9vw, 7.5rem)"
  gutter: "clamp(1rem, 4vw, 2rem)"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.on-gold}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.on-gold}"
  button-gold-lg:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.on-gold}"
    rounded: "{rounded.pill}"
    padding: "12px 30px"
    height: "54px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.surface-sage}"
    textColor: "{colors.ink}"
  button-round:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "48px"
  button-round-hover:
    backgroundColor: "{colors.forest-bar}"
    textColor: "{colors.bar-ink}"
  site-header:
    backgroundColor: "{colors.forest-bar}"
    textColor: "{colors.bar-ink}"
    height: "68px"
  nav-link:
    textColor: "{colors.bar-ink-muted}"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.bar-ink}"
  rating-strip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "12px 0"
  step-node:
    backgroundColor: "{colors.forest-bar}"
    textColor: "{colors.gold}"
    rounded: "{rounded.pill}"
    size: "56px"
  site-footer:
    backgroundColor: "{colors.forest-bar-deep}"
    textColor: "{colors.bar-ink}"
    padding: "56px 0 32px"
  wa-float:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.on-gold}"
    rounded: "{rounded.pill}"
    size: "60px"
  photo-frame:
    backgroundColor: "{colors.surface-sage}"
    rounded: "{rounded.md}"
---

# Design System: D+Dents Odontologia e Estética (Jardim Zaira)

## Overview

**Creative North Star: "The Verified Front Door"**

A visitor who is nervous about the dentist should be able to check, within one scroll, that this clinic is real and kind: the actual storefront with its street number, the 5,0 rating from 391 Google reviews, the clinic's own before/after photos, patients describing fear turning into trust. The design carries that thesis by staying out of the way of the evidence. Forest-green bars hold the real logo (a light logo that needs a dark green ground), a pale cool-green paper holds the content, and a single warm gold marks the one action on the page: schedule an evaluation on WhatsApp.

The mood is calm, local and grown-up rather than clinical. Type is large and friendly-tight (Bricolage Grotesque headlines, Hanken Grotesk text), shapes are soft (16px on every image and surface, pill buttons), and the page is nearly flat: depth comes from tonal bands (paper, white, sage, forest) and one soft shadow under photographs. Dark mode follows the visitor's system and swaps the paper for a green-black while keeping the same gold.

The world is recognizable with no content: a forest-green logo bar, a gold pill, a storefront photo held inside the page margins with rounded corners. The system rejects the dental-landing default (teal and white, stock smiles, three icon cards in a row); it is not an icon-card page, and photographs are always the clinic's own.

**Key Characteristics:**
- Two brand colors only: forest green (structure, bars, headings of authority) and gold (action, stars on dark, small signals).
- Green-tinted neutrals; no pure grey, no pure black on the light theme.
- Pill buttons, 16px surfaces and images, hairline rules instead of boxes.
- Nearly flat: tonal bands for sectioning, one soft shadow on photos and map, a lifted shadow only on the gold button.
- Real evidence first: photo, rating, results, quotes, address, map.
- One orchestrated entrance on the hero, calm scroll reveals elsewhere, all gated by reduced-motion.

## Colors

A restrained green-and-gold palette on tinted neutrals. Green does the structural work, gold is rare and always means "act here".

### Primary
- **Forest Bar** (#1e3a2f; dark theme #12261c): the brand band. Sticky header, the closing call-to-action block, step nodes, the hover fill of round carousel buttons, and the checkbox/accent-color. It is the ground the light logo sits on, so it never changes hue.
- **Forest Bar Deep** (#142a21; dark theme #0c1b14): footer ground and the text color on gold buttons (see On Gold).

### Secondary
- **Logo Gold** (#c9a84c): the only accent. Primary button fill, floating WhatsApp button, active nav underline, link underline, icons in footer and step nodes, text selection, caret color. Hover lifts to **Gold Lift** (#d8bc68).
- **On Gold** (#142a21): text and icon color on any gold fill (about 8:1).
- **Star Gold** (#8f6f1b on light, #d8bc68 on dark): the review stars. Darker than Logo Gold on light grounds so the stars hold contrast on white.

### Neutral
- **Paper** (#f5f8f5; dark #0b1510): page ground.
- **Surface** (#ffffff; dark #111f18): rating strip, the "como agendar" band, round buttons.
- **Sage Wash** (#e9f0ea; dark #162a20): alternate section band, hero photo and map placeholder ground, line-button hover.
- **Ink** (#102219; dark #e8f0ea): body text and strong rules (the treatment group title underline).
- **Ink Muted** (#41564a; dark #a8bbaf): secondary text, captions, descriptions.
- **Hairline** (#d3ddd6; dark #243a2e): borders on the rating strip, quotes, step connectors, round-button outlines.
- **Bar Ink** (#f2f6f2) and **Bar Ink Muted** (#b9cabf): text on forest grounds; **Bar Line** (white at 12%) for dividers on forest.

### Named Rules
**The One Gold Rule.** Gold is the call to action and nothing else decorative. Filled gold means "schedule on WhatsApp"; the label is the same ("Agendar avaliação") everywhere. Gold may also appear as a small supporting mark (link underline, nav underline, icons on green, selection), never as a section background or a second button color.

**The Logo Ground Rule.** The light logo only ever sits on Forest Bar. Anything that holds the logo, or closes the page (header, closing block, footer), uses the forest bands; content bands use paper, surface or sage.

**The Tinted Neutral Rule.** Every neutral leans green (hue about 146 to 167). No #000, no #fff text, no cool grey.

## Typography

**Display Font:** Bricolage Grotesque (with Hanken Grotesk, system sans fallback), weights 500 to 700, optical sizing auto
**Body Font:** Hanken Grotesk (with system sans fallback), weights 400 to 600
**Label/Mono Font:** none distinct; labels are Hanken Grotesk 600

**Character:** Bricolage gives headlines a warm, slightly irregular grotesque voice with tight tracking; Hanken keeps the text calm and readable on a phone. Headlines are sentences, set in sentence case, never uppercase.

### Hierarchy
- **Display** (700, clamp(2.5rem, 1rem + 3.4vw, 3.75rem), 1.04, -0.028em): the single H1 in the hero, balanced wrapping.
- **Headline** (600, clamp(1.875rem, 1.3rem + 2vw, 2.75rem), 1.1, -0.022em): H2 of every section, balanced wrapping.
- **Quote** (500, clamp(1.5rem, 1.1rem + 1.6vw, 2.25rem), 1.22, -0.018em): the one featured patient quote only.
- **Title** (600, 1.5rem, -0.015em): treatment group titles over a 1.5px ink rule. Item titles (600, 1.25rem, 1.3) name each treatment; step titles are 1.3125rem.
- **Lead** (400, 1.1875rem, 1.6, muted, 38ch): the hero sentence. A small lead (1.0625rem, 56ch) introduces sections.
- **Body** (400, 1.0625rem, 1.65): paragraphs; descriptions and captions step down to 1rem and 0.9375rem in Ink Muted, capped at 44ch to 60ch.
- **Label** (600, 1rem, line-height 1): buttons and links; large buttons 1.0625rem. Tabular numerals on rating and opening hours.

### Named Rules
**The Sentence Case Rule.** Labels, buttons and headings are written as normal sentences. Hierarchy comes from size, weight and the display face, not from uppercase, letterspacing or small tracked captions above headings.

**The Short Measure Rule.** Prose never runs wider than about 38ch (lead), 44ch (descriptions) or 56 to 60ch (supporting text). Headlines and quotes use `text-wrap: balance`, paragraphs use `pretty`.

## Layout

Mobile-first, single column, with a 1280px container (`--maxw`) and a fluid side gutter `clamp(1rem, 4vw, 2rem)`. Sections breathe generously: vertical padding `clamp(4rem, 9vw, 7.5rem)`, with section heads capped at 46rem. Sectioning is by tonal band (paper, sage, white, forest) rather than by cards.

Breakpoints in use: 900px (steps go from a vertical timeline to three columns; footer to four columns) and 1024px (the desktop shell). Tailwind CDN supplies the utilities and one extra `xs` screen at 420px.

- **Hero:** asymmetric 5/11 text, 6/11 photo at 1024px and up. The photo stays inside the container margins with 16px corners on all sides (it no longer stays inside the page margins). On mobile, text first, then the photo full width.
- **Treatments:** two honest groups side by side at 1024px, each a ruled list of name plus short description; no cards.
- **Results:** a slow, continuous auto-scrolling strip (80s per loop, CSS transform, paused on hover with a 1.22 zoom, on focus, on touch, off-screen and via a pause button; scroll-snap with arrows under reduced motion) of square before/after images (80vw up to 372px each), held inside the container margins; the next slide peeks at the container edge.
- **Testimonials:** a 12-column grid at 1024px: one large quote spanning 7 columns and two rows, smaller quotes in 5 and 6 column spans, separated by hairline top borders.
- **How to book:** a three-step ordered list; vertical with a connecting hairline on mobile, horizontal with the line running between nodes from 900px.
- **Location:** 5/12 address and hours, 7/12 map at 1024px.
- **Spacing rhythm:** 0.75rem to 1.5rem inside groups, 2rem to 3.5rem between groups, with section heads to content gaps scaling from 2.5rem to 4rem. Touch targets are at least 44px (buttons 48px, large 54px, nav links and footer links 44px).
- **Header:** sticky, 68px tall (76px at 1024px). Anchors scroll with `scroll-padding-top` of header height plus 12px.

## Elevation & Depth

Nearly flat. Depth is conveyed by tonal bands and by 16px-rounded photographs that carry one soft, green-tinted shadow. There are no cards with borders and shadows stacked on each other.

### Shadow Vocabulary
- **Photo Lift** (`box-shadow: 0 1px 2px rgb(16 34 25 / 0.06), 0 14px 34px -16px rgb(16 34 25 / 0.28)`; dark theme `0 1px 2px rgb(0 0 0 / 0.4), 0 18px 40px -16px rgb(0 0 0 / 0.6)`): hero photo, carousel images, map.
- **Gold Seat** (`inset 0 0 0 1px rgb(20 42 33 / 0.22), 0 8px 18px -10px rgb(20 42 33 / 0.55)`; hover deepens the drop to `0 14px 24px -12px rgb(20 42 33 / 0.6)`): the gold button, an inner hairline plus a soft drop so it reads as a pressed-in coin on both light and green grounds.
- **Header Stuck** (`0 10px 30px -14px rgb(0 0 0 / 0.55)` plus a 12%-white bottom border): appears only after the page scrolls past the top sentinel.
- **Float Lift** (`inset 0 0 0 1px rgb(20 42 33 / 0.25), 0 14px 28px -10px rgb(0 0 0 / 0.55)`): the floating WhatsApp button.

### Named Rules
**The Flat Until Raised Rule.** Surfaces are flat at rest. Shadows belong to photographs, the gold button, the stuck header and the floating button; text containers, quotes and list rows never get a shadow or a box.

## Shapes

Soft but not bubbly. Two radii carry the whole system: **16px** (`--radius`) on every image, the map and every other surface, and **999px** (pill) on every button, icon button, step node and floating button. Focus outlines use a 6px radius. The hero photo follows the same 16px radius on all corners; nothing bleeds off the page edge. Dividers are 1px to 1.5px hairlines (rules under group titles are 1.5px Ink). Icons are the Phosphor icon font (regular for UI, fill for WhatsApp and stars), sized 1.15rem to 1.9rem, always paired with a text label except where an `aria-label` names the control.

## Components

### Buttons
- **Shape:** full pill (999px), minimum height 48px (large 54px), icon plus label with 0.6rem gap, label in Hanken Grotesk 600.
- **Gold (primary):** Logo Gold fill, On Gold text, Gold Seat shadow. Hover lifts 1px and brightens to Gold Lift; active presses down (1px, scale 0.985). The same button appears in the header, hero, after treatments, after results, how-to-book, location and closing blocks, always labelled "Agendar avaliação".
- **Line (secondary):** transparent with a 1.5px inset ring in Ink Muted; hover fills Sage Wash and strengthens the ring to Ink. On forest bands it flips to Bar Ink Muted ring and a 8%-white hover fill. Used once, for "Ver as 391 avaliações no Google" under the testimonials ("Traçar rota" is a Link).
- **Link:** inline, 600 weight, underlined 1.5px in gold with 0.3em offset, 44px min height. Hover turns the underline to currentColor and widens the gap to its arrow icon.
- **Round icon button:** 48px circle, white with a Hairline ring; hover fills Forest Bar with Bar Ink text; disabled drops to 38% opacity. Used for carousel previous/next.

### Navigation
- **Header:** sticky Forest Bar, logo at left (40px tall, 46px at desktop), four text anchors (Bar Ink Muted, 500 weight) and the gold CTA. Each anchor gets a 1.5px gold underline that scales in from the left on hover. The underline sits 8px above the bottom of a 44px target.
- **Mobile:** a 48px outlined round menu button toggles a panel with the same anchors at 1.125rem and a full-width large gold button; Escape closes it and returns focus to the button.
- **Footer:** Forest Bar Deep, four columns at 900px and up (identity, links, contact, social), gold icons, 48px outlined circle social buttons that fill gold on hover.

### Rating strip
A white band with hairline top and bottom borders, directly under the hero. The number "5,0" in Bricolage 700 (1.75rem, tabular), five Star Gold filled stars, the "391 avaliações no Google" count, and a quiet Link ("Ler as avaliações"). This is the verification moment in the first scroll.

### Treatment list
Two groups, each titled with a Title-size heading over a 1.5px Ink rule, then name and description pairs at 1.75rem rhythm. No icons, no cards.

### Results carousel
Scroll-snap track with square 16px-rounded before/after images, Photo Lift, and a caption line (strong label plus muted text). Round buttons below; the arrow keys work when the track is focused, and buttons disable at the edges. A fineprint line sits beneath.

### Testimonials
Hairline-topped blocks of quote text, a Star Gold star row, a bold non-italic name, a muted source line. One large quote (Quote scale, no top border) leads; the rest are 1.125rem.

### How to book (signature)
Three numbered-by-order steps, each led by a 56px Forest Bar circle holding a gold line icon, a Title-size heading and a short Ink Muted sentence. A 1.5px Hairline connects the nodes (vertical on mobile, horizontal from 900px).

### Location
Address in 1.1875rem, opening hours as a dt/dd list with tabular numerals, and the Google map in a 16px-rounded, Photo Lift frame, 4:3 on mobile and 16:11 from 1024px.

### Closing block and floating button
The closing CTA is a Forest Bar band with one large headline, one supporting line and a gold button. On phones a 60px gold circle with the WhatsApp glyph floats at the bottom-right, respects safe-area insets and hides at 1024px and up; the footer gets extra bottom padding so it never covers the credit. Its focus ring is a white outline with a Forest Bar Deep halo.

### Focus and selection
Focus ring is a 3px outline offset 3px: Forest Bar on light grounds, gold on bars and the footer, gold-lift in dark theme. Text selection and the input caret are gold.

### Motion
- **Easing:** one curve, `cubic-bezier(0.16, 1, 0.3, 1)` (strong ease-out), for everything that moves.
- **Hero entrance** (the one orchestrated moment): copy children rise 18px and fade over 0.9s with 0.05s, 0.18s, 0.3s delays; the photo reveals via an inset clip-path and opacity over 1.2s while the image settles from scale 1.06 over 1.6s.
- **Scroll reveal:** items rise 20px and fade in (0.8s opacity, 0.9s transform) with an optional per-item delay (`--d`, 110ms steps on the steps); only active when JS has loaded, and a 4s safety timeout reveals everything.
- **Interaction:** button hover lifts 1px (0.25s), press scales 0.985; nav underline scales in over 0.35s; header shadow fades in over 0.3s when stuck.
- **Reduced motion:** all of the above are gated by `prefers-reduced-motion: no-preference`; with reduce, transitions and animations collapse to 0.01ms, smooth scroll and carousel scrolling become instant, and reveal items show immediately.

## Do's and Don'ts

### Do:
- **Do** use Forest Bar (#1e3a2f) for anything that holds the logo or closes the page, and keep the light logo on it unchanged.
- **Do** keep gold (#c9a84c) to the schedule action and small supporting marks, with On Gold (#142a21) text on it; keep the label "Agendar avaliação" identical on every gold button.
- **Do** use 16px radius on every image and surface, and full pills (999px) on every button and icon button.
- **Do** keep controls at 48px (large 54px) and any tap target at 44px or more.
- **Do** put photographs and the rating first; rely on the clinic's own images, keep the hero photo inside the page margins, and keep the 16/9 crop.
- **Do** tint neutrals toward green and flip them with `prefers-color-scheme: dark` by editing only the tokens in `:root`.
- **Do** gate decorative motion behind `prefers-reduced-motion: no-preference` and use the single ease-out curve.
- **Do** use `text-wrap: balance` on headings and quotes and keep prose under about 60ch.

### Don't:
- **Don't** fall back to the dental-landing default: teal and white, stock smiles, a row of three icon cards.
- **Don't** introduce a second accent color, gradients, or gold as a section background.
- **Don't** wrap content in bordered, shadowed cards; use hairlines, tonal bands and whitespace.
- **Don't** use uppercase, tracked captions or "eyebrow" labels above headings; the system does not have them.
- **Don't** use stock or generated photographs, redraw or recolor the logo, or invent facts, prices or offers.
- **Don't** put the light logo on a light ground, or put body text in pure black or pure white.
- **Don't** animate layout properties or add motion that runs without the reduced-motion gate.
