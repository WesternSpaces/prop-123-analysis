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
2. **AMI Problem Deep Dive** - Four key reasons why AMI fails in resort areas with data visualizations
3. **Rural Resort Exemption Paradox** - The petition process, Summit County's costly success, and withdrawn petitions
4. **Housing Crisis Data** - Vacancy paradox, affordability gap, cost burden analysis, and AMI distribution
5. **Funding Disparity** - The double-bind: can't compete without exemption, can't get exemption
6. **Data & Analysis** - First round funding results, funding gap charts, and implementation challenges
7. **Policy Recommendations** - Evidence-based solutions including SB24-174 alignment and simplified petition process

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
│   │   ├── RuralResortExemption.tsx    # Petition process and exemption challenges
│   │   ├── HousingCrisisData.tsx       # Vacancy paradox and affordability data
│   │   ├── FundingDisparity.tsx        # Double-bind analysis and funding distribution
│   │   ├── DataAnalysis.tsx            # Funding results and implementation
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
- **13 rural resort counties** (12 designated + Hinsdale applying)
- **34.9%** overall vacancy rate in rural resort counties (3x healthy rate)
- **79.2%** of vacant units are seasonal/recreational (unavailable to workers)
- **Only 2 of 12** counties successfully petitioned for exemption (Summit, Lake)
- **5 jurisdictions withdrew** petitions before decision
- **Front Range: 56%** of land banking funds vs. **Rural Resort: 21%**
- **9 of 12** rural resort counties received ZERO development funding

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

## Data Processing Workflow

This project includes a reusable workflow for processing county-level data:

1. **Data Collection**: Place Excel/CSV files in `/data/` folder
2. **Data Extraction**: Use Claude Code's Task agent to analyze spreadsheets and extract structured data
3. **TypeScript Constants**: Agent creates TypeScript constants in `/lib/data/constants.ts`
4. **Component Integration**: Components automatically consume data from constants
5. **API Endpoints**: `/app/api/` routes expose data for programmatic access
6. **Visualization**: Recharts components render data as interactive charts

This workflow can be replicated for similar county-level analysis projects with different data sources and policy focuses.

## Contact

**Sarah Brown McClain**
Western Spaces
[sarah@westernspaces.co](mailto:sarah@westernspaces.co)

For questions about the data, analysis, or to report corrections.

---

**Note**: This is a high-level analysis prepared for discussion purposes only. While every effort has been made to ensure accuracy, this resource is intended as an educational overview and should not be relied upon as comprehensive policy guidance or legal advice. Data current as of November 2025.
