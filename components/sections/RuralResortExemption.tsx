import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { PETITION_REQUIREMENTS, RURAL_RESORT_COUNTIES } from '@/lib/data/constants';

export function RuralResortExemption() {
  return (
    <Section
      id="exemption"
      title="The Rural Resort Exemption Paradox"
      subtitle="Why the safety valve designed to help communities often becomes an insurmountable barrier"
      dark
    >
      <div className="mb-12 bg-slate-800 rounded-lg p-8 border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-4">What is the Rural Resort Exemption?</h3>
        <p className="text-slate-300 mb-4">
          HB23-1304, signed in June 2023, established a petition process allowing the following <strong>12 rural resort counties</strong> to request approval for higher AMI limits (up to 140% for rental, 160% for ownership):
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
          {RURAL_RESORT_COUNTIES.map((county) => (
            <div key={county.name} className="bg-slate-900/50 rounded px-3 py-2 text-slate-200 text-sm">
              {county.name}
              {county.vacancyRate && (
                <span className="block text-xs text-slate-400">
                  {county.vacancyRate}% vacant
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="text-slate-300">
          The exemption applies only to Land Banking, Equity, and Concessionary Debt programs, and is valid for the current 3-year funding cycle.
        </p>
      </div>

      {/* Petition Process Flowchart */}
      <div className="mb-12 bg-white rounded-lg p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">The Petition Process</h3>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div className="flex-1 bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <h4 className="font-bold text-slate-900 mb-2">Complete Housing Needs Assessment</h4>
              <p className="text-sm text-slate-700">
                Must be completed within 3 years, use Colorado State Demographer data, and assess needs <strong>BY AMI BRACKET</strong>—not just current resident income distribution
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-slate-300"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div className="flex-1 bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <h4 className="font-bold text-slate-900 mb-2">Prepare Documentation Package</h4>
              <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                <li>Justification narrative for why alternative funding is insufficient</li>
                <li>Specific project example showing how limits would be used</li>
                <li>Impact analysis demonstrating community benefit</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-slate-300"></div>
          </div>

          {/* Step 3 - The Catch-22 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div className="flex-1 bg-red-50 rounded-lg p-4 border-2 border-red-400">
              <h4 className="font-bold text-slate-900 mb-2">⚠️ THE CATCH-22: Weighted Average Calculation</h4>
              <p className="text-sm text-slate-700 mb-2">
                Division of Housing calculates <strong>weighted average AMI</strong> of demonstrated housing need. Increase only allowed if average exceeds current eligibility limit.
              </p>
              <div className="bg-white rounded p-3 border-l-4 border-red-600 mt-3">
                <p className="text-sm text-slate-800 font-semibold">The Problem:</p>
                <p className="text-sm text-slate-700">
                  A community might have severe workforce housing crisis at 120-140% AMI, but if they also have needs at lower AMI levels, the weighted average might not exceed the threshold. Communities with diverse needs are penalized.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-slate-300"></div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div className="flex-1 bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <h4 className="font-bold text-slate-900 mb-2">Submit & Wait</h4>
              <p className="text-sm text-slate-700">
                Estimated <strong>2-month review period</strong> including 30-day public comment phase. Petition may require revisions and resubmission.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-slate-300"></div>
          </div>

          {/* Step 5 - Decision */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold">
              ?
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border-2 border-green-400">
                <h4 className="font-bold text-green-900 mb-2">✓ Approved</h4>
                <p className="text-sm text-slate-700">
                  Can now apply for Prop 123 funding with higher AMI limits
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  Example: Summit County
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-2">✗ Denied</h4>
                <p className="text-sm text-slate-700">
                  Workforce housing crisis continues; must use standard 60%/100% limits
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  Many communities fall into this category
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Detail */}
      <div className="grid md:grid-cols-2 gap-6">
        {PETITION_REQUIREMENTS.map((req, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-6 border border-slate-700"
          >
            <h4 className="text-lg font-bold text-white mb-3">{req.requirement}</h4>
            <p className="text-slate-300 text-sm mb-3">{req.details}</p>
            <div className="bg-red-900/30 rounded p-3 border-l-4 border-red-500">
              <p className="text-sm text-red-200 font-semibold">Challenge:</p>
              <p className="text-sm text-red-100">{req.challenge}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
        <p className="mb-4 text-white/90">
          The rural resort exemption was created to provide flexibility for communities facing unique challenges. But the complex requirements and weighted average catch-22 mean that:
        </p>
        <ul className="space-y-2 text-white/90">
          <li className="flex items-start">
            <span className="mr-3 text-xl">•</span>
            <span>Communities with the most severe housing crises may lack capacity to navigate the petition process</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">•</span>
            <span>The weighted average requirement creates perverse incentives (ignore low-income needs to raise average)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">•</span>
            <span>Small jurisdictions can't compete with larger counties that have dedicated housing staff</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-xl">•</span>
            <span>The "safety valve" becomes another barrier instead of a solution</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
