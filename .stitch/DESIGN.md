# Design System: VSG Bliss
**Project ID:** 14081161961353062505

---

## 1. Visual Theme & Atmosphere

**Atmosphere: "The Modern Speakeasy"**

A high-end, late-night lounge aesthetic where Hip Hop, Afrobeat, and Caribbean rhythms converge. Digital-editorial prestige rather than app-like utility. Intentional asymmetry, tonal depth, and generous whitespace create a curated, exclusive feel. Elements feel curated, not placed — whitespace is a luxury material that signifies exclusivity and breathing room.

**Density:** Dense, immersive, "low-light" environment

**Aesthetic Philosophy:** Rejecting rigid, boxy constraints. Using physics and light over lines.

---

## 2. Color Palette & Roles

### Core Palette

| Color Name | Hex Code | Functional Role |
|-----------|---------|---------------|
| Charcoal Black | `#131313` | Base canvas, main background, primary surface |
| Burgundy Wine (Container) | `#4E0707` | Primary container backgrounds, deep rhythmic sections |
| Blush Coral | `#FFB4AB` | Primary accent, highlights, high-contrast callouts |
| Gold Standard | `#E9C349` | Secondary prestige, CTAs, active states, premium badges |
| Warm White | `#E5E2E1` | Primary text (never 100% white) |
| On Surface Variant | `#DBC0BD` | Secondary text, muted content |

### Extended Surface Tones

| Color Name | Hex Code | Functional Role |
|-----------|---------|---------------|
| Surface Container Low | `#1c1b1b` | Card backgrounds, section tier |
| Surface Container | `#20201f` | Component containers |
| Surface Container High | `#2a2a2a` | Lifted components, input fields |
| Surface Container Highest | `#353535` | Elevated surfaces |
| Surface Container Lowest | `#0e0e0e` | Inset elements, deepest layer |
| Surface Bright | `#393939` | Focus states, hover highlights |

### Tertiary & Accent

| Color Name | Hex Code | Functional Role |
|-----------|---------|---------------|
| Tertiary Blue | `#b1c5ff` | Links, tertiary actions |
| Tertiary Container | `#002159` | Tertiary section backgrounds |

### Error States

| Color Name | Hex Code | Functional Role |
|-----------|---------|---------------|
| Error | `#ffb4ab` | Error text and icons |
| Error Container | `#93000a` | Error backgrounds |

### Outline & Border Fallback

| Color Name | Hex Code | Functional Role |
|-----------|---------|---------------|
| Outline | `#a38b88` | Default borders (rarely used) |
| Outline Variant | `#554240` | Ghost borders at 15% opacity only |

---

## 3. Typography Rules

### Font Families

| Element | Font | Weight | Notes |
|---------|------|--------|-------|
| Display & Headlines | Noto Serif | 700/400 | Hero moments, tight letter-spacing (-0.02em) |
| Body Copy | Manrope | 400 | Generous line-height (1.6) for readability |
| Labels & Overlines | Manrope | 500 | Uppercase, wide tracking |

### Typography Hierarchy

- **Display-LG:** Hero headlines with tight letter-spacing
- **Headline-MD:** Section titles
- **Body-LG:** Primary content
- **Body-MD:** Standard text
- **Label-MD:** All-caps overlines in Gold before headlines
- **Label-SM:** Small labels, floating labels

---

## 4. Component Stylings

### Navigation Bar
- **Position:** Fixed/sticky
- **Background:** Semi-transparent `#20201f` (surface_container)
- **Effect:** Glassmorphism (`backdrop-filter: blur(20px)`)
- **Shadow:** Ambient diffused `0px 20px 40px rgba(0, 0, 0, 0.4)`
- **Padding:** `px-12 py-6`

### Buttons

**Primary Button:**
- Background: Gold (`#E9C349`) with gradient (135deg from secondary to secondary_container)
- Text: Dark (`#3c2f00`)
- Corner Radius: `md` (0.375rem)
- Hover State: Subtle glow (increased shadow spread) or 5% brightness increase

**Secondary/Ghost Button:**
- Background: Transparent
- Border: Ghost Border (outline_variant at 15% opacity)
- Text: Gold (`#E9C349`)
- Hover State: Slight brightness increase

### Cards & Containers
- **Corner Radius:** `xl` (0.75rem) for main cards
- **Background:** Use surface container tiers (NOT solid borders)
- **No Dividers:** Use 16-24px whitespace or alternating surface_container tints

