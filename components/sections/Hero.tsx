import { StatCard } from '../ui/StatCard';
import { KEY_STATISTICS } from '@/lib/data/constants';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            Colorado Housing Policy Analysis
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The AMI Limits Problem in <br />
            Colorado's Proposition 123
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
            Why 60% and 100% Area Median Income limits fail rural resort communities—and what can be done about it
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#ami-problem"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Explore the Problem
            </a>
            <a
              href="#solutions"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors backdrop-blur-sm"
            >
              View Policy Solutions
            </a>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            label="Annual Funding"
            value={`$${KEY_STATISTICS.annualFunding}M`}
            subtext="From state income tax"
          />
          <StatCard
            label="Housing Shortage"
            value={`${(KEY_STATISTICS.affordableHousingShortage / 1000).toFixed(0)}K+`}
            subtext="Affordable units needed"
            trend="up"
          />
          <StatCard
            label="Jurisdictions Opted In"
            value={`${KEY_STATISTICS.jurisdictionsOptedIn}/${KEY_STATISTICS.totalJurisdictions}`}
            subtext={`${KEY_STATISTICS.populationCovered}% of population`}
          />
          <StatCard
            label="Rural Resort Counties"
            value="12"
            subtext="Eligible for exemptions"
          />
        </div>
      </div>
    </div>
  );
}
