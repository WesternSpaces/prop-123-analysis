# Proposition 123 AMI Analysis

An educational website exposing the fundamental flaws in Colorado's Proposition 123 Area Median Income (AMI) limits and their impact on rural resort communities.

## Overview

This project provides policymakers with comprehensive analysis and data visualization showing why the 60% and 100% AMI limits prevent rural resort communities from addressing their workforce housing crisis—despite having access to $300 million in annual funding.

## The Problem

Colorado's Proposition 123 (approved November 2022) dedicates significant funding to affordable housing, but its AMI-based income limits create a "missing middle" problem in rural resort communities where:

- Teachers, nurses, police officers, and service workers earn too much to qualify for 60% AMI housing
- Even professionals earning $167,000 can't afford market-rate housing
- AMI calculations are distorted by wealthy retirees and second-home owners
- The rural resort exemption process creates bureaucratic barriers instead of solutions

## Features

### Content Sections

1. **Executive Summary** - Overview of Proposition 123 and the core AMI problem
2. **AMI Problem Deep Dive** - Detailed analysis with data visualizations showing why AMI fails in resort areas
3. **Community Stories** - Real examples from Steamboat Springs, Breckenridge, Aspen, and other mountain towns
4. **Rural Resort Exemption Paradox** - Visual flowchart showing the petition process and its catch-22 requirements
5. **Data & Analysis** - Interactive charts showing funding gaps, vacancy rates, and implementation challenges
6. **Policy Recommendations** - Six evidence-based solutions for policymakers

### Technical Features

- **Next.js 14+** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for responsive design
- **Recharts** for interactive data visualizations
- **Mobile-responsive** design suitable for tablets in legislative briefings
- **SEO optimized** for discoverability

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
prop-123-analysis/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation header
│   ├── Footer.tsx          # Footer with sources and links
│   ├── sections/
│   │   ├── Hero.tsx                    # Hero section with key stats
│   │   ├── ExecutiveSummary.tsx        # Overview and summary
│   │   ├── AMIProblem.tsx              # AMI analysis with charts
│   │   ├── CommunityStories.tsx        # Real-world case studies
│   │   ├── RuralResortExemption.tsx    # Petition process flowchart
│   │   ├── DataAnalysis.tsx            # Funding and vacancy data
│   │   └── PolicyRecommendations.tsx   # Policy solutions
│   └── ui/
│       ├── Section.tsx     # Reusable section component
│       ├── Card.tsx        # Card component
│       └── StatCard.tsx    # Statistics display card
├── lib/
│   └── data/
│       └── constants.ts    # All research data and constants
└── public/
    └── downloads/          # Downloadable resources (PDFs, fact sheets)
```

## Data Sources

All data in this project comes from verified sources including:

- **Colorado Division of Housing** - Proposition 123 implementation guidance and petition processes
- **Colorado Department of Local Affairs (CDOLA)** - Official program data
- **HB23-1304** - Rural resort exemption legislation
- **Colorado Sun, Denver Post, Colorado Public Radio** - Investigative reporting
- **Local mountain town newspapers** - Community-specific case studies
- **Bell Policy Center** - Policy analysis

## Key Statistics

- **$300M** annual funding from 0.1% state income tax
- **202/336** jurisdictions opted in (90% of population)
- **12 rural resort counties** eligible for exemptions
- **100,000+** affordable housing units needed statewide
- **3-4x** funding demand exceeds supply in first round
- **50%+** vacancy rates in Summit, Grand, Pitkin counties

## Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This Next.js application can be deployed to any platform supporting Node.js:

- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Configure as a Next.js SSR app
- **DigitalOcean App Platform**: Select Node.js environment
- **Self-hosted**: Use `npm run build && npm start` with a process manager like PM2

## Customization

### Updating Data

All data constants are centralized in `/lib/data/constants.ts`. To update:

1. Edit the relevant constant (e.g., `CASE_STUDIES`, `POLICY_RECOMMENDATIONS`)
2. Data will automatically propagate to all components
3. No need to update individual components

### Adding New Sections

1. Create a new component in `/components/sections/`
2. Import and add to `/app/page.tsx`
3. Add navigation link in `/components/Navigation.tsx`

### Styling

The project uses Tailwind CSS. Customize colors and theme in `tailwind.config.ts`.

## Future Enhancements

Potential additions:

- [ ] Downloadable PDF policy briefs
- [ ] Printable fact sheets for legislators
- [ ] Interactive map of 12 rural resort counties
- [ ] Timeline visualization of Proposition 123 implementation
- [ ] Comparison tool for different AMI scenarios
- [ ] Petition success/failure tracking dashboard

## License

This project is intended for educational and advocacy purposes related to Colorado housing policy.

## Contact

For questions about the data, analysis, or to report corrections, please reach out through housing policy advocacy channels.

---

**Note**: This resource is designed to inform policy discussions. While all data is sourced from verified public records and reporting, users should verify specific details before citing in official contexts.
