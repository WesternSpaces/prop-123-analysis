'use client';

import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { RURAL_RESORT_COUNTIES_DATA, RURAL_RESORT_AGGREGATE_STATS, COUNTY_INSIGHTS } from '@/lib/data/constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart, Line } from 'recharts';

export function HousingCrisisData() {
  // The Vacancy Paradox - Seasonal vs Available
  const vacancyBreakdownData = RURAL_RESORT_COUNTIES_DATA
    .filter(c => c.seasonalRecreational)
    .map(county => ({
      county: county.county,
      seasonal: parseFloat(((county.seasonalRecreational! / county.totalHousingUnits) * 100).toFixed(1)),
      available: parseFloat((((county.vacantForRent || 0) + (county.vacantForSale || 0)) / county.totalHousingUnits * 100).toFixed(1)),
    }))
    .sort((a, b) => b.seasonal - a.seasonal);

  // Cost Burden - Severe housing cost burden (50%+)
  const costBurdenData = RURAL_RESORT_COUNTIES_DATA
    .filter(c => c.renterCostBurdened50Plus)
    .map(county => ({
      county: county.county,
      renters: county.renterCostBurdened50Plus || 0,
      owners: county.ownerCostBurdened50Plus || 0,
    }))
    .sort((a, b) => b.renters - a.renters);

  // Affordability: Home Value vs Income
  const affordabilityData = RURAL_RESORT_COUNTIES_DATA
    .filter(c => c.medianHomeValue && c.medianIncome)
    .map(county => ({
      county: county.county,
      homeValue: county.medianHomeValue! / 1000, // In thousands
      income: county.medianIncome! / 1000,
      ratio: (county.medianHomeValue! / county.medianIncome!).toFixed(1),
    }))
    .sort((a, b) => parseFloat(b.ratio) - parseFloat(a.ratio));

  // AMI Distribution - showing the "missing middle"
  const amiDistributionData = [
    { level: '≤30% AMI\n(Extremely Low)', percent: 9.9, color: '#ef4444' },
    { level: '31-50% AMI\n(Very Low)', percent: 10.8, color: '#f59e0b' },
    { level: '51-80% AMI\n(Low)', percent: 17.0, color: '#eab308' },
    { level: '81-100% AMI\n(Moderate)', percent: 18.1, color: '#84cc16' },
    { level: '100%+ AMI', percent: 44.2, color: '#10b981' },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f43f5e'];

  return (
    <Section
      id="housing-crisis-data"
      title="The Housing Crisis Exposed"
      subtitle="Real data from 13 rural resort counties proving the vacancy paradox and affordability crisis"
    >
      {/* Key Stats Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">The Vacancy Paradox</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-5xl font-bold">{RURAL_RESORT_AGGREGATE_STATS.overallVacancyRate}%</div>
            <div className="text-blue-100">Overall Vacancy Rate</div>
            <div className="text-sm text-blue-100 mt-1">(3x healthy rate of 10-12%)</div>
          </div>
          <div>
            <div className="text-5xl font-bold">{RURAL_RESORT_AGGREGATE_STATS.seasonalAsPercentOfVacant}%</div>
            <div className="text-blue-100">Of Vacant Homes Are Seasonal</div>
            <div className="text-sm text-blue-100 mt-1">(Second homes, not available to workers)</div>
          </div>
          <div>
            <div className="text-5xl font-bold">3.9%</div>
            <div className="text-blue-100">Actually Available for Rent/Sale</div>
            <div className="text-sm text-blue-100 mt-1">(Despite 34.9% vacancy rate!)</div>
          </div>
        </div>
      </div>

      {/* Seasonal vs Available Housing */}
      <Card title="The Vacancy Paradox: Seasonal Units vs. Actually Available Housing" className="mb-12">
        <p className="text-slate-700 mb-6">
          High vacancy rates mask the real problem: <strong>79.2% of vacant units are seasonal/recreational</strong> (second homes, STRs),
          leaving only <strong>3.9% of total housing</strong> actually available for workers to buy or rent.
        </p>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={vacancyBreakdownData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="county" angle={-45} textAnchor="end" height={120} />
            <YAxis label={{ value: 'Percent of Total Housing', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="seasonal" name="Seasonal/Recreational (Unavailable)" fill="#ef4444" stackId="a" />
            <Bar dataKey="available" name="Actually Available (For Rent/Sale)" fill="#10b981" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          {COUNTY_INSIGHTS.extremeVacancy.map((insight, i) => (
            <div key={i} className="bg-red-50 rounded p-4 border-l-4 border-red-500">
              <div className="font-bold text-red-900">{insight.county} County</div>
              <div className="text-red-700 text-xs mt-1">{insight.note}</div>
              <div className="text-red-600 font-semibold mt-2">
                {insight.vacancyRate}% vacant • {insight.seasonalPercent}% seasonal
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Severe Cost Burden */}
        <Card title="Severe Housing Cost Burden (50%+ of Income)">
          <p className="text-slate-700 text-sm mb-4">
            Percent of households paying over 50% of their income for housing—a severe affordability crisis by HUD standards.
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={costBurdenData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="county" angle={-45} textAnchor="end" height={100} />
              <YAxis label={{ value: 'Percent Severely Burdened', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="renters" name="Renters (50%+)" fill="#ef4444" />
              <Bar dataKey="owners" name="Owners (50%+)" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-red-50 rounded p-4 border-l-4 border-red-500">
            <p className="text-sm text-red-900">
              <strong>Eagle County:</strong> 29.5% of renters are severely cost burdened<br/>
              <strong>Gunnison County:</strong> 29.1% of renters severely burdened<br/>
              <strong>Ouray County:</strong> 27.5% of renters severely burdened
            </p>
          </div>
        </Card>

        {/* Home Value to Income Ratio */}
        <Card title="Affordability Gap: Home Value to Income Ratio">
          <p className="text-slate-700 text-sm mb-4">
            Median home value divided by median household income. A ratio over 3.0 indicates severely unaffordable housing.
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={affordabilityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="county" angle={-45} textAnchor="end" height={100} />
              <YAxis label={{ value: 'Ratio (Years of Income)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value: any, name: string) => {
                if (name === 'Ratio') return [value, 'Years of Income'];
                return [value, name];
              }} />
              <Bar dataKey="ratio" name="Ratio" fill="#8b5cf6">
                {affordabilityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={parseFloat(entry.ratio) > 8 ? '#dc2626' : parseFloat(entry.ratio) > 6 ? '#ea580c' : '#8b5cf6'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-purple-50 rounded p-4 border-l-4 border-purple-500">
            <p className="text-sm text-purple-900">
              <strong>Pitkin County (Aspen):</strong> $1.13M median home / $100K median income = <span className="font-bold text-red-600">11.3 years</span><br/>
              <strong>Routt County (Steamboat):</strong> $756K / $105K = <span className="font-bold text-red-600">7.2 years</span><br/>
              <strong>Eagle County (Vail):</strong> $815K / $103K = <span className="font-bold text-red-600">7.9 years</span>
            </p>
          </div>
        </Card>
      </div>

      {/* AMI Distribution */}
      <Card title="Income Distribution: Where Do Residents Actually Fall?" className="mb-12">
        <p className="text-slate-700 mb-6">
          This shows the actual income distribution of households in rural resort counties compared to Prop 123's 60%/100% AMI limits.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={amiDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.level}: ${entry.percent}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="percent"
                >
                  {amiDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 rounded p-4 border-l-4 border-red-500">
              <div className="font-bold text-red-900 mb-2">60% AMI Rental Limit</div>
              <p className="text-sm text-red-700">
                Prop 123's standard 60% AMI rental limit only serves <strong>37.7%</strong> of households (≤80% AMI),
                excluding the majority of the workforce.
              </p>
            </div>
            <div className="bg-orange-50 rounded p-4 border-l-4 border-orange-500">
              <div className="font-bold text-orange-900 mb-2">100% AMI Ownership Limit</div>
              <p className="text-sm text-orange-700">
                The 100% AMI ownership limit excludes <strong>44.2%</strong> of households who earn above 100% AMI
                but still can't afford median home prices of $500K-$1.1M.
              </p>
            </div>
            <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-500">
              <div className="font-bold text-blue-900 mb-2">The Missing Middle</div>
              <p className="text-sm text-blue-700">
                <strong>18.1%</strong> of households fall in the 81-100% AMI range—above the rental limit,
                but unable to afford $600K+ homes. These are your teachers, nurses, service workers.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">What This Data Proves</h3>
        <div className="grid md:grid-cols-2 gap-6 text-slate-200">
          <div>
            <h4 className="font-bold text-white mb-2">🏘️ The Vacancy Paradox is Real</h4>
            <p className="text-sm">
              34.9% vacancy rate sounds like abundant housing—but 79.2% of those vacant units are second homes.
              Only 3.9% of total housing is actually available for workers.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">💰 Affordability Crisis is Severe</h4>
            <p className="text-sm">
              Up to 29.5% of renters pay over half their income for housing. Home-to-income ratios reach 11:1 in Pitkin County,
              making homeownership impossible for essential workers.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">🎯 AMI Limits Miss the Mark</h4>
            <p className="text-sm">
              The 60%/100% AMI limits exclude the majority of the workforce. With 44.2% of households above 100% AMI
              still unable to afford median homes, the "missing middle" is real and substantial.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">🏔️ Rural Resort Counties are Unique</h4>
            <p className="text-sm">
              These aren't typical housing markets. Extreme seasonal vacancy, inflated home values from wealthy buyers,
              and limited buildable land create conditions where standard AMI formulas fail catastrophically.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
