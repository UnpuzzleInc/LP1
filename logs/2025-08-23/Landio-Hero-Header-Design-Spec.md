# Landio Hero Section & Header Design Specification

## Overview
This document provides detailed specifications for recreating the Landio landing page header and hero section based on the provided screenshot and website analysis.

**Reference URL:** https://landio.framer.website/

## Design Analysis Summary

### Header Component Specifications

#### Layout & Structure
- **Height:** 64px fixed navigation height
- **Max Width:** 1100px container with centered alignment
- **Layout:** Flexbox with `justify-content: space-between`
- **Font Family:** Inter
- **Background:** Deep black/dark navy (`--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7`)

#### Left Side - Logo & Branding
- **Logo:** "Landio" text with circular icon
- **Color:** White (#FFFFFF)
- **Icon:** Circular design element adjacent to text

#### Center - Navigation Menu
- **Items:** Services, Process, Pricing, Blog, Contact
- **Typography:** Clean, medium weight
- **Color:** White with hover states
- **Spacing:** Equal horizontal spacing between items

#### Right Side - CTA
- **Button:** "Get Template" with icon
- **Style:** Outlined/ghost button design
- **Color:** White border with transparent background
- **Icon:** Right-aligned arrow or similar indicator

### Hero Section Specifications

#### Overall Layout
- **Structure:** Full-width section with centered content
- **Background:** Dark gradient with subtle texture overlay
- **Container:** Column-based flex layout with centered alignment
- **Max Width:** Content constrained for optimal readability

#### Content Hierarchy (Top to Bottom)

##### 1. Badge Component
- **Text:** "NEW GEN AI AUTOMATION PARTNER"
- **Style:** Small pill/badge design
- **Typography:** Small caps, centered
- **Color:** Muted white or accent color
- **Position:** Top of content stack

##### 2. Main Headline
- **Text:** "Automate Smarter. Grow Faster."
- **Typography:** Large, bold weight
- **Color:** White (#FFFFFF)
- **Alignment:** Centered
- **Line Height:** Tight for impact

##### 3. Italic Subtitle
- **Text:** "With AI."
- **Typography:** Italic styling, complementary to main headline
- **Color:** White or slightly muted
- **Position:** Immediately follows main headline

##### 4. Subheading
- **Text:** "AI Automation for Modern Businesses Made Simple"
- **Typography:** Smaller size, medium weight
- **Color:** Muted white/gray
- **Purpose:** Supporting description

##### 5. Primary CTA
- **Text:** "Book A Free Call"
- **Style:** Prominent button with right arrow icon
- **Color:** Likely accent color (blue/white contrast)
- **Position:** Central, below content
- **Icon:** Right-pointing arrow

##### 6. Social Links
- **Icons:** Twitter/X, Instagram, LinkedIn
- **Style:** Circular icons
- **Color:** Muted/subtle appearance
- **Position:** Bottom of hero section
- **Layout:** Horizontal row with equal spacing

#### Background & Visual Effects
- **Base:** Deep dark background
- **Overlay:** Radial gradient effects for depth
- **Texture:** Subtle background patterns
- **Opacity:** Layered translucent effects

## Component Architecture

### Recommended Component Structure
```
components/
├── Header/
│   ├── Header.tsx
│   ├── Logo.tsx
│   ├── Navigation.tsx
│   └── CTAButton.tsx
├── Hero/
│   ├── Hero.tsx
│   ├── Badge.tsx
│   ├── Headline.tsx
│   ├── CTA.tsx
│   └── SocialLinks.tsx
└── UI/
    ├── Button.tsx
    └── Icon.tsx
```

## Technical Implementation Notes

### Typography Stack
- **Primary Font:** Inter
- **Hierarchy:** Multiple weight and size variants
- **Responsive:** Mobile-first approach

### Color Palette
- **Primary Background:** Deep black/navy
- **Text Primary:** White (#FFFFFF)
- **Text Secondary:** Muted white/gray
- **Accent:** Soft blue (for CTAs and highlights)

### Responsive Considerations
- Mobile navigation adaptation
- Flexible typography scaling
- Container width adjustments
- Touch-friendly interactive elements

### Styling Approach
- Component-specific CSS modules or styled-components
- Minimal global CSS usage
- Consistent spacing system
- Hover and interaction states

## Implementation Prompt

**Final Prompt for Development:**

Create a modern AI automation landing page with header and hero section for Next.js:

**Header Component:**
- 64px height dark navigation with "Landio" logo and circular icon
- Navigation: Services, Process, Pricing, Blog, Contact (white text)
- Right: "Get Template" outlined button with icon
- Sticky positioning, Inter font

**Hero Component:**
- Full-screen dark background with gradient effects
- Centered content stack:
  - "NEW GEN AI AUTOMATION PARTNER" badge (small caps)
  - "Automate Smarter. Grow Faster." (large, bold, white)
  - "With AI." (italic subtitle)
  - "AI Automation for Modern Businesses Made Simple" (muted subheading)
  - "Book A Free Call" primary CTA with arrow
  - Social icons: Twitter/X, Instagram, LinkedIn (circular, bottom)

**Requirements:**
- Organized component architecture (Header, Hero, Badge, Button, SocialLinks)
- Dark theme with proper contrast
- Responsive design with mobile adaptation
- Modern typography hierarchy using Inter
- Professional spacing and layout
- Component-specific styling (minimal global.css)
- Clean, tech-forward aesthetic matching reference design

Create reusable, maintainable components with TypeScript support.