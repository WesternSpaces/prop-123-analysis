import { Section } from '../ui/Section';
import { CASE_STUDIES } from '@/lib/data/constants';

export function CommunityStories() {
  return (
    <Section
      id="stories"
      title="Real Community Stories"
      subtitle="How AMI limits impact actual people and communities across Colorado's mountain towns"
    >
      <div className="grid gap-8">
        {CASE_STUDIES.map((story, index) => (
          <div
            key={index}
            className={`rounded-lg p-8 border-2 ${
              story.location === 'Summit County'
                ? 'bg-green-50 border-green-300'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex flex-wrap items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {story.location}
                </h3>
                <div className="text-sm text-slate-600">
                  {story.county} County • {story.issue}
                </div>
              </div>
              {story.location === 'Summit County' && story.issue === 'Successful Petition Example' && (
                <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                  ✓ Success Story
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">The Situation</h4>
                <p className="text-slate-700">{story.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Impact</h4>
                <p className="text-slate-700">{story.impact}</p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-slate-900 mb-2">AMI Context</h4>
                <p className="text-slate-700 text-sm">{story.amiContext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 border-2 border-red-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">The Broader Impact</h3>
        <p className="text-slate-700 mb-4">
          These individual stories reflect a systemic crisis across Colorado's rural resort counties:
        </p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start">
            <span className="text-red-600 font-bold mr-3 text-xl">•</span>
            <span><strong>Bus wait times doubled</strong> due to driver shortages caused by housing barriers</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 font-bold mr-3 text-xl">•</span>
            <span><strong>Grocery stores closing early</strong> and pharmacies no longer open weekends due to staffing issues</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 font-bold mr-3 text-xl">•</span>
            <span><strong>Essential services struggling:</strong> Teachers, nurses, police, firefighters cannot afford to live where they work</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 font-bold mr-3 text-xl">•</span>
            <span><strong>Long commutes from distant towns</strong> increasing costs and decreasing quality of life for workers</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 font-bold mr-3 text-xl">•</span>
            <span><strong>Three-bedroom condos over $600,000</strong> and houses over $1 million in most resort communities</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
