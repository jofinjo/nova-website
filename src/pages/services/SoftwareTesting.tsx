import { Link } from 'react-router-dom';
import {
  Shield, ArrowRight, CheckCircle, Bug, Gauge, Lock,
  GitMerge, Layers, FlaskConical, MonitorCheck
} from 'lucide-react';

const capabilities = [
  {
    icon: FlaskConical,
    title: 'Test Automation',
    desc: 'We build robust, maintainable test suites for unit, integration, and end-to-end testing using industry-leading frameworks.',
  },
  {
    icon: Gauge,
    title: 'Performance & Load Testing',
    desc: 'Validate your system under stress. We simulate real-world traffic patterns to identify bottlenecks before they reach production.',
  },
  {
    icon: Lock,
    title: 'Security Testing',
    desc: 'Proactive vulnerability assessments, penetration testing, and OWASP compliance checks to harden your application surface.',
  },
  {
    icon: Bug,
    title: 'Exploratory & Manual Testing',
    desc: 'Experienced QA engineers explore your application to uncover edge cases that automated tests miss.',
  },
  {
    icon: GitMerge,
    title: 'CI/CD Quality Gates',
    desc: 'Integrated testing pipelines that block bad code from ever reaching production — automated, fast, and reliable.',
  },
  {
    icon: MonitorCheck,
    title: 'API & Integration Testing',
    desc: 'Comprehensive testing of RESTful APIs, GraphQL endpoints, microservices, and third-party integrations.',
  },
];

const processSteps = [
  { number: '01', title: 'Test Planning', desc: 'We analyze your application, identify risk areas, and define a test strategy aligned with your release cadence.' },
  { number: '02', title: 'Framework Setup', desc: 'Our engineers select and configure the right tools, establish coding standards, and build foundational test infrastructure.' },
  { number: '03', title: 'Execution', desc: 'Test suites run across every layer — UI, API, performance, and security — with clear, actionable reporting.' },
  { number: '04', title: 'Continuous QA', desc: 'Tests run on every commit via CI/CD. We monitor, maintain, and evolve your suite as your product grows.' },
];

const stats = [
  { value: '90%', label: 'Faster regression cycles' },
  { value: '3x', label: 'Fewer production defects' },
  { value: '100%', label: 'CI/CD integration rate' },
  { value: '48h', label: 'Average setup time' },
];

const coverage = [
  { label: 'Functional Coverage', value: 94, color: 'bg-sky-400' },
  { label: 'Regression Pass Rate', value: 99, color: 'bg-teal-400' },
  { label: 'Defect Detection Rate', value: 97, color: 'bg-cyan-400' },
];

export default function SoftwareTesting() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-1/3 w-[600px] h-[500px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/services" className="hover:text-sky-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Software Testing</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 text-xs font-medium mb-6">
              <Shield size={12} />
              Quality Assurance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Ship with confidence,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400">every single time.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
              NovaNeuron's QA engineers build comprehensive testing strategies that catch defects early, accelerate releases, and give your team the confidence to ship continuously.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-fuchsia-500/25"
              >
                Work With Us <ArrowRight size={16} />
              </Link>
              <Link
                to="/services/ai-implementation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                See AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800/60 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => {
            const colors = ['bg-gradient-to-r from-fuchsia-500 to-purple-500', 'bg-gradient-to-r from-purple-500 to-blue-500', 'bg-gradient-to-r from-blue-500 to-cyan-500', 'bg-gradient-to-r from-cyan-500 to-fuchsia-500'];
            const color = colors[stats.indexOf({value, label} as any) % colors.length];
            return (
              <div key={label}>
                <p className="text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-4xl font-bold tracking-tight">What we test</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 p-7 hover:border-fuchsia-500/30 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-5 group-hover:bg-fuchsia-500/15 transition-colors">
                <Icon className="text-fuchsia-400" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2.5">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-4xl font-bold tracking-tight mb-4">How we ensure quality</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A structured QA framework built for modern engineering teams that need speed without sacrificing reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ number, title, desc }) => (
              <div key={number} className="relative">
                <div className="text-6xl font-bold text-slate-800 mb-4 leading-none">{number}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-500/8 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                <Shield className="text-fuchsia-400" size={18} />
              </div>
              <span className="text-white font-semibold">Quality Metrics</span>
            </div>
            <div className="space-y-4 mb-8">
              {coverage.map(({ label, value, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-white font-medium">{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-slate-700/60 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <Layers size={14} />
                Multi-layer testing
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <GitMerge size={14} />
                CI/CD integrated
              </div>
            </div>
          </div>

          <div>
            <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">Quality isn't optional</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Every bug that reaches production costs 10x more to fix than one caught in testing. Our QA practices are designed to make quality a competitive advantage, not a bottleneck.
            </p>
            <ul className="space-y-4">
              {[
                'Reduce time-to-market without compromising quality',
                'Build developer confidence with fast feedback loops',
                'Protect your reputation with battle-hardened releases',
                'Meet compliance and security standards effortlessly',
                'Scale QA coverage as your codebase grows',
                'Empower your team with best-in-class tooling',
              ].map((o) => (
                <li key={o} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-fuchsia-400 flex-shrink-0 mt-0.5" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to raise your quality bar?</h2>
          <p className="text-slate-400 mb-8">Let's design a testing strategy that matches your tech stack, velocity, and risk tolerance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-fuchsia-500/25"
            >
              Join the Team <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
