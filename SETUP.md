# Maxim Onufriev - English Tutoring Landing Page

Premium English tutoring landing page for Maxim Onufriev featuring a modern, elegant design with a professional color palette.

## Design System

- **Primary Color**: #1B2A4A (Dark Blue)
- **Accent Color**: #C5A55A (Gold)
- **Secondary Background**: #F8F7F3 (Warm Beige)
- **Typography**: Inter (body) + Space Grotesk (headings)

## Page Sections

1. **Header** - Fixed navigation with responsive menu
2. **Hero** - Main headline and value proposition
3. **Trust Bar** - Company logos (DHL, Yandex, IVI, Linklaters, FTL)
4. **About** - Maxim's background with key statistics
5. **Philosophy** - Teaching approach and core values
6. **Accents** - Pronunciation showcase with audio player
7. **Method** - 4-step training methodology
8. **Format** - Training package options and pricing
9. **For Whom** - Target audiences (professionals, job seekers)
10. **Testimonials** - Student reviews and success stories
11. **Idiom of the Week** - Featured English expression
12. **CTA** - Call-to-action for free consultation
13. **Footer** - Navigation and contact links

## Assets Needed

Before deploying, please provide:

- **Hero Image** → `/public/images/hero.jpg`
- **About/Profile Photo** → `/public/images/about.jpg`
- **Company Logos** (5) → `/public/images/logos/` (DHL, Yandex, IVI, Linklaters, FTL)
- **Audio File** → `/public/audio/accents.mp3` (1.5-2 min accent demonstrations)
- **Favicon** → `/public/favicon.ico`

## Customization

All content is currently placeholder text. Update in these files:
- Section content in `/components/sections/*.tsx`
- Colors in `/app/globals.css` (CSS variables)
- Testimonials, pricing, and contact info in respective sections

## Development

```bash
npm install
npm run dev
```

The site uses Next.js 16 with React 19, Tailwind CSS, and shadcn/ui components.
