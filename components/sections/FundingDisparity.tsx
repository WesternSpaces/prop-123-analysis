'use client';

import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function FundingDisparity() {
  // Front Range vs Rural funding distribution
  const fundingDistributionData = [
    { region: 'Front Range Urban', amount: 14.29, projects: 7, avgAward: 2.04 },
    { region: 'Rural Resort Counties', amount: 5.36, projects: 5, avgAward: 1.07 },
    { region: 'Other Rural', amount: 3.42, projects: 4, avgAward: 0.86 },
  ];

  const pieData = [
    { name: 'Front Range Urban', value: 56, color: '#3b82f6' },
    { name: 'Rural Resort', value: 21, color: '#f59e0b' },
    { name: 'Other Rural', value: 14, color: '#10b981' },
    { name: 'Unallocated', value: 9, color: '#94a3b8' },
  ];

  // Rural resort counties - funded vs unfunded
  const ruralResortCountiesData = [
    { county: 'Grand', funding: 14.5, projects: 2 },
    { county: 'Summit', funding: 6.38, projects: 2 },
    { county: 'Chaffee', funding: 2.07, projects: 2 },
    { county: 'Eagle', funding: 0.65, projects: 1 },
    { county: 'Archuleta', funding: 0.2, projects: 1 },
    { county: 'Pitkin', funding: 0.114, projects: 1 },
    { county: 'Routt', funding: 0, projects: 0 },
    { county: 'San Miguel', funding: 0, projects: 0 },
    { county: 'Gunnison', funding: 0, projects: 0 },
    { county: 'Ouray', funding: 0, projects: 0 },
    { county: 'San Juan', funding: 0, projects: 0 },
    { county: 'La Plata', funding: 0, projects: 0 },
  ];

  const COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#94a3b8'];

  return (
    <Section
      id="funding-disparity"
      title="The Funding Disparity: A Double Bind"
      subtitle="Rural resort counties can't compete without higher AMI limits, but can't get them—resulting in only 16.8% of funding despite severe housing crises"
    >
      {/* The Double Bind Explanation */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">The Catch-22 of Rural Resort Funding</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-6xl mb-3">🚫</div>
            <h4 className="font-bold text-xl mb-3">Problem #1: Can't Compete Without Exemption</h4>
            <p className="text-white/90 text-sm">
              Standard 60%/100% AMI limits are too low for resort markets where median home prices are $600K-$1.1M.
              Workers earning 100% AMI ($80K-$105K) still can't afford housing, making projects at standard limits unviable.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-6xl mb-3">⛔</div>
            <h4 className="font-bold text-xl mb-3">Problem #2: Can't Get Exemption</h4>
            <p className="text-white/90 text-sm">
              The rural resort exemption requires housing needs assessments, weighted average calculations, and extensive documentation.
              Only Summit County has successfully petitioned. Small jurisdictions lack capacity to navigate the process.
            </p>
          </div>
        </div>
        <div className="mt-6 bg-red-900/50 rounded-lg p-6 border-2 border-white/30">
          <div className="text-6xl mb-3 text-center">❌</div>
          <h4 className="font-bold text-xl mb-3 text-center">Result: Locked Out of Funding</h4>
          <p className="text-white/90 text-center">
            <strong>Only 1 of 12 rural resort counties</strong> successfully obtained the exemption.
            <strong>9 of 12 counties received zero development funding</strong> in first round.
            Rural resort counties captured only <strong>16.8% of total Prop 123 funds</strong> despite representing some of the state's most severe housing crises.
          </p>
        </div>
      </div>

      {/* Funding Distribution Charts */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card title="First Round Land Banking Distribution ($25.3M Total)">
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-orange-50 rounded p-4 border-l-4 border-orange-500">
            <p className="text-sm text-orange-900">
              <strong>Front Range received 56%</strong> of first-round land banking awards, while
              <strong> rural resort counties received only 21%</strong> despite having higher vacancy rates and more severe affordability crises.
            </p>
          </div>
        </Card>

        <Card title="Average Award Size by Region">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fundingDistributionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" angle={-15} textAnchor="end" height={80} />
              <YAxis label={{ value: 'Millions ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgAward" name="Avg Award Size" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-blue-50 rounded p-4 border-l-4 border-blue-500">
            <p className="text-sm text-blue-900">
              Average Front Range award: <strong>$2.04M</strong><br/>
              Average rural resort award: <strong>$1.07M</strong><br/>
              <span className="text-xs">Front Range projects receive nearly 2x the funding per project</span>
            </p>
          </div>
        </Card>
      </div>

      {/* Rural Resort Counties - Who Got What */}
      <Card title="Rural Resort Counties: Funding Winners and Losers" className="mb-12">
        <p className="text-slate-700 mb-6">
          Of the 12 designated rural resort counties, <strong>only 6 received any development funding</strong>, and
          <strong> 9 received zero funds</strong> for housing construction. Even counties with the most severe housing crises were shut out.
        </p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={ruralResortCountiesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="county" />
            <YAxis label={{ value: 'Millions ($)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="funding" name="Total Funding" fill="#f59e0b">
              {ruralResortCountiesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.funding === 0 ? '#dc2626' : entry.funding > 5 ? '#10b981' : '#f59e0b'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-red-50 rounded p-4 border-l-4 border-red-500">
            <div className="font-bold text-red-900 mb-2">Zero Funding (9 counties)</div>
            <p className="text-red-700 text-xs">
              Routt (Steamboat Springs), San Miguel (Telluride), Gunnison, Ouray, San Juan, La Plata, and others received no development funding despite severe housing crises and 50%+ vacancy rates.
            </p>
          </div>
          <div className="bg-orange-50 rounded p-4 border-l-4 border-orange-500">
            <div className="font-bold text-orange-900 mb-2">Minimal Funding (3 counties)</div>
            <p className="text-orange-700 text-xs">
              Eagle ($650K), Archuleta ($200K), and Pitkin ($114K planning only) received token amounts—insufficient to address the scale of their housing needs.
            </p>
          </div>
          <div className="bg-green-50 rounded p-4 border-l-4 border-green-500">
            <div className="font-bold text-green-900 mb-2">Significant Funding (2 counties)</div>
            <p className="text-green-700 text-xs">
              Only Grand ($14.5M) and Summit ($6.38M) received substantial awards. Summit is the only county that successfully petitioned for the rural resort exemption.
            </p>
          </div>
        </div>
      </Card>

      {/* Why This Matters */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Why This Double Bind Matters</h3>
        <div className="grid md:grid-cols-2 gap-6 text-slate-200">
          <div>
            <h4 className="font-bold text-white mb-2">📊 The Data Proves the System Fails Rural Communities</h4>
            <p className="text-sm">
              Despite having higher vacancy rates (average 36% vs. 10% healthy), more severe cost burden (up to 29.5% of renters
              severely burdened), and higher home-to-income ratios (up to 11:1), rural resort counties received less than 17% of funding.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">🔒 The Exemption Doesn't Fix the Structural Problem</h4>
            <p className="text-sm">
              The rural resort exemption was designed as a "safety valve," but only 1 of 12 counties has successfully used it.
              The petition process requires capacity that small jurisdictions simply don't have, creating a barrier as insurmountable as the AMI limits themselves.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">⚖️ Front Range Advantages are Structural</h4>
            <p className="text-sm">
              Larger jurisdictions have dedicated housing staff, grant writers, and established nonprofit partners.
              They can respond faster to "readiness to proceed" criteria. Rural counties must wear multiple hats with limited resources.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">🎯 The Solution Must Address Both Problems</h4>
            <p className="text-sm">
              Simply making the exemption easier to get isn't enough if AMI limits remain structurally unsuitable.
              And raising AMI limits doesn't help if rural counties can't compete for funding. Both barriers must be removed.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
