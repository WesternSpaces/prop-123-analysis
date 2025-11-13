import { NextResponse } from 'next/server';
import { RURAL_RESORT_COUNTIES_DATA } from '@/lib/data/constants';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ county: string }> }
) {
  const { county: countyName } = await params;

  const countyData = RURAL_RESORT_COUNTIES_DATA.find(
    c => c.county.toLowerCase() === countyName.toLowerCase() ||
         c.fullName.toLowerCase() === countyName.toLowerCase()
  );

  if (!countyData) {
    return NextResponse.json(
      { error: `County '${countyName}' not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(countyData);
}
