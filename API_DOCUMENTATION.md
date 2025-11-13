# Proposition 123 County Data API Documentation

## Base URL
```
https://your-site.vercel.app/api
```

## Endpoints

### 1. Get All Counties
**GET** `/api/counties`

Returns all rural resort county housing data.

**Query Parameters:**
- `filter` - Filter type: `highVacancy`, `expensive`, `affordabilityStress`
- `minVacancy` - Minimum vacancy rate (percentage, used with `filter=highVacancy`)
- `minHomeValue` - Minimum median home value (dollars, used with `filter=expensive`)
- `sortBy` - Sort results by: `vacancyRate`, `homeValue`, `rent`, `name`

**Examples:**
```bash
# Get all counties
curl https://your-site.vercel.app/api/counties

# Get counties with 50%+ vacancy rate
curl https://your-site.vercel.app/api/counties?filter=highVacancy&minVacancy=50

# Get expensive counties (median home > $700k), sorted by home value
curl https://your-site.vercel.app/api/counties?filter=expensive&minHomeValue=700000&sortBy=homeValue

# Get counties with highest affordability stress
curl https://your-site.vercel.app/api/counties?filter=affordabilityStress

# Get all counties sorted by vacancy rate
curl https://your-site.vercel.app/api/counties?sortBy=vacancyRate
```

**Response:**
```json
{
  "counties": [
    {
      "county": "Summit",
      "fullName": "Summit County",
      "totalHousingUnits": 27528,
      "occupiedUnits": 17310,
      "vacantUnits": 10218,
      "occupancyRate": 62.9,
      "vacancyRate": 37.1,
      "ownerOccupied": 12892,
      "ownerOccupiedPercent": 74.5,
      "renterOccupied": 4418,
      "renterOccupiedPercent": 25.5,
      "vacantForRent": 1173,
      "vacantForSale": 98,
      "seasonalRecreational": 8263,
      "seasonalRecreationalPercent": 80.9,
      "medianHomeValue": 780800,
      "medianRent": 1860,
      "medianIncome": 115625,
      "ownerCostBurdened30Plus": 22.5,
      "ownerCostBurdened50Plus": 12.1,
      "renterCostBurdened30Plus": 27.8,
      "renterCostBurdened50Plus": 17.1,
      "householdsExtremelyLowIncome": 1375,
      "householdsExtremelyLowIncomePercent": 8.7,
      "householdsVeryLowIncome": 1425,
      "householdsVeryLowIncomePercent": 9.0,
      "householdsLowIncome": 2645,
      "householdsLowIncomePercent": 16.8,
      "householdsModerateIncome": 3050,
      "householdsModerateIncomePercent": 19.3
    }
  ],
  "count": 13,
  "aggregateStats": {
    "totalCounties": 13,
    "totalHousingUnits": 158950,
    "totalOccupiedUnits": 103529,
    "totalVacantUnits": 55421,
    "totalSeasonalRecreational": 43894,
    "overallVacancyRate": 34.9,
    "overallOccupancyRate": 65.1,
    "seasonalAsPercentOfTotal": 27.6,
    "seasonalAsPercentOfVacant": 79.2
  }
}
```

---

### 2. Get Single County
**GET** `/api/counties/[county]`

Get detailed data for a specific county by name.

**URL Parameters:**
- `county` - County name (e.g., "summit", "eagle", "pitkin")

**Examples:**
```bash
# Get Summit County data
curl https://your-site.vercel.app/api/counties/summit

# Get Eagle County data
curl https://your-site.vercel.app/api/counties/eagle

# Get Pitkin County (Aspen) data
curl https://your-site.vercel.app/api/counties/pitkin
```

**Response:**
```json
{
  "county": "Summit",
  "fullName": "Summit County",
  "totalHousingUnits": 27528,
  "vacancyRate": 37.1,
  "seasonalRecreationalPercent": 80.9,
  "medianHomeValue": 780800,
  "medianRent": 1860,
  "medianIncome": 115625,
  ...
}
```

**Error Response:**
```json
{
  "error": "County 'invalid' not found"
}
```

---

### 3. Get Aggregate Statistics
**GET** `/api/stats`

Get aggregate statistics and insights across all rural resort counties.

**Example:**
```bash
curl https://your-site.vercel.app/api/stats
```

