// Proposition 123 Data Constants

export const RURAL_RESORT_COUNTIES = [
  { name: 'Archuleta', vacancyRate: 39, population: 'N/A' },
  { name: 'Chaffee', vacancyRate: null, population: 'N/A' },
  { name: 'Eagle', vacancyRate: 37, federalLand: 86 },
  { name: 'Grand', vacancyRate: 57, population: 'N/A' },
  { name: 'Gunnison', vacancyRate: 41, population: 'N/A' },
  { name: 'La Plata', vacancyRate: null, population: 'N/A' },
  { name: 'Ouray', vacancyRate: null, population: 'N/A' },
  { name: 'Pitkin', vacancyRate: 39, population: 'N/A' },
  { name: 'Routt', vacancyRate: 37, amiJump2020to2025: 50, amiJump2015to2020: 11 },
  { name: 'San Juan', vacancyRate: null, population: 'N/A' },
  { name: 'San Miguel', vacancyRate: null, population: 'N/A' },
  { name: 'Summit', vacancyRate: 58, population: 'N/A' },
];

export const KEY_STATISTICS = {
  annualFunding: 300, // million
  prop123VoteMargin: { yes: 52, no: 48 },
  jurisdictionsOptedIn: 202,
  totalJurisdictions: 336,
  populationCovered: 90, // percent
  affordableHousingShortage: 100000, // units
  denverMetroShortage: 50000, // units
  homePriceIncrease2Years: 35, // percent
  taborRefundReduction2023: 43, // dollars
  taborRefundReduction2024: 86, // dollars
};

export const AMI_LIMITS = {
  standard: {
    rental: 60,
    ownership: 100,
  },
  ruralResortMax: {
    rental: 140,
    ownership: 160,
  },
};

export const PROGRAM_ALLOCATION = {
  affordableHousingPrograms: 60, // percent
  homeownershipAndOther: 40, // percent
};

export const REQUIREMENTS = {
  annualGrowth: 3, // percent
  expeditedReviewDays: 90,
  affordableUnitsThreshold: 50, // percent for expedited review
  housingNeedsAssessmentAge: 3, // years
};

export const CASE_STUDIES = [
  {
    location: 'Steamboat Springs',
    county: 'Routt',
    issue: 'Unfilled Position',
    description: 'Human resources position paying $167,000 went unfilled because candidates couldn\'t afford local housing.',
    impact: 'High-paying professional positions remain vacant due to housing costs',
    amiContext: 'County experienced 50% AMI jump from 2020-2025 vs. only 11% growth 2015-2020',
  },
  {
    location: 'Breckenridge',
    county: 'Summit',
    issue: 'Vacant Units',
    description: 'Units designed for 120% AMI earners sat vacant because even at that income level, workers couldn\'t afford them.',
    impact: 'Housing built under Prop 123 limits sits empty while workers commute from distant towns',
    amiContext: 'Summit County has 58% vacancy rate, but vacant homes are second homes/STRs unavailable to workers',
  },
  {
    location: 'Aspen',
    county: 'Pitkin',
    issue: 'Too-Low Income Targeting',
    description: 'Low-Income Housing Tax Credit units targeting 50% AMI ($48,050 annually) proved difficult to fill.',
    impact: 'Units targeting too-low incomes can\'t be filled because local jobs pay more',
    amiContext: 'Few local jobs pay as little as $48,050, creating mismatch between income limits and actual workforce',
  },
  {
    location: 'Summit County',
    county: 'Summit',
    issue: 'Successful Petition Example',
    description: 'Successfully obtained approval for higher AMI limits, demonstrating that the petition process can work when properly documented.',
    impact: 'When properly documented, petitions can succeed and unlock funding for workforce housing',
    amiContext: 'With 58% vacancy rate and severe workforce housing crisis, demonstrated need for limits above standard 60%/100% thresholds',
  },
  {
    location: 'Eagle County',
    county: 'Eagle',
    issue: 'Land Constraints',
    description: '86% of county land is federally owned, leaving only 14% for development, much on steep slopes.',
    impact: 'Physical constraints make the 3% annual growth requirement extremely challenging',
    amiContext: 'Limited buildable land + high costs mean even approved projects face major hurdles',
  },
];

export const FUNDING_RESULTS = {
  firstRound: {
    concessionaryDebt: {
      applications: 38,
      requested: 113, // million
      available: 32, // million
      awarded: 27.05, // million
      unitsCreated: 728,
      recipients: 6,
    },
    landBanking: {
      applications: 113, // Letters of Intent
      fullApplications: 21,
      requested: 255, // million (from Letters of Intent)
      available: 25.34, // million
      awarded: 25.34, // million
      unitsCreated: 1380,
      recipients: 16,
    },
    equityProgram: {
      applications: 36,
      requested: 313, // million
      awarded: 39.39, // million
      unitsCreated: 628,
      recipients: 6,
    },
  },
  notableAwards: [
    { location: 'Frisco', amount: 5.0, purpose: 'Land acquisition', program: 'Land Banking' },
    { location: 'Craig (Woodbury Park)', amount: 2.7, purpose: 'Affordable apartments', program: 'Multiple' },
    { location: 'Grand County (Habitat)', amount: 1.6, purpose: 'Habitat for Humanity projects', program: 'Land Banking' },
    { location: 'Keystone', amount: 1.38, purpose: '47 rental units', program: 'Land Banking' },
    { location: 'Denver (Grove Apts)', amount: 10.5, purpose: 'Affordable units', program: 'Equity' },
    { location: 'Fort Collins (302 Conifer)', amount: 8.2, purpose: 'Affordable units', program: 'Equity' },
  ],
};

