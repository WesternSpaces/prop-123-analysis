import { NextResponse } from 'next/server';
import {
  RURAL_RESORT_COUNTIES_DATA,
  RURAL_RESORT_AGGREGATE_STATS,
  COUNTY_INSIGHTS,
  getCountiesByVacancyRate,
  getCountiesByMedianHomeValue,
  getCountiesByAffordabilityStress
} from '@/lib/data/constants';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Query parameters
  const filter = searchParams.get('filter');
  const minVacancy = searchParams.get('minVacancy');
  const minHomeValue = searchParams.get('minHomeValue');
  const sortBy = searchParams.get('sortBy');
  const county = searchParams.get('county');

  // Get specific county
  if (county) {
    const countyData = RURAL_RESORT_COUNTIES_DATA.find(
      c => c.county.toLowerCase() === county.toLowerCase()
    );

    if (!countyData) {
      return NextResponse.json(
        { error: 'County not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(countyData);
  }

  // Apply filters
  let counties = [...RURAL_RESORT_COUNTIES_DATA];

  if (filter === 'highVacancy') {
    const minRate = minVacancy ? parseFloat(minVacancy) : 50;
    counties = getCountiesByVacancyRate(minRate);
  } else if (filter === 'expensive') {
    const minValue = minHomeValue ? parseFloat(minHomeValue) : 500000;
    counties = getCountiesByMedianHomeValue(minValue);
  } else if (filter === 'affordabilityStress') {
    counties = getCountiesByAffordabilityStress();
  }

  // Apply sorting
  if (sortBy) {
    switch (sortBy) {
      case 'vacancyRate':
        counties.sort((a, b) => b.vacancyRate - a.vacancyRate);
        break;
      case 'homeValue':
        counties.sort((a, b) => (b.medianHomeValue || 0) - (a.medianHomeValue || 0));
        break;
      case 'rent':
        counties.sort((a, b) => (b.medianRent || 0) - (a.medianRent || 0));
        break;
      case 'name':
        counties.sort((a, b) => a.county.localeCompare(b.county));
        break;
    }
  }

  return NextResponse.json({
    counties,
    count: counties.length,
    aggregateStats: RURAL_RESORT_AGGREGATE_STATS
  });
}
