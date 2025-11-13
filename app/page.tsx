import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { ExecutiveSummary } from '@/components/sections/ExecutiveSummary';
import { AMIProblem } from '@/components/sections/AMIProblem';
import { RuralResortExemption } from '@/components/sections/RuralResortExemption';
import { HousingCrisisData } from '@/components/sections/HousingCrisisData';
import { FundingDisparity } from '@/components/sections/FundingDisparity';
import { DataAnalysis } from '@/components/sections/DataAnalysis';
import { PolicyRecommendations } from '@/components/sections/PolicyRecommendations';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <AMIProblem />
      <RuralResortExemption />
      <HousingCrisisData />
      <FundingDisparity />
      <DataAnalysis />
      <PolicyRecommendations />
      <Footer />
    </div>
  );
}
