import { NextResponse } from 'next/server';
import {
  RURAL_RESORT_AGGREGATE_STATS,
  COUNTY_INSIGHTS
} from '@/lib/data/constants';

export async function GET() {
  return NextResponse.json({
    aggregateStats: RURAL_RESORT_AGGREGATE_STATS,
    insights: COUNTY_INSIGHTS
  });
}