### Cards (Editorial Style)
- Asymmetric layout where images overlap container by 24px
- Breaking the container's "box" for editorial feel

### Input Fields
- **Background:** Surface Container High (`#2a2a2a`)
- **No Borders:** Use background color only
- **Floating Labels:** Label-SM in On Surface Variant
- **Focus State:** Transition to Surface Bright + Gold glow (`#E9C349`)

### The "Spotlight" Carousel Component
- Active Item: Display-MD typography + Burgundy container background
- Inactive Items: Desaturated + Surface Container Low background

---

## 5. Layout Principles

### The "No-Line" Rule
**CRITICAL:** 1px solid borders are PROHIBITED.

**Section Separation Methods:**
1. Background Color Shifts: `surface_container_low` card on `surface` background
2. Tonal Transitions: Subtle gradients between `primary_container` and `surface_container_low`

### Tonal Layering (Elevation without Lines)
- **Base:** `surface` (#131313)
- **Section:** `surface_container_low` (#1c1b1b)
- **Card/Component (Inset):** `surface_container_lowest` (#0e0e0e)
- **Card/Component (Lifted):** `surface_container_high` (#2a2a2a)

### Ambient Shadows
For floating elements (buttons, modals):
- Specs: `0px 20px 40px rgba(0, 0, 0, 0.4)`
- Feel: Ambient light being blocked, not drop-shadow

### Ghost Border Fallback
If a border is mandatory for accessibility:
- Use `outline_variant` (#554240) at **15% opacity only**
- NEVER use 100% opacity borders

### Grid & Spacing
- Avoid symmetrical 12-column layouts
- Use 5-column or 7-column clusters for visual interest
- Embrace intentional asymmetry — let images bleed off grid edges

### Whitespace Strategy
- Generous whitespace as a luxury material
- 16px-24px gaps instead of lines for separation

---

## 6. Roundedness Scale

| Size | Value | Use Case |
|------|-------|----------|
| None | `0px` | Full-bleed hero images |
| Sm/Md | `0.125rem - 0.375rem` | Buttons, chips, inputs |
| Xl | `0.75rem` | Main content cards, featured modals |
| Full | `9999px` | Pill-shaped "Live" indicators, tags |

---

## 7. Do's and Don'ts

### Do
- ✅ Embrace asymmetry — align text left, let images bleed off right
- ✅ Use "signature" spacing (xl roundedness for large containers)
- ✅ Prioritize flow — large serif headlines lead to gold overlines
- ✅ Use glassmorphism for floating elements
- ✅ Apply gold gradient CTAs at 135-degree angle

### Don't
- ❌ Use 100% white text — use Warm White (#E5E2E1)
- ❌ Use "Standard" symmetrical grids
- ❌ Use high-contrast dividers — use gaps, not lines
- ❌ Place elements on rigid grids — curate placement over utility

---

## 8. Design System Configuration (Stitch-Ready)

```json
{
  "colorMode": "DARK",
  "font": "NOTO_SERIF",
  "roundness": "ROUND_FOUR",
  "customColor": "#4E0707",
  "headlineFont": "NOTO_SERIF",
  "bodyFont": "MANROPE",
  "labelFont": "MANROPE",
  "colorVariant": "FIDELITY",
  "overridePrimaryColor": "#4E0707",
  "overrideSecondaryColor": "#D4AF37",
  "overrideNeutralColor": "#1A1A1A"
}
```

---

## 9. Quick Reference for Stitch Generation

When prompting Stitch, include these keywords:

- **Background:** Charcoal black (#131313)
- **Primary Container:** Burgundy wine (#4E0707)
- **Accent:** Gold standard (#E9C349)
- **Typography:** Noto Serif headlines, Manrope body
- **Shadows:** Ambient diffused (0px 20px 40px)
- **NO:** 1px borders, solid divider lines, 100% white
- **Glassmorphism:** backdrop-blur-md on nav/modals
- **Tonal Layering:** Surface tiers over borders

**Prompt Template:**
```
A VSG Bliss page with the Modern Speakeasy aesthetic:
- Dark charcoal background (#131313)
- Burgundy wine section containers (#4E0707)
- Gold CTAs (#E9C349)
- Noto Serif headlines, Manrope body text
- No border lines - use tonal color shifts for sections
- Glassmorphism navigation bar
- Generous whitespace
```

---

*Generated: April 2026 | Based on VSG Bliss Stitch Project*