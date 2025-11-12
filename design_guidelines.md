# Design Guidelines: Pack de Execuções Perfeitas - Flash Sale Landing Page

## Design Approach
**High-Conversion Sales Page** - Urgency-driven, single-focused landing page optimized for immediate conversion with countdown timer and psychological triggers.

## Core Design Principles
- **Urgency First**: Countdown timer and scarcity messaging dominate the visual hierarchy
- **Trust Signals**: Security badges, guarantees, and immediate access messaging throughout
- **Mobile-First**: Brazilian audience is primarily mobile - optimize for thumb-friendly interactions
- **Minimal Friction**: Single-page layout with persistent CTAs

## Layout Structure

### Hero Section (Full Viewport)
- **Countdown Timer**: Prominent display at top, large format starting at 10:00 minutes
- **Headline Hierarchy**: 
  - "OFERTA RELÂMPAGO — ÚLTIMA E ÚNICA CHANCE!" (urgent, bold)
  - Main value prop: "Domine cada movimento com o Pack de Execuções Perfeitas"
  - Subheadline with emotional trigger
- **Price Display**: Strike-through R$49,00, massive emphasis on R$8,99 with savings percentage
- No hero image - focus on urgency and pricing

### What You Get Section
Grid layout (2 columns on desktop, single on mobile) showing:
- 🎥 25 vídeos práticos
- 📘 1 PDF guia  
- 📱 Acesso vitalício
- 💸 Garantia de 7 dias
- ⚡ Resultados rápidos

Use icons with short descriptive text, maintain scannable format

### Benefits Section
Clean list format with checkmarks:
- Técnica correta e execução precisa
- Zero desperdício de esforço  
- Prevenção de lesões e evolução mais rápida

### CTA Zone (Repeated 2-3 times down page)
Two-button vertical stack with clear visual hierarchy

## Typography
- **Headlines**: Bold, impactful, Portuguese-optimized font (Montserrat or Inter Bold)
- **Body**: Clear, readable sans-serif (16-18px base)
- **CTAs**: ALL CAPS, bold weight for primary action
- **Pricing**: Extra large display font for R$8,99

## Spacing System
Tailwind units: 4, 6, 8, 12, 16, 24 for consistent rhythm
Tight spacing around urgent elements (countdown, price)
Generous padding around CTAs for thumb targets (min 48px height)

## Component Library

### Primary CTA Button (EXACT SPECIFICATIONS)
- Background: #00FF7F (green-lime)
- Text: White, bold, uppercase
- Animation: Pulsating effect (subtle scale + glow every 2s)
- Shadow: Neon glow effect (box-shadow with #00FF7F at 50% opacity)
- Hover: Scale 1.05 + intensified glow
- Padding: Generous (py-6 px-12)
- Text: "💪 QUERO O PACK POR R$8,99 AGORA"

### Secondary Decline Button (EXACT SPECIFICATIONS)
- Background: #2B2B2B (dark gray)
- Text: White, normal weight, discrete
- Hover: Slight blur or darkening effect
- Padding: Medium (py-4 px-8)
- Text: "❌ Não quero evoluir agora"
- Redirects to downsell page

### Countdown Timer Component
- Large digit display (60px+ on desktop)
- Format: MM:SS with separators
- Color coding: Green initially, yellow under 5:00, red under 2:00
- JavaScript-powered, real countdown functionality
- Persistent across scroll (sticky option)

### Trust Badges Section
Row of security indicators:
- 🔒 Pagamento 100% seguro
- ⚡ Acesso imediato  
- 💸 Garantia 7 dias
Small, subtle, bottom of page

## Critical Messaging Elements

### Scarcity Warning (Sticky Bar or Prominent)
"⚠️ Oferta relâmpago: Se sair desta página, ela não estará mais disponível."
- High contrast background (red or orange)
- Always visible

### Urgency Copy Pattern
Use throughout: "última chance", "só disponível nesta página", "exclusiva"

## Animations
**Minimal and Purposeful**:
- Primary CTA: Pulsating glow (2s interval)
- Countdown: Number flip animation on change
- Hover states on buttons only
- NO parallax, NO scroll animations, NO distracting effects

## Images
**No images required** - this is a text and urgency-driven conversion page. The focus is on countdown timer, pricing, and CTAs. Product is digital (videos/PDF) so physical representation not needed.

## Mobile Optimization
- Full-width CTAs (sticky bottom on mobile optional)
- Larger tap targets (min 48px)
- Countdown timer scales proportionally
- Single column layout
- Price display prominent above fold

## Accessibility
- High contrast ratios (primary button has sufficient contrast)
- Clear focus states on interactive elements
- Countdown timer has aria-live region for screen readers
- Button text is descriptive of action

This is a **direct-response sales page** where every element drives toward the R$8,99 conversion. No blog content, no testimonials carousel, no fancy photography - pure conversion optimization.