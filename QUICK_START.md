# Quick Start Guide

## Running the Project

### Development Mode

```bash
cd prop-123-analysis
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Overview

This educational website analyzes Colorado's Proposition 123 AMI (Area Median Income) limits and their impact on rural resort communities. It's designed for policymakers to understand why the 60%/100% income limits prevent workforce housing development in mountain towns.

## Key Sections

1. **Hero** - Compelling headline with key statistics
2. **Executive Summary** - Quick overview of the problem
3. **AMI Problem** - Deep dive with data visualizations
4. **Community Stories** - Real examples (Steamboat, Breckenridge, Aspen, etc.)
5. **Rural Resort Exemption** - Visual flowchart of petition process
6. **Data & Analysis** - Funding gaps, vacancy rates, challenges
7. **Policy Recommendations** - 6 evidence-based solutions

## Editing Content

All data is centralized in `/lib/data/constants.ts`. Update any section by editing the relevant constant:

- `CASE_STUDIES` - Add/edit community stories
- `POLICY_RECOMMENDATIONS` - Modify policy solutions
- `RURAL_RESORT_COUNTIES` - Update county data
- `FUNDING_RESULTS` - Update funding statistics
- etc.

Changes automatically propagate to all components.

## Deployment

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import in Vercel (https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys

The site will be live at a vercel.app URL within minutes.

## Project Structure

```
prop-123-analysis/
├── app/
│   └── page.tsx              # Main page
├── components/
│   ├── Navigation.tsx        # Top nav
│   ├── Footer.tsx            # Bottom footer
│   ├── sections/             # All content sections
│   └── ui/                   # Reusable components
└── lib/
    └── data/
        └── constants.ts      # ALL DATA HERE
```

## Key Features

- **Interactive Charts** - Recharts visualizations
- **Responsive Design** - Works on mobile, tablet, desktop
- **Fast Performance** - Next.js static generation
- **Easy Updates** - All data in one file
- **Print-Friendly** - Suitable for policy briefs

## Tech Stack

- Next.js 14+ (React framework)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Recharts (data viz)

## Next Steps

1. Review content accuracy
2. Customize styling/branding if needed
3. Add any additional case studies
4. Deploy to production
5. Share with policymakers!

## Support

For questions about the code or deployment, refer to the main README.md file.
