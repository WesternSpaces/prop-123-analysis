import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export function ExecutiveSummary() {
  return (
    <Section
      id="overview"
      title="Executive Summary"
      subtitle="Understanding the disconnect between policy intent and on-the-ground reality"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card title="What is Proposition 123?">
          <p className="text-slate-700 mb-4">
            Approved by Colorado voters in November 2022, Proposition 123 dedicates 0.1% of state income tax revenue—approximately <strong>$300 million annually</strong>—to affordable housing initiatives.
          </p>
          <p className="text-slate-700 mb-4">
            To receive funding, local governments must commit to increasing affordable housing stock by <strong>3% annually</strong> and implement expedited review processes for developments where 50% or more of units are affordable.
          </p>
          <p className="text-slate-700">
            <strong>202 of 336</strong> eligible jurisdictions opted in, covering more than <strong>90% of Colorado's population</strong>.
          </p>
        </Card>

        <Card title="The Core Problem">
          <p className="text-slate-700 mb-4">
            Proposition 123 sets income limits based on Area Median Income (AMI):
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-4">
            <li><strong>60% AMI</strong> for rental housing</li>
            <li><strong>100% AMI</strong> for ownership housing</li>
          </ul>
          <p className="text-slate-700">
            In rural resort communities, these limits create a devastating "missing middle" problem: <strong>essential workers earn too much to qualify but not enough to afford market-rate housing</strong>.
          </p>
        </Card>
      </div>

      <Card highlight className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">The Missing Middle Crisis</h3>
        <p className="text-slate-700 mb-4">
          Consider these real examples from Colorado's mountain communities:
        </p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-lg">•</span>
            <span>A <strong>$167,000 human resources position</strong> in Steamboat Springs went unfilled because candidates couldn't afford local housing</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-lg">•</span>
            <span>Units designed for <strong>120% AMI earners sat vacant</strong> in Breckenridge while workers commuted from distant towns</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-lg">•</span>
            <span>Doctors earning substantial salaries <strong>couldn't afford $1 million+ homes</strong> in resort communities</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 text-lg">•</span>
            <span>Teachers, nurses, police officers, and service industry workers are <strong>priced out entirely</strong></span>
          </li>
        </ul>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card title="The Rural Resort Exemption">
          <p className="text-slate-700 mb-4">
            HB23-1304 (signed June 2023) established a petition process allowing <strong>12 rural resort counties</strong> to request approval for higher AMI limits—up to 140% for rentals and 160% for ownership.
          </p>
          <p className="text-slate-700 mb-4">
            But there's a catch: Communities must prove their <strong>weighted average housing need</strong> exceeds current limits through complex documentation including:
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Housing Needs Assessment (within 3 years)</li>
            <li>Needs analysis by AMI bracket</li>
            <li>Justification narrative</li>
            <li>Specific project examples</li>
            <li>Impact analysis</li>
          </ul>
        </Card>

        <Card title="Why Communities Struggle">
          <p className="text-slate-700 mb-4">
            Despite genuine workforce housing crises, many communities have failed to qualify for exemptions due to:
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">✗</span>
              <span><strong>The weighted average catch-22:</strong> Communities with both low and high-income needs may not show high enough average</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">✗</span>
              <span><strong>Technical capacity barriers:</strong> Small jurisdictions lack staff/expertise for complex analyses</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">✗</span>
              <span><strong>AMI data distortion:</strong> Investment income and retirement earnings skew median upward</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">✗</span>
              <span><strong>Volatility:</strong> Routt County saw 50% AMI jump in 5 years vs. 11% the previous 5 years</span>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
