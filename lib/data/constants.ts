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
    explanation: 'AMI calculations include investment earnings and retirement income, not just wages. In resort communities with extreme wealth disparities, wealthy second-home owners skew the median upward, creating artificially high AMI that doesn\'t reflect actual worker wages.',
    example: 'Pitkin County (Aspen) AMI: $100,318, but this includes retirees and wealthy investors. Actual teachers, nurses, and service workers earn $60K-$90K and cannot afford $1.1M median homes',
  },
  {
    reason: 'The "Missing Middle" Funding Gap',
    explanation: 'Workers earning 100-140% AMI are excluded from ownership programs despite being unable to afford market-rate homes. Prop 123\'s 100% AMI ownership limit means counties can\'t get funding to build homes these workers can afford.',
    example: 'County employees, teachers, nurses earning $80K-$120K (100-140% AMI) are locked out: too high for Prop 123 ownership programs, but can\'t afford $600K-$1M market homes',
  },
  {
    reason: 'Rental Limits Miss Workforce Reality',
    explanation: 'The 60% AMI rental limit targets households earning around $48K-$63K in most resort counties, but the majority of essential workers earn more. Counties can\'t access funding to build rentals for 80-100% AMI workers.',
    example: 'Summit County service workers, retail managers, government employees typically earn $70K-$90K (80-100% AMI)—above 60% rental limit but still can\'t afford $1,800+/month market rents',
  },
  {
    reason: 'Mismatch Creates Vacant Units',
    explanation: 'When counties do build at AMI limits, units sit vacant because the restrictions don\'t match actual workforce wages. Meanwhile, workers who could afford slightly higher rates have nowhere to go.',
    example: 'Breckenridge units built at 60% AMI sat vacant (workforce earns more), while 120% AMI units also stayed empty (county couldn\'t get Prop 123 funding for that income level, had to use other sources)',
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
    title: 'Simplify Petition Process for Other Communities',
    description: 'For counties outside the rural resort designation, eliminate the weighted average requirement; allow petitions if community can demonstrate ANY significant housing need above current limits.',
    rationale: 'The weighted average creates a mathematical catch-22 that prevents communities with genuine workforce housing crises from qualifying. This reform would help non-rural-resort counties that face similar (but less extreme) affordability challenges.',
    impact: 'Would benefit mountain communities not classified as "rural resort" but still experiencing workforce housing shortages and AMI distortion from wealthy residents.',
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
    title: 'Align SB24-174 and Prop 123 Requirements',
    description: 'Standardize AMI bands and methodology between SB24-174 Housing Needs Assessments and Prop 123 rural resort petitions to eliminate duplicative work.',
    rationale: 'Currently, counties must complete housing needs assessments with different AMI band requirements for SB24-174 vs. Prop 123 petitions, forcing them to do the same analysis twice with incompatible methodologies.',
    impact: 'Counties could use a single Housing Needs Assessment to satisfy both SB24-174 planning requirements and Prop 123 petition requirements, significantly reducing burden on small jurisdictions.',
    implementation: 'DOLA and OEDIT/CHFA should coordinate to establish unified AMI bands and data requirements that satisfy both programs.',
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

// ============================================================================
// COMPREHENSIVE RURAL RESORT COUNTY HOUSING DATA
// ============================================================================
// Data extracted from Colorado State Demography Office (SDO) County Data Tables
// Sources: U.S. Census Bureau American Community Survey 2019-2023 5-year estimates
//          HUD CHAS (Comprehensive Housing Affordability Strategy) 2017-2021
// Generated: November 2025
// ============================================================================

export interface CountyHousingData {
  county: string;
  fullName: string;
  
  // Housing Stock
  totalHousingUnits: number;
  occupiedUnits: number;
  vacantUnits: number;
  occupancyRate: number;
  vacancyRate: number;
  
  // Tenure (Ownership)
  ownerOccupied: number;
  ownerOccupiedPercent: number;
  renterOccupied: number;
  renterOccupiedPercent: number;
  
  // Vacancy Status
  vacantForRent?: number;
  vacantForSale?: number;
  seasonalRecreational?: number;
  seasonalRecreationalPercent?: number;
  
  // Housing Costs
  medianHomeValue?: number;
  medianRent?: number;
  medianIncome?: number;
  
  // Cost Burden
  ownerCostBurdened30Plus?: number;  // Percent paying >30% of income for housing
  ownerCostBurdened50Plus?: number;  // Percent paying >50% of income for housing
  renterCostBurdened30Plus?: number;
  renterCostBurdened50Plus?: number;
  
  // AMI Distribution (HUD CHAS data, 2017-2021)
  householdsExtremelyLowIncome?: number;      // ≤30% AMI
  householdsExtremelyLowIncomePercent?: number;
  householdsVeryLowIncome?: number;           // 31-50% AMI
  householdsVeryLowIncomePercent?: number;
  householdsLowIncome?: number;               // 51-80% AMI
  householdsLowIncomePercent?: number;
  householdsModerateIncome?: number;          // 81-100% AMI
  householdsModerateIncomePercent?: number;
}

export const RURAL_RESORT_COUNTIES_DATA: CountyHousingData[] = [
  {
    county: 'Archuleta',
    fullName: 'Archuleta County',
    totalHousingUnits: 9710,
    occupiedUnits: 5904,
    occupancyRate: 60.8,
    vacantUnits: 3806,
    vacancyRate: 39.2,
    ownerOccupied: 4573,
    ownerOccupiedPercent: 77.5,
    renterOccupied: 1331,
    renterOccupiedPercent: 22.5,
    vacantForRent: 219,
    vacantForSale: 102,
    seasonalRecreational: 3059,
    seasonalRecreationalPercent: 80.4,
    medianHomeValue: 451400,
    medianRent: 1409,
    medianIncome: 76524,
    ownerCostBurdened30Plus: 19.9,
    ownerCostBurdened50Plus: 10.7,
    renterCostBurdened30Plus: 31.6,
    renterCostBurdened50Plus: 13.2,
    householdsExtremelyLowIncome: 543,
    householdsExtremelyLowIncomePercent: 9.4,
    householdsVeryLowIncome: 630,
    householdsVeryLowIncomePercent: 10.9,
    householdsLowIncome: 1179,
    householdsLowIncomePercent: 20.4,
    householdsModerateIncome: 1180,
    householdsModerateIncomePercent: 20.5,
  },
  {
    county: 'Chaffee',
    fullName: 'Chaffee County',
    totalHousingUnits: 11315,
    occupiedUnits: 9195,
    occupancyRate: 81.3,
    vacantUnits: 2120,
    vacancyRate: 18.7,
    ownerOccupied: 6707,
    ownerOccupiedPercent: 72.9,
    renterOccupied: 2488,
    renterOccupiedPercent: 27.1,
    vacantForRent: 128,
    vacantForSale: 55,
    seasonalRecreational: 1666,
    seasonalRecreationalPercent: 78.6,
    medianHomeValue: 598500,
    medianRent: 1514,
    medianIncome: 70909,
    ownerCostBurdened30Plus: 11.5,
    ownerCostBurdened50Plus: 16.1,
    renterCostBurdened30Plus: 23.8,
    renterCostBurdened50Plus: 23.0,
    householdsExtremelyLowIncome: 955,
    householdsExtremelyLowIncomePercent: 11.2,
    householdsVeryLowIncome: 919,
    householdsVeryLowIncomePercent: 10.8,
    householdsLowIncome: 1334,
    householdsLowIncomePercent: 15.6,
    householdsModerateIncome: 1749,
    householdsModerateIncomePercent: 20.5,
  },
  {
    county: 'Eagle',
    fullName: 'Eagle County',
    totalHousingUnits: 33455,
    occupiedUnits: 20911,
    occupancyRate: 62.5,
    vacantUnits: 12544,
    vacancyRate: 37.5,
    ownerOccupied: 14130,
    ownerOccupiedPercent: 67.6,
    renterOccupied: 6781,
    renterOccupiedPercent: 32.4,
    vacantForRent: 1374,
    vacantForSale: 173,
    seasonalRecreational: 10216,
    seasonalRecreationalPercent: 81.4,
    medianHomeValue: 814700,
    medianRent: 2032,
    medianIncome: 103174,
    ownerCostBurdened30Plus: 17.0,
    ownerCostBurdened50Plus: 15.6,
    renterCostBurdened30Plus: 26.1,
    renterCostBurdened50Plus: 29.5,
    householdsExtremelyLowIncome: 2320,
    householdsExtremelyLowIncomePercent: 11.9,
    householdsVeryLowIncome: 2080,
    householdsVeryLowIncomePercent: 10.7,
    householdsLowIncome: 3245,
    householdsLowIncomePercent: 16.6,
    householdsModerateIncome: 3404,
    householdsModerateIncomePercent: 17.4,
  },
  {
    county: 'Grand',
    fullName: 'Grand County',
    totalHousingUnits: 17037,
    occupiedUnits: 6460,
    occupancyRate: 37.9,
    vacantUnits: 10577,
    vacancyRate: 62.1,
    ownerOccupied: 4934,
    ownerOccupiedPercent: 76.4,
    renterOccupied: 1526,
    renterOccupiedPercent: 23.6,
    vacantForRent: 634,
    vacantForSale: 6,
    seasonalRecreational: 9371,
    seasonalRecreationalPercent: 88.6,
    medianHomeValue: 507200,
    medianRent: 1451,
    medianIncome: 84558,
    ownerCostBurdened30Plus: 17.9,
    ownerCostBurdened50Plus: 10.4,
    renterCostBurdened30Plus: 22.4,
    renterCostBurdened50Plus: 23.4,
    householdsExtremelyLowIncome: 424,
    householdsExtremelyLowIncomePercent: 7.3,
    householdsVeryLowIncome: 690,
    householdsVeryLowIncomePercent: 11.8,
    householdsLowIncome: 1005,
    householdsLowIncomePercent: 17.2,
    householdsModerateIncome: 1154,
    householdsModerateIncomePercent: 19.8,
  },
  {
    county: 'Gunnison',
    fullName: 'Gunnison County',
    totalHousingUnits: 12348,
    occupiedUnits: 7903,
    occupancyRate: 64.0,
    vacantUnits: 4445,
    vacancyRate: 36.0,
    ownerOccupied: 5290,
    ownerOccupiedPercent: 66.9,
    renterOccupied: 2613,
    renterOccupiedPercent: 33.1,
    vacantForRent: 406,
    vacantForSale: 154,
    seasonalRecreational: 3488,
    seasonalRecreationalPercent: 78.5,
    medianHomeValue: 597200,
    medianRent: 1191,
    medianIncome: 77358,
    ownerCostBurdened30Plus: 13.5,
    ownerCostBurdened50Plus: 12.2,
    renterCostBurdened30Plus: 20.2,
    renterCostBurdened50Plus: 29.1,
    householdsExtremelyLowIncome: 720,
    householdsExtremelyLowIncomePercent: 10.1,
    householdsVeryLowIncome: 990,
    householdsVeryLowIncomePercent: 13.9,
    householdsLowIncome: 1060,
    householdsLowIncomePercent: 14.9,
    householdsModerateIncome: 1630,
    householdsModerateIncomePercent: 23.0,
  },
  {
    county: 'Hinsdale',
    fullName: 'Hinsdale County',
    totalHousingUnits: 1384,
    occupiedUnits: 473,
    occupancyRate: 34.2,
    vacantUnits: 911,
    vacancyRate: 65.8,
    ownerOccupied: 377,
    ownerOccupiedPercent: 79.7,
    renterOccupied: 96,
    renterOccupiedPercent: 20.3,
    vacantForRent: 44,
    vacantForSale: 12,
    seasonalRecreational: 816,
    seasonalRecreationalPercent: 89.6,
    medianHomeValue: 438800,
    medianRent: 1099,
    medianIncome: 64327,
    ownerCostBurdened30Plus: 6.4,
    ownerCostBurdened50Plus: 21.2,
    renterCostBurdened30Plus: 11.5,
    renterCostBurdened50Plus: 5.2,
    householdsExtremelyLowIncome: 43,
    householdsExtremelyLowIncomePercent: 9.8,
    householdsVeryLowIncome: 56,
    householdsVeryLowIncomePercent: 12.7,
    householdsLowIncome: 151,
    householdsLowIncomePercent: 34.3,
    householdsModerateIncome: 55,
    householdsModerateIncomePercent: 12.5,
  },
  {
    county: 'La Plata',
    fullName: 'La Plata County',
    totalHousingUnits: 28613,
    occupiedUnits: 23200,
    occupancyRate: 81.1,
    vacantUnits: 5413,
    vacancyRate: 18.9,
    ownerOccupied: 16462,
    ownerOccupiedPercent: 71.0,
    renterOccupied: 6738,
    renterOccupiedPercent: 29.0,
    vacantForRent: 541,
    vacantForSale: 248,
    seasonalRecreational: 3044,
    seasonalRecreationalPercent: 56.2,
    medianHomeValue: 549100,
    medianRent: 1409,
    medianIncome: 85296,
    ownerCostBurdened30Plus: 14.3,
    ownerCostBurdened50Plus: 8.5,
    renterCostBurdened30Plus: 23.3,
    renterCostBurdened50Plus: 23.8,
    householdsExtremelyLowIncome: 2295,
    householdsExtremelyLowIncomePercent: 10.3,
    householdsVeryLowIncome: 2800,
    householdsVeryLowIncomePercent: 12.6,
    householdsLowIncome: 3835,
    householdsLowIncomePercent: 17.2,
    householdsModerateIncome: 3945,
    householdsModerateIncomePercent: 17.7,
  },
  {
    county: 'Lake',
    fullName: 'Lake County',
    totalHousingUnits: 4033,
    occupiedUnits: 2959,
    occupancyRate: 73.4,
    vacantUnits: 1074,
    vacancyRate: 26.6,
    ownerOccupied: 2250,
    ownerOccupiedPercent: 76.0,
    renterOccupied: 709,
    renterOccupiedPercent: 24.0,
    vacantForRent: 0,
    vacantForSale: 19,
    seasonalRecreational: 965,
    seasonalRecreationalPercent: 89.9,
    medianHomeValue: 401300,
    medianRent: 1599,
    medianIncome: 93655,
    ownerCostBurdened30Plus: 5.0,
    ownerCostBurdened50Plus: 2.6,
    renterCostBurdened30Plus: 29.3,
    renterCostBurdened50Plus: 22.8,
    householdsExtremelyLowIncome: 225,
    householdsExtremelyLowIncomePercent: 8.1,
    householdsVeryLowIncome: 224,
    householdsVeryLowIncomePercent: 8.0,
    householdsLowIncome: 350,
    householdsLowIncomePercent: 12.5,
    householdsModerateIncome: 530,
    householdsModerateIncomePercent: 19.0,
  },
  {
    county: 'Ouray',
    fullName: 'Ouray County',
    totalHousingUnits: 3466,
    occupiedUnits: 2514,
    occupancyRate: 72.5,
    vacantUnits: 952,
    vacancyRate: 27.5,
    ownerOccupied: 1961,
    ownerOccupiedPercent: 78.0,
    renterOccupied: 553,
    renterOccupiedPercent: 22.0,
    vacantForRent: 51,
    vacantForSale: 32,
    seasonalRecreational: 750,
    seasonalRecreationalPercent: 78.8,
    medianHomeValue: 670100,
    medianRent: 1398,
    medianIncome: 84556,
    ownerCostBurdened30Plus: 14.0,
    ownerCostBurdened50Plus: 8.9,
    renterCostBurdened30Plus: 9.8,
    renterCostBurdened50Plus: 27.5,
    householdsExtremelyLowIncome: 184,
    householdsExtremelyLowIncomePercent: 8.4,
    householdsVeryLowIncome: 270,
    householdsVeryLowIncomePercent: 12.3,
    householdsLowIncome: 384,
    householdsLowIncomePercent: 17.5,
    householdsModerateIncome: 394,
    householdsModerateIncomePercent: 17.9,
  },
  {
    county: 'Pitkin',
    fullName: 'Pitkin County',
    totalHousingUnits: 13350,
    occupiedUnits: 9031,
    occupancyRate: 67.6,
    vacantUnits: 4319,
    vacancyRate: 32.4,
    ownerOccupied: 6096,
    ownerOccupiedPercent: 67.5,
    renterOccupied: 2935,
    renterOccupiedPercent: 32.5,
    vacantForRent: 380,
    vacantForSale: 24,
    seasonalRecreational: 3347,
    seasonalRecreationalPercent: 77.5,
    medianHomeValue: 1131200,
    medianRent: 1880,
    medianIncome: 100318,
    ownerCostBurdened30Plus: 12.0,
    ownerCostBurdened50Plus: 20.1,
    renterCostBurdened30Plus: 28.8,
    renterCostBurdened50Plus: 15.7,
    householdsExtremelyLowIncome: 364,
    householdsExtremelyLowIncomePercent: 5.1,
    householdsVeryLowIncome: 435,
    householdsVeryLowIncomePercent: 6.0,
    householdsLowIncome: 1425,
    householdsLowIncomePercent: 19.8,
    householdsModerateIncome: 1060,
    householdsModerateIncomePercent: 14.7,
  },
  {
    county: 'Routt',
    fullName: 'Routt County',
    totalHousingUnits: 16913,
    occupiedUnits: 10619,
    occupancyRate: 62.8,
    vacantUnits: 6294,
    vacancyRate: 37.2,
    ownerOccupied: 8058,
    ownerOccupiedPercent: 75.9,
    renterOccupied: 2561,
    renterOccupiedPercent: 24.1,
    vacantForRent: 983,
    vacantForSale: 115,
    seasonalRecreational: 4655,
    seasonalRecreationalPercent: 74.0,
    medianHomeValue: 756200,
    medianRent: 1845,
    medianIncome: 104803,
    ownerCostBurdened30Plus: 18.1,
    ownerCostBurdened50Plus: 12.4,
    renterCostBurdened30Plus: 23.7,
    renterCostBurdened50Plus: 24.3,
    householdsExtremelyLowIncome: 1030,
    householdsExtremelyLowIncomePercent: 10.2,
    householdsVeryLowIncome: 730,
    householdsVeryLowIncomePercent: 7.2,
    householdsLowIncome: 1825,
    householdsLowIncomePercent: 18.1,
    householdsModerateIncome: 1880,
    householdsModerateIncomePercent: 18.6,
  },
  {
    county: 'San Juan',
    fullName: 'San Juan County',
    totalHousingUnits: 720,
    occupiedUnits: 362,
    occupancyRate: 50.3,
    vacantUnits: 358,
    vacancyRate: 49.7,
    ownerOccupied: 201,
    ownerOccupiedPercent: 55.5,
    renterOccupied: 161,
    renterOccupiedPercent: 44.5,
    vacantForRent: 3,
    vacantForSale: 12,
    seasonalRecreational: 297,
    seasonalRecreationalPercent: 83.0,
    medianHomeValue: 406900,
    medianRent: 1076,
    medianIncome: 73889,
    ownerCostBurdened30Plus: 11.4,
    ownerCostBurdened50Plus: 10.0,
    renterCostBurdened30Plus: 16.1,
    renterCostBurdened50Plus: 16.8,
    householdsExtremelyLowIncome: 49,
    householdsExtremelyLowIncomePercent: 14.8,
    householdsVeryLowIncome: 36,
    householdsVeryLowIncomePercent: 10.9,
    householdsLowIncome: 36,
    householdsLowIncomePercent: 10.9,
    householdsModerateIncome: 66,
    householdsModerateIncomePercent: 20.0,
  },
  {
    county: 'San Miguel',
    fullName: 'San Miguel County',
    totalHousingUnits: 6606,
    occupiedUnits: 3998,
    occupancyRate: 60.5,
    vacantUnits: 2608,
    vacancyRate: 39.5,
    ownerOccupied: 2607,
    ownerOccupiedPercent: 65.2,
    renterOccupied: 1391,
    renterOccupiedPercent: 34.8,
    vacantForRent: 197,
    vacantForSale: 16,
    seasonalRecreational: 2220,
    seasonalRecreationalPercent: 85.1,
    medianHomeValue: 613100,
    medianRent: 1173,
    medianIncome: 80117,
    ownerCostBurdened30Plus: 13.6,
    ownerCostBurdened50Plus: 15.5,
    renterCostBurdened30Plus: 16.3,
    renterCostBurdened50Plus: 23.7,
    householdsExtremelyLowIncome: 370,
    householdsExtremelyLowIncomePercent: 10.3,
    householdsVeryLowIncome: 510,
    householdsVeryLowIncomePercent: 14.2,
    householdsLowIncome: 605,
    householdsLowIncomePercent: 16.8,
    householdsModerateIncome: 545,
    householdsModerateIncomePercent: 15.2,
  }
];

// ============================================================================
// AGGREGATE STATISTICS ACROSS ALL RURAL RESORT COUNTIES
// ============================================================================

export const RURAL_RESORT_AGGREGATE_STATS = {
  totalCounties: 13,
  totalHousingUnits: 158950,
  totalOccupiedUnits: 103529,
  totalVacantUnits: 55421,
  totalSeasonalRecreational: 43894,
  
  // Calculated percentages
  overallVacancyRate: 34.9,  // percent
  overallOccupancyRate: 65.1,  // percent
  seasonalAsPercentOfTotal: 27.6,  // percent of all housing
  seasonalAsPercentOfVacant: 79.2,  // percent of vacant housing
  
  // Key findings
  keyFindings: [
    '79.2% of all vacant units are seasonal/recreational (second homes)',
    '27.6% of ALL housing units in rural resort counties are seasonal/recreational',
    'Overall vacancy rate of 34.9% is 3x the healthy rate of 10-12%',
    'Grand County has highest vacancy rate at 62.1%, with 88.6% being seasonal',
    'Hinsdale County has 65.8% vacancy rate, with 89.6% being seasonal',
    'Even with 34.9% vacancy, workers cannot find affordable year-round housing'
  ]
};

// ============================================================================
// COUNTY-SPECIFIC INSIGHTS
// ============================================================================

export const COUNTY_INSIGHTS = {
  extremeVacancy: [
    { county: 'Grand', vacancyRate: 62.1, seasonalPercent: 88.6, note: 'Nearly 2 in 3 homes vacant, 9 in 10 vacant homes are seasonal' },
    { county: 'Hinsdale', vacancyRate: 65.8, seasonalPercent: 89.6, note: 'Smallest county, highest seasonal proportion' },
    { county: 'San Juan', vacancyRate: 49.7, seasonalPercent: 83.0, note: 'Half of all housing sits vacant' },
  ],
  
  highestMedianHomeValues: [
    { county: 'Pitkin', value: 1131200, note: 'Over $1.1M median home value in Aspen area' },
    { county: 'Eagle', value: 814700, note: 'Vail area, 86% federal land constrains supply' },
    { county: 'Routt', value: 756200, note: 'Steamboat Springs area' },
  ],
  
  highestRents: [
    { county: 'Eagle', rent: 2032, medianIncome: 103174, note: 'Highest rents in rural resort counties' },
    { county: 'Pitkin', rent: 1880, medianIncome: 100318, note: 'Aspen area, second highest rents' },
    { county: 'Routt', rent: 1845, medianIncome: 104803, note: 'Steamboat Springs' },
  ],
  
  severeAffordabilityCrisis: [
    { county: 'Eagle', renterBurden30: 26.1, renterBurden50: 29.5, note: '29.5% of renters severely cost burdened' },
    { county: 'Gunnison', renterBurden50: 29.1, note: 'College town with severe renter burden' },
    { county: 'Chaffee', renterBurden30: 23.8, renterBurden50: 23.0, note: 'Nearly quarter of renters severely burdened' },
  ],
  
  lowIncomeHouseholds: [
    { county: 'Archuleta', below80AMI: 40.7, note: '40.7% of households at 80% AMI or below' },
    { county: 'La Plata', below80AMI: 40.1, note: 'Durango area, significant low-income population' },
    { county: 'Chaffee', below80AMI: 37.6, note: 'Over a third of households low-income' },
  ]
};

// ============================================================================
// COMPARATIVE ANALYSIS HELPERS
// ============================================================================

export function getCountyData(countyName: string): CountyHousingData | undefined {
  return RURAL_RESORT_COUNTIES_DATA.find(
    c => c.county.toLowerCase() === countyName.toLowerCase() || 
         c.fullName.toLowerCase() === countyName.toLowerCase()
  );
}

export function getCountiesByVacancyRate(minRate?: number): CountyHousingData[] {
  const counties = RURAL_RESORT_COUNTIES_DATA.filter(c => 
    !minRate || c.vacancyRate >= minRate
  );
  return counties.sort((a, b) => b.vacancyRate - a.vacancyRate);
}

export function getCountiesByMedianHomeValue(minValue?: number): CountyHousingData[] {
  const counties = RURAL_RESORT_COUNTIES_DATA.filter(c => 
    c.medianHomeValue && (!minValue || c.medianHomeValue >= minValue)
  );
  return counties.sort((a, b) => (b.medianHomeValue || 0) - (a.medianHomeValue || 0));
}

export function getCountiesByAffordabilityStress(): CountyHousingData[] {
  // Sort by renter cost burden 50%+
  return RURAL_RESORT_COUNTIES_DATA.filter(c => c.renterCostBurdened50Plus)
    .sort((a, b) => (b.renterCostBurdened50Plus || 0) - (a.renterCostBurdened50Plus || 0));
}
