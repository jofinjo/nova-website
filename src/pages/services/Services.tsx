import { Link } from 'react-router-dom';
import { Brain, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Brain,
    label: 'Artificial Intelligence',
    title: 'AI Implementation',
    desc: 'We design and deploy intelligent AI systems that automate processes, surface insights, and drive measurable business outcomes. From custom ML models to LLM integrations, we bring AI into your workflows with confidence.',
    color: 'cyan',
    path: '/services/ai-implementation',
    highlights: [
      'Custom ML & deep learning models',
      'LLM integration & fine-tuning',
      'Intelligent process automation',
      'Predictive analytics & forecasting',
      'AI strategy & roadmapping',
    ],
  },
  {
    icon: Shield,
    label: 'Quality Assurance',
    title: 'Software Testing',
    desc: 'Our QA engineers craft comprehensive test strategies that eliminate defects at every layer. We help teams ship faster and with complete confidence through automation, performance testing, and CI/CD quality gates.',
    color: 'sky',
    path: '/services/software-testing',
    highlights: [
      'End-to-end test automation',
      'Performance & load testing',
      'Security vulnerability testing',
      'CI/CD quality gate integration',
      'API & integration testing',
    ],
  },
];

const colorMap = {
  cyan: {
    badge: 'border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400',
    icon: 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400',
    check: 'text-fuchsia-400',
    link: 'text-fuchsia-400 hover:text-fuchsia-300',
    hover: 'hover:border-fuchsia-500/40',
    glow: 'from-fuchsia-500/5',
  },
  sky: {
    badge: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
    icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    check: 'text-blue-400',
    link: 'text-blue-400 hover:text-blue-300',
    hover: 'hover:border-blue-500/40',
    glow: 'from-blue-500/5',
  },
};

export default function Services() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-fuchsia-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Two disciplines.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400">Infinite possibilities.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            NovaNeuron delivers specialized AI implementation and software testing services — each best-in-class, even more powerful together.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, label, title, desc, color, path, highlights }) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <div
                key={title}
                className={`group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-10 ${c.hover} transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-7 ${c.badge}`}>
                  <Icon size={12} />
                  {label}
                </div>
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                  <Icon size={26} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-slate-400 leading-relaxed mb-8">{desc}</p>
                <ul className="space-y-3 mb-10">
                  {highlights.map((h) => (
                    <li key={h} className={`flex items-center gap-3 text-sm text-slate-300`}>
                      <CheckCircle size={15} className={`flex-shrink-0 ${c.check}`} />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to={path}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${c.link}`}
                >
                  Explore {title} <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Combined value section */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">The NovaNeuron Difference</p>
          <h2 className="text-4xl font-bold tracking-tight mb-6">Better together.</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            When AI implementation and software testing are handled by the same expert team, you get tighter feedback loops, higher-quality AI systems, and faster releases — all without the overhead of managing multiple vendors.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Unified Expertise', desc: 'One team owns both the build and the quality layer — eliminating handoff friction and blind spots.' },
              { title: 'Faster Time-to-Value', desc: 'Integrated testing from day one means fewer production incidents and faster iteration cycles.' },
              { title: 'End-to-End Ownership', desc: "We're accountable for the full lifecycle — from first commit to live, monitored deployment." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl bg-slate-900 border border-slate-800 p-7">
                <h3 className="text-white font-semibold mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Not sure where to start?</h2>
        <p className="text-slate-400 mb-8">Our team will help you identify the highest-impact service for your current stage.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-fuchsia-500/25"
          >
            Talk to Us <ArrowRight size={16} />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
