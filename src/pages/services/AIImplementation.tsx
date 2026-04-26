import { Link } from 'react-router-dom';
import {
  Brain, ArrowRight, CheckCircle, Cpu, BarChart3, Workflow,
  MessageSquare, Database, TrendingUp, Layers, Zap
} from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'Custom ML Models',
    desc: 'We build and train machine learning models purpose-built for your domain — from classification and regression to deep learning architectures.',
  },
  {
    icon: MessageSquare,
    title: 'LLM Integration & Fine-Tuning',
    desc: 'Leverage the power of large language models in your products. We fine-tune foundation models on your data and integrate them into your applications.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Automation',
    desc: 'Replace repetitive manual work with AI-driven workflows that learn, adapt, and scale — freeing your team for higher-value work.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    desc: 'Turn historical data into forward-looking insights. Our forecasting systems help you anticipate demand, risk, and opportunity.',
  },
  {
    icon: Database,
    title: 'Data Pipeline Engineering',
    desc: 'Robust data infrastructure is the foundation of every great AI system. We design ETL pipelines that keep your models fresh and accurate.',
  },
  {
    icon: TrendingUp,
    title: 'AI Strategy & Roadmapping',
    desc: 'Not sure where to start? We assess your current state, identify high-impact AI opportunities, and build a pragmatic roadmap.',
  },
];

const processSteps = [
  { number: '01', title: 'Discovery', desc: 'We audit your data, workflows, and goals to identify where AI will drive the greatest return.' },
  { number: '02', title: 'Design', desc: 'Our architects design a scalable, explainable AI solution tailored to your exact requirements.' },
  { number: '03', title: 'Development', desc: 'We build, train, and iterate — using rigorous validation to ensure model accuracy and reliability.' },
  { number: '04', title: 'Deployment', desc: 'We ship to production with robust monitoring, alerting, and CI/CD pipelines for continuous improvement.' },
];

const outcomes = [
  'Reduce manual processing time by up to 80%',
  'Improve decision accuracy with data-driven predictions',
  'Scale operations without proportional headcount growth',
  'Surface insights hidden in your existing data',
  'Accelerate product development with AI-native features',
  'Stay ahead of competitors with adaptive intelligence',
];

export default function AIImplementation() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-fuchsia-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">AI Implementation</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 text-xs font-medium mb-6">
              <Brain size={12} />
              Artificial Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              AI that works for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400">your business.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
              NovaNeuron helps you harness the true potential of artificial intelligence — moving beyond the hype to deliver AI systems that solve real problems and create measurable impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/25"
              >
                Work With Us <ArrowRight size={16} />
              </Link>
              <Link
                to="/services/software-testing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                See Testing Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-4xl font-bold tracking-tight">What we build</h2>
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
            <h2 className="text-4xl font-bold tracking-tight mb-4">From idea to production</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A proven four-step framework that takes AI from concept to a live, monitored system delivering results.
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

      {/* Outcomes */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Outcomes</p>
            <h2 className="text-4xl font-bold tracking-tight mb-5">What you can expect</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our clients consistently see transformative results within the first 90 days of deployment. Here's what working with NovaNeuron delivers.
            </p>
            <ul className="space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-fuchsia-400 flex-shrink-0 mt-0.5" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-500/8 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                <Zap className="text-fuchsia-400" size={18} />
              </div>
              <span className="text-white font-semibold">NovaNeuron AI Stack</span>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Model Accuracy', value: 96, color: 'bg-fuchsia-400' },
                { label: 'Automation Coverage', value: 82, color: 'bg-purple-400' },
                { label: 'Pipeline Reliability', value: 99, color: 'bg-blue-400' },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-white font-medium">{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700">
                    <div
                      className={`h-2 rounded-full ${color}`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <Layers size={14} />
                Multi-layer architecture
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Cpu size={14} />
                Edge-ready deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to implement AI?</h2>
          <p className="text-slate-400 mb-8">Let's discuss your use case and design a solution that fits your team, timeline, and budget.</p>
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
