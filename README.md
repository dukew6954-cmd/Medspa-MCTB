# Med Spa Text Automation Landing Page

A premium, high-converting landing page for a Med Spa text automation service built with React, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Premium Animations**: Subtle, Apple-like animations using Framer Motion
- **Complete Sections**: All 13 required sections implemented
- **Modern Stack**: Vite + React + TypeScript for fast development
- **Clean Components**: Well-organized, reusable component structure

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Sticky navbar with scroll animations
│   ├── Hero.tsx                 # Hero section with phone mock
│   ├── PhoneConversation.tsx   # Animated phone conversation UI
│   ├── SocialProof.tsx         # Trust bar with logos
│   ├── ProblemSection.tsx      # Problem/cost of inaction
│   ├── HowItWorks.tsx          # 3-step process
│   ├── FeaturesGrid.tsx        # 6 feature cards
│   ├── CampaignsSection.tsx    # Win-back campaigns showcase
│   ├── DemoShowcase.tsx        # Interactive demo with tabs
│   ├── Pricing.tsx             # Pricing section
│   ├── Testimonials.tsx        # Client testimonials
│   ├── FAQ.tsx                 # Expandable FAQ section
│   ├── FinalCTA.tsx            # Final CTA with lead form
│   └── Footer.tsx              # Footer with links
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles with Tailwind
```

## Customization

- **Colors**: Edit `tailwind.config.js` to change the primary color scheme
- **Content**: All copy is in the component files - edit directly
- **Form Submission**: The demo form in `FinalCTA.tsx` currently shows an alert. Connect it to your backend API.

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES2020 support.


