import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/novaneuron_logo_white.png"
                alt="NovaNeuron"
                className="h-7 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses with intelligent AI solutions and rigorous software quality assurance.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/services/ai-implementation" className="hover:text-fuchsia-400 transition-colors">AI Implementation</Link></li>
              <li><Link to="/services/software-testing" className="hover:text-fuchsia-400 transition-colors">Software Testing</Link></li>
              <li><Link to="/services" className="hover:text-fuchsia-400 transition-colors">All Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-fuchsia-400 transition-colors">About</Link></li>
              <li><Link to="/careers" className="hover:text-fuchsia-400 transition-colors">Careers</Link></li>
              <li><a href="mailto:hello@novaneuro.com" className="hover:text-fuchsia-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} NovaNeuron. All rights reserved.</p>
          <p className="text-slate-500 text-xs">Shaping tomorrow's intelligence, today.</p>
        </div>
      </div>
    </footer>
  );
}