export const PETITION_REQUIREMENTS = [
  {
    requirement: 'Housing Needs Assessment',
    details: 'Must be completed within 3 years, use Colorado State Demographer data, assess needs BY AMI BRACKET (not just current resident income)',
    challenge: 'Small jurisdictions may lack staff/expertise for proper AMI bracket analysis',
  },
  {
    requirement: 'Justification Narrative',
    details: 'Explain why alternative funding sources cannot be utilized, are insufficient, or inaccessible',
    challenge: 'Requires comprehensive knowledge of all available housing funding programs',
  },
  {
    requirement: 'Real Project Example',
    details: 'Demonstrate a specific proposed project showing how requested AMI limits would be used',
    challenge: 'Must have shovel-ready projects before even applying for petition approval',
  },
  {
    requirement: 'Impact Analysis',
    details: 'Describe how project meets community needs and fulfills program obligations',
    challenge: 'Requires detailed analysis connecting project to documented needs',
  },
  {
    requirement: 'Weighted Average AMI',
    details: 'Division calculates weighted average AMI of demonstrated housing need; increase only allowed if average exceeds current limits',
    challenge: 'THE CATCH-22: Communities with both low and high-income needs may not show high enough average, even with severe workforce housing crisis',
  },
];

export const WHY_AMI_FAILS_IN_RESORT_AREAS = [
  {
    reason: 'Income Data Distortion',
    explanation: 'AMI calculations include investment earnings and retirement income, not just wages. In resort communities with extreme wealth disparities, high earners skew the median upward.',
    example: 'Most visitors and newcomers earn over $150,000 (many over $300,000), while 60% of locals earn less than $150,000, typically $60,000-$100,000',
  },
  {
    reason: 'The "Missing Middle" Problem',
    explanation: '60-100% AMI limits exclude essential workforce members who earn "too much" to qualify but not enough to afford market-rate housing.',
    example: 'Teachers, nurses, police, firefighters, service workers, and even well-paid professionals cannot afford housing in their communities',
  },
  {
    reason: 'Volatile Income Data',
    explanation: 'Rapid AMI fluctuations create moving targets that don\'t reflect actual wage growth for workers.',
    example: 'Routt County: 50% AMI jump 2020-2025 vs. only 11% growth 2015-2020',
  },
  {
    reason: 'Vacant Units Despite Need',
    explanation: 'Units built to meet AMI limits sit vacant because the limits don\'t match actual workforce income distribution.',
    example: 'Breckenridge: 120% AMI units vacant. Aspen: 50% AMI units can\'t be filled because few jobs pay that little',
  },
];

export const POLICY_RECOMMENDATIONS = [
  {
    title: 'Raise Standard Limits for Rural Resort Counties',
    description: 'Change the baseline AMI limits to 100% rental / 140% ownership for all rural resort counties by default, eliminating petition process.',
    rationale: 'All 12 rural resort counties face the same structural challenges. Making them individually petition is inefficient and creates unnecessary barriers.',
    precedent: 'HB23-1304 already recognizes rural resort counties as a distinct category requiring different treatment.',
  },
  {
    title: 'Simplify Petition Process',
    description: 'Eliminate the weighted average requirement; allow petitions if community can demonstrate ANY significant housing need above current limits.',
    rationale: 'The weighted average creates a mathematical catch-22 that prevents communities with genuine workforce housing crises from qualifying.',
    impact: 'Would allow communities like Steamboat Springs to address missing middle problem without gaming the numbers.',
  },
  {
    title: 'Use Local Wages Instead of AMI',
    description: 'Base income limits on actual local wage data for essential workers rather than area median income that includes investment/retirement income.',
    rationale: 'AMI distortion from wealthy residents creates mismatch between limits and actual workforce earning capacity.',
    implementation: 'Colorado State Demographer already collects wage data that could be used for more accurate targeting.',
  },
  {
    title: 'Create Workforce Housing Category',
    description: 'Establish a separate "workforce housing" category with higher income limits specifically for essential workers, separate from traditional affordable housing.',
    rationale: 'Recognizes that housing for teachers, nurses, and service workers is a different problem than housing for very low-income residents.',
    benefit: 'Allows communities to address multiple housing needs without averaging them together.',
  },
  {
    title: 'Provide Technical Assistance',
    description: 'State should provide free technical assistance and templates for Housing Needs Assessments to smaller rural resort jurisdictions.',
    rationale: 'Small mountain towns often lack the staff and expertise to complete complex HNAs with proper AMI bracket analysis.',
    cost: 'Minimal compared to $300M annual funding; helps ensure funds reach communities that need them most.',
  },
  {
    title: 'Adjust 3% Growth Requirement',
    description: 'Allow alternative compliance pathways for land-constrained communities (e.g., Eagle County with 86% federal land).',
    rationale: 'Physical constraints make percentage-based growth requirements unrealistic in some geographies.',
    alternatives: 'Allow unit counts, percentage of buildable land, or other metrics tailored to local constraints.',
  },
];

export const TIMELINE_EVENTS = [
  { date: 'November 2022', event: 'Proposition 123 approved by voters (52% to 48%)' },
  { date: 'June 2023', event: 'HB23-1304 signed, establishing rural resort petition process' },
  { date: 'July 2023', event: 'Only 14 jurisdictions opted in; concerns about low participation' },
  { date: 'October 2023', event: 'Chaffee County petition approved - first success story' },
  { date: 'November 2023', event: '202 of 336 jurisdictions opted in (covering 90% of population)' },
  { date: 'FY 2023-24', event: '$160M collected (half-year); first round of grants awarded' },
  { date: 'December 31, 2026', event: 'Deadline for demonstrating 3% annual growth and 90-day expedited review' },
];
