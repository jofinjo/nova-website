import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'AI Implementation', path: '/services/ai-implementation' },
      { label: 'Software Testing', path: '/services/software-testing' },
    ],
  },
  { label: 'Careers', path: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-600 flex items-center justify-center shadow-md shadow-fuchsia-500/30 group-hover:shadow-fuchsia-500/50 transition-shadow">
            <Zap size={16} className="text-white fill-white" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Nova<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500">Neuron</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.path} className="relative">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isActive(link.path)
                      ? 'text-fuchsia-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-slate-900 border border-slate-700/60 rounded-xl shadow-xl shadow-black/30 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/careers"
            className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white transition-colors shadow-md shadow-fuchsia-500/20"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 border-t border-slate-800 px-6 pb-6 pt-2 space-y-1">
          <Link to="/" className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive('/') ? 'text-fuchsia-400' : 'text-slate-300'}`}>Home</Link>
          <div>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${isActive('/services') ? 'text-fuchsia-400' : 'text-slate-300'}`}
            >
              Services
              <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l border-slate-700 pl-4">
                <Link to="/services/ai-implementation" className="block py-2 text-sm text-slate-400 hover:text-white">AI Implementation</Link>
                <Link to="/services/software-testing" className="block py-2 text-sm text-slate-400 hover:text-white">Software Testing</Link>
              </div>
            )}
          </div>
          <Link to="/careers" className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive('/careers') ? 'text-fuchsia-400' : 'text-slate-300'}`}>Careers</Link>
          <div className="pt-2">
            <Link to="/careers" className="block w-full text-center px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