**Response:**
```json
{
  "aggregateStats": {
    "totalCounties": 13,
    "totalHousingUnits": 158950,
    "totalOccupiedUnits": 103529,
    "totalVacantUnits": 55421,
    "totalSeasonalRecreational": 43894,
    "overallVacancyRate": 34.9,
    "overallOccupancyRate": 65.1,
    "seasonalAsPercentOfTotal": 27.6,
    "seasonalAsPercentOfVacant": 79.2,
    "keyFindings": [
      "79.2% of all vacant units are seasonal/recreational (second homes)",
      "27.6% of ALL housing units in rural resort counties are seasonal/recreational",
      "Overall vacancy rate of 34.9% is 3x the healthy rate of 10-12%",
      ...
    ]
  },
  "insights": {
    "extremeVacancy": [
      {
        "county": "Grand",
        "vacancyRate": 62.1,
        "seasonalPercent": 88.6,
        "note": "Nearly 2 in 3 homes vacant, 9 in 10 vacant homes are seasonal"
      },
      ...
    ],
    "highestMedianHomeValues": [...],
    "highestRents": [...],
    "severeAffordabilityCrisis": [...],
    "lowIncomeHouseholds": [...]
  }
}
```

---

## Data Fields

Each county object contains:

### Housing Stock
- `totalHousingUnits` - Total housing units in county
- `occupiedUnits` - Number of occupied units
- `vacantUnits` - Number of vacant units
- `occupancyRate` - Percent of units occupied
- `vacancyRate` - Percent of units vacant

### Ownership
- `ownerOccupied` - Number of owner-occupied units
- `ownerOccupiedPercent` - Percent owner-occupied
- `renterOccupied` - Number of renter-occupied units
- `renterOccupiedPercent` - Percent renter-occupied

### Vacancy Detail
- `vacantForRent` - Units available for rent
- `vacantForSale` - Units available for sale
- `seasonalRecreational` - Seasonal/recreational units (second homes)
- `seasonalRecreationalPercent` - Percent of vacant that are seasonal

### Costs
- `medianHomeValue` - Median home value (dollars)
- `medianRent` - Median gross rent (dollars/month)
- `medianIncome` - Median household income (dollars/year)

### Cost Burden
- `ownerCostBurdened30Plus` - Percent owners paying 30%+ income on housing
- `ownerCostBurdened50Plus` - Percent owners paying 50%+ income on housing
- `renterCostBurdened30Plus` - Percent renters paying 30%+ income on housing
- `renterCostBurdened50Plus` - Percent renters paying 50%+ income on housing

### AMI Distribution
- `householdsExtremelyLowIncome` - Households at ≤30% AMI
- `householdsExtremelyLowIncomePercent` - Percent at ≤30% AMI
- `householdsVeryLowIncome` - Households at 31-50% AMI
- `householdsVeryLowIncomePercent` - Percent at 31-50% AMI
- `householdsLowIncome` - Households at 51-80% AMI
- `householdsLowIncomePercent` - Percent at 51-80% AMI
- `householdsModerateIncome` - Households at 81-100% AMI
- `householdsModerateIncomePercent` - Percent at 81-100% AMI

---

## Counties Available

The API covers these 13 rural resort counties:

1. Archuleta
2. Chaffee
3. Eagle
4. Grand
5. Gunnison
6. Hinsdale
7. La Plata
8. Lake
9. Ouray
10. Pitkin
11. Routt
12. San Juan
13. San Miguel

---

## Usage Examples

### Python
```python
import requests

# Get all counties with high vacancy
response = requests.get(
    'https://your-site.vercel.app/api/counties',
    params={'filter': 'highVacancy', 'minVacancy': 50}
)
counties = response.json()

# Get specific county
response = requests.get('https://your-site.vercel.app/api/counties/summit')
summit = response.json()
print(f"Summit County vacancy rate: {summit['vacancyRate']}%")
```

### JavaScript/Node.js
```javascript
// Get aggregate stats
const response = await fetch('https://your-site.vercel.app/api/stats');
const data = await response.json();
console.log(data.aggregateStats.overallVacancyRate);

// Get expensive counties
const counties = await fetch(
  'https://your-site.vercel.app/api/counties?filter=expensive&minHomeValue=700000'
).then(r => r.json());
```

### cURL
```bash
# Get counties with affordability stress
curl "https://your-site.vercel.app/api/counties?filter=affordabilityStress" | jq '.counties[] | {county, renterCostBurdened50Plus}'

# Get specific county
curl "https://your-site.vercel.app/api/counties/eagle" | jq '.medianHomeValue'
```

### Excel Power Query
```
= Json.Document(
    Web.Contents("https://your-site.vercel.app/api/counties")
)
```

---

## Rate Limiting

Currently no rate limiting. If you need heavy usage, please contact us.

---

## Data Sources

- U.S. Census Bureau American Community Survey 2019-2023 5-year estimates
- HUD CHAS (Comprehensive Housing Affordability Strategy) 2017-2021
- Colorado State Demography Office County Data Tables

---

## Support

For questions or issues with the API, please open an issue on the GitHub repository.
