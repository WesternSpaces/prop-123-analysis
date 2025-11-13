import { Section } from '../ui/Section';
import { POLICY_RECOMMENDATIONS } from '@/lib/data/constants';

export function PolicyRecommendations() {
  return (
    <Section
      id="solutions"
      title="Policy Recommendations"
      subtitle="Evidence-based solutions to make Proposition 123 work for rural resort communities"
    >
      <div className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Guiding Principles</h3>
        <p className="text-blue-100 mb-4">
          These recommendations are designed to preserve Proposition 123's core mission—affordable housing for Coloradans—while removing structural barriers that prevent rural resort communities from addressing their unique workforce housing needs.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded p-4 backdrop-blur-sm">
            <div className="font-bold mb-2">Maintain Accountability</div>
            <div className="text-sm text-blue-100">Keep strong oversight while reducing bureaucratic barriers</div>
          </div>
          <div className="bg-white/10 rounded p-4 backdrop-blur-sm">
            <div className="font-bold mb-2">Recognize Reality</div>
            <div className="text-sm text-blue-100">AMI calculations don't reflect actual workforce wages in resort areas</div>
          </div>
          <div className="bg-white/10 rounded p-4 backdrop-blur-sm">
            <div className="font-bold mb-2">Equity for All</div>
            <div className="text-sm text-blue-100">Small jurisdictions shouldn't be penalized for limited capacity</div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {POLICY_RECOMMENDATIONS.map((rec, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {rec.title}
                    </h3>
                    <p className="text-slate-700">{rec.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Rationale
                </h4>
                <p className="text-slate-700 pl-7">{rec.rationale}</p>
              </div>

              {rec.precedent && (
                <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-slate-900 mb-1">Precedent</h4>
                  <p className="text-sm text-slate-700">{rec.precedent}</p>
                </div>
              )}

              {rec.impact && (
                <div className="bg-green-50 rounded p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-slate-900 mb-1">Impact</h4>
                  <p className="text-sm text-slate-700">{rec.impact}</p>
                </div>
              )}

              {rec.implementation && (
                <div className="bg-purple-50 rounded p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-slate-900 mb-1">Implementation</h4>
                  <p className="text-sm text-slate-700">{rec.implementation}</p>
                </div>
              )}

              {rec.benefit && (
                <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-slate-900 mb-1">Benefit</h4>
                  <p className="text-sm text-slate-700">{rec.benefit}</p>
                </div>
              )}

              {rec.alternatives && (
                <div className="bg-indigo-50 rounded p-4 border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-slate-900 mb-1">Alternatives</h4>
                  <p className="text-sm text-slate-700">{rec.alternatives}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Priority Actions</h3>
        <p className="text-slate-300 mb-6">
          While all recommendations have merit, policymakers should prioritize these immediate actions:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-bold text-lg">Short-Term (2024-2025)</h4>
            </div>
            <ul className="space-y-2 text-slate-200 text-sm pl-11">
              <li>• Align SB24-174 and Prop 123 AMI band requirements to eliminate duplicative work</li>
              <li>• Simplify petition process by eliminating weighted average requirement</li>
              <li>• Raise standard limits to 100% rental / 140% ownership for rural resort counties</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-bold text-lg">Long-Term (2026+)</h4>
            </div>
            <ul className="space-y-2 text-slate-200 text-sm pl-11">
              <li>• Create separate workforce housing category with higher limits</li>
              <li>• Transition from AMI to local wage-based targeting</li>
              <li>• Develop alternative compliance pathways for land-constrained communities</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">The Bottom Line</h3>
        <p className="text-slate-700 text-lg leading-relaxed">
          Proposition 123 represents a historic investment in Colorado housing. But without adjustments to AMI limits and petition processes, <strong>rural resort communities will continue to face workforce housing crises despite hundreds of millions in available funding</strong>. Teachers, nurses, service workers, and even well-paid professionals will remain unable to afford living in the communities they serve.
        </p>
        <p className="text-slate-700 text-lg leading-relaxed mt-4">
          These recommendations preserve accountability while acknowledging the mathematical reality: <strong>AMI calculations designed for urban areas don't work in communities where extreme wealth disparities and investment income skew the median far above actual workforce wages</strong>.
        </p>
      </div>
    </Section>
  );
}
