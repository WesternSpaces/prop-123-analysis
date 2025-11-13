'use client';

import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { FUNDING_RESULTS, RURAL_RESORT_COUNTIES } from '@/lib/data/constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export function DataAnalysis() {
  // Funding gap data
  const fundingGapData = [
    { program: 'Concessionary Debt', requested: 113, available: 32 },
    { program: 'Land Banking', requested: 255, available: 24.5 },
  ];

  // Notable awards
  const awardsData = FUNDING_RESULTS.notableAwards.map(award => ({
    location: award.location,
    amount: award.amount,
  }));

  // Vacancy rates for rural resort counties
  const vacancyData = RURAL_RESORT_COUNTIES
    .filter(county => county.vacancyRate !== null)
    .map(county => ({
      name: county.name,
      vacancy: county.vacancyRate,
    }))
    .sort((a, b) => (b.vacancy || 0) - (a.vacancy || 0));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  return (
    <Section
      id="data"
      title="Data & Analysis"
      subtitle="Understanding the scale of funding, demand, and housing challenges"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card title="First Round Funding Results">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-700">Rural Resort Counties Awarded:</span>
              <span className="text-2xl font-bold text-blue-600">
                ${FUNDING_RESULTS.firstRound.ruralResortCounties.totalAwarded}M
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Affordable Units Created:</span>
              <span className="text-2xl font-bold text-green-600">
                {FUNDING_RESULTS.firstRound.ruralResortCounties.unitsCreated}
              </span>
            </div>
          </div>
          <div className="bg-slate-50 rounded p-4 mt-4">
            <h4 className="font-semibold text-slate-900 mb-3">Notable Awards</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={awardsData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" label={{ value: 'Millions ($)', position: 'bottom' }} />
                <YAxis type="category" dataKey="location" width={120} />
                <Tooltip />
                <Bar dataKey="amount" fill="#3b82f6">
                  {awardsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="The Funding Gap: Demand vs. Supply">
          <p className="text-slate-700 mb-4">
            First-round applications revealed dramatic gaps between community needs and available funding:
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={fundingGapData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="program" />
              <YAxis label={{ value: 'Millions ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="requested" name="Requested" fill="#ef4444" />
              <Bar dataKey="available" name="Available" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>
              <strong>Concessionary Debt:</strong> 38 applications requesting $113M; only $32M available
            </p>
            <p>
              <strong>Land Banking:</strong> 113 applications requesting $255M; only $24.5M available
            </p>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card title="Vacancy Rates in Rural Resort Counties">
          <p className="text-slate-700 mb-4">
            Despite extremely high vacancy rates (many over 50%), these vacant homes are <strong>not available</strong> to local workers—they're second homes and short-term rentals.
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={vacancyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Vacancy Rate (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="vacancy" fill="#ef4444">
                {vacancyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.vacancy && entry.vacancy > 50 ? '#dc2626' : '#ef4444'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-slate-500 mt-4">
            Counties with over 50% vacancy shown in darker red
          </p>
        </Card>

        <div className="space-y-6">
          <Card title="Key Implementation Challenges">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3 text-xl">1.</span>
                <div>
                  <strong>3% Annual Growth Requirement:</strong> Land-constrained communities (e.g., Eagle County with 86% federal land) find this nearly impossible
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3 text-xl">2.</span>
                <div>
                  <strong>Expedited 90-Day Review:</strong> Requires coordination across multiple agencies and alignment with state laws
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3 text-xl">3.</span>
                <div>
                  <strong>Penalties for Non-Compliance:</strong> Missing commitments triggers one-year funding ineligibility; failing expedited review causes indefinite ineligibility
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3 text-xl">4.</span>
                <div>
                  <strong>High Stakes, Limited Capacity:</strong> Small jurisdictions risk losing access to desperately needed funding
                </div>
              </li>
            </ul>
          </Card>

          <Card title="Participation Success" highlight>
            <p className="text-slate-700 mb-3">
              Despite early concerns, participation ultimately exceeded expectations:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-3xl font-bold text-blue-600">202</div>
                <div className="text-sm text-slate-600">Jurisdictions Opted In</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-slate-600">Population Covered</div>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              Out of 336 eligible jurisdictions. Initial concerns arose when only 14 had opted in by July 2023, but numbers surged before the November deadline.
            </p>
          </Card>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">What the Data Tells Us</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl font-bold text-red-400 mb-2">3-4x</div>
            <p className="text-slate-300">
              Funding demand exceeds supply by 3-4 times in first round
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">50%+</div>
            <p className="text-slate-300">
              Vacancy rates in Summit, Grand, and other resort counties
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">$300M</div>
            <p className="text-slate-300">
              Annual funding still insufficient to meet statewide needs
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-300">
          The data reveals a system under tremendous strain: massive demand for funding, severe housing shortages despite high vacancy rates, and AMI limits that prevent communities from addressing their actual workforce housing needs.
        </p>
      </div>
    </Section>
  );
}
