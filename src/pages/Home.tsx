import { Link } from 'react-router-dom';
import { Brain, Shield, ArrowRight, CheckCircle, BarChart3, Lock, Cpu, FlaskConical } from 'lucide-react';

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '40+', label: 'Expert Engineers' },
  { value: '12+', label: 'Industries Served' },
];

const aiFeatures = [
  'Custom ML model development',
  'LLM integration & fine-tuning',
  'Intelligent process automation',
  'Predictive analytics pipelines',
];

const testingFeatures = [
  'End-to-end test automation',
  'Performance & load testing',
  'Security vulnerability testing',
  'CI/CD quality gate integration',
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-fuchsia-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              AI-Driven. Precision-Tested.
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Intelligent software
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400">
                built to last.
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              NovaNeuron combines cutting-edge AI implementation with rigorous software testing to help organizations ship faster, smarter, and with total confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                We're Hiring
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-800/60 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-slate-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Two disciplines. One mission.</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We unify the intelligence of AI with the discipline of quality engineering so your software doesn't just work — it excels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* AI card */}
          <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-10 hover:border-fuchsia-500/40 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-14 h-14 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-7">
              <Brain className="text-fuchsia-400" size={26} />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI Implementation</h3>
            <p className="text-slate-400 leading-relaxed mb-7">
              We design and deploy AI systems tailored to your workflows — from intelligent automation to advanced machine learning models that generate real business value.
            </p>
            <ul className="space-y-3 mb-8">
              {aiFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle size={15} className="text-fuchsia-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/services/ai-implementation"
              className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>

          {/* Testing card */}
          <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-10 hover:border-sky-500/40 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-7">
              <Shield className="text-sky-400" size={26} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Software Testing</h3>
            <p className="text-slate-400 leading-relaxed mb-7">
              Our QA engineers build comprehensive test strategies that eliminate defects at every layer — ensuring your releases are reliable, performant, and secure.
            </p>
            <ul className="space-y-3 mb-8">
              {testingFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle size={15} className="text-sky-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/services/software-testing"
              className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why NovaNeuron */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
              <h2 className="text-4xl font-bold tracking-tight mb-5">The edge that separates good from exceptional.</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                We don't just build software — we engineer outcomes. By marrying AI capabilities with world-class quality assurance, we help teams move fast without breaking things.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
              >
                See all services <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Cpu, title: 'AI-First Approach', desc: 'Every solution starts with intelligent automation in mind.' },
                { icon: FlaskConical, title: 'Test-Driven Quality', desc: 'Quality is baked in from day one, not bolted on at the end.' },
                { icon: BarChart3, title: 'Measurable ROI', desc: 'We track outcomes, not just deliverables.' },
                { icon: Lock, title: 'Security by Design', desc: 'Compliance and security are core requirements, never afterthoughts.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl bg-slate-900 border border-slate-800 p-6">
                  <Icon className="text-fuchsia-400 mb-4" size={22} />
                  <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Ready to Start?</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 relative">
            Let's build something remarkable.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 relative">
            Whether you're looking to implement AI or level up your QA process, NovaNeuron has the expertise to take you there.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-fuchsia-500/25"
            >
              View Services <ArrowRight size={16} />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
