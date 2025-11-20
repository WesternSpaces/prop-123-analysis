export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About This Resource</h3>
            <p className="text-slate-300 text-sm">
              An educational analysis of Colorado Proposition 123 and the challenges rural resort communities face with Area Median Income (AMI) limits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Key Sources</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Colorado Division of Housing</li>
              <li>• Colorado Department of Local Affairs</li>
              <li>• HB23-1304 Legislative Analysis</li>
              <li>• Colorado Sun, Denver Post, CPR</li>
              <li>• Local mountain town reporting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>
                <a href="https://cdola.colorado.gov/proposition-123" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  CDOLA Prop 123 Info
                </a>
              </li>
              <li>
                <a href="https://leg.colorado.gov/bills/hb23-1304" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  HB23-1304 Bill Text
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white underline">
                  Download Policy Brief (PDF)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white underline">
                  Download Fact Sheet (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="text-center text-sm text-slate-400">
            <div className="bg-slate-800 rounded-lg p-4 inline-block">
              <p className="text-slate-200 font-semibold mb-1">For Questions or More Information:</p>
              <p className="text-slate-300">
                Sarah Brown McClain<br/>
                <a href="mailto:sarah@westernspaces.co" className="text-blue-400 hover:text-blue-300 underline">
                  sarah@westernspaces.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
