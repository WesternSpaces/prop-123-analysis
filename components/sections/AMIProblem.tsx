'use client';

import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { WHY_AMI_FAILS_IN_RESORT_AREAS, AMI_LIMITS } from '@/lib/data/constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export function AMIProblem() {
  // Sample data showing income distribution in resort communities
  const incomeDistributionData = [
    { bracket: '0-30% AMI', residents: 12, workers: 8, color: '#10b981' },
    { bracket: '30-60% AMI', residents: 18, workers: 22, color: '#3b82f6' },
    { bracket: '60-80% AMI', residents: 15, workers: 28, color: '#f59e0b' },
    { bracket: '80-100% AMI', residents: 12, workers: 20, color: '#ef4444' },
    { bracket: '100-120% AMI', residents: 10, workers: 15, color: '#8b5cf6' },
    { bracket: '120-140% AMI', residents: 8, workers: 5, color: '#ec4899' },
    { bracket: '140%+ AMI', residents: 25, workers: 2, color: '#64748b' },
  ];

  const routtCountyAMIData = [
    { period: '2015-2020', growth: 11, label: '11%' },
    { period: '2020-2025', growth: 50, label: '50%' },
  ];

  return (
    <Section
      id="ami-problem"
      title="Why AMI Limits Fail in Resort Communities"
      subtitle="The mathematical and structural flaws that prevent workforce housing from being built"
      dark
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {WHY_AMI_FAILS_IN_RESORT_AREAS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-6 border border-slate-700"
          >
            <h3 className="text-xl font-bold text-white mb-3">{item.reason}</h3>
            <p className="text-slate-300 mb-4">{item.explanation}</p>
            <div className="bg-slate-900/50 rounded p-4 border-l-4 border-blue-500">
              <p className="text-sm text-slate-400 font-mono">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">
          Income Distribution: Residents vs. Workforce Need
        </h3>
        <p className="text-slate-600 mb-6">
          This chart illustrates the disconnect between who lives in resort communities (including retirees and wealthy second-home owners) versus who actually needs workforce housing. Notice how the standard 60% AMI rental limit excludes the bulk of the workforce.
        </p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={incomeDistributionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bracket" />
            <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="residents" name="Current Residents" fill="#94a3b8" />
            <Bar dataKey="workers" name="Workforce Housing Need" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500"></div>
            <span className="text-sm text-slate-600">60% AMI rental limit (excludes 60-100%+ brackets)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500"></div>
            <span className="text-sm text-slate-600">100% AMI ownership limit (excludes 100%+ brackets)</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">
          AMI Volatility: Routt County Example
        </h3>
        <p className="text-slate-600 mb-6">
          Routt County experienced a <strong>50% AMI increase from 2020-2025</strong>, compared to just 11% growth from 2015-2020. This volatility doesn't reflect actual wage growth for workers—it reflects influx of wealthy residents and retirees.
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={routtCountyAMIData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis label={{ value: 'AMI Growth (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="growth" name="AMI Growth Percentage">
              {routtCountyAMIData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#ef4444'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-500 mt-4">
          Source: Colorado Division of Housing data for Routt County
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4">Current Standard Limits</h3>
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-bold text-blue-400">{AMI_LIMITS.standard.rental}%</div>
              <div className="text-slate-300">AMI for Rental Housing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">{AMI_LIMITS.standard.ownership}%</div>
              <div className="text-slate-300">AMI for Ownership Housing</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-6 border border-blue-500">
          <h3 className="text-xl font-bold text-white mb-4">Rural Resort Maximum Allowed</h3>
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-bold text-white">{AMI_LIMITS.ruralResortMax.rental}%</div>
              <div className="text-blue-100">AMI for Rental Housing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{AMI_LIMITS.ruralResortMax.ownership}%</div>
              <div className="text-blue-100">AMI for Ownership Housing</div>
            </div>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            * Available only through petition process with extensive documentation requirements
          </p>
        </div>
      </div>
    </Section>
  );
}
