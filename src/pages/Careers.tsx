import { Link } from 'react-router-dom';
import {
  Heart, Users, Zap, Globe, ArrowRight,
  Coffee, BookOpen, Shield
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'People First',
    desc: 'We genuinely care about the wellbeing, growth, and happiness of every team member. Our people are the product.',
  },
  {
    icon: Zap,
    title: 'Move Fast, Think Deep',
    desc: 'We move quickly, but never at the expense of quality. We favor thoughtful decisions over reactive ones.',
  },
  {
    icon: Users,
    title: 'Radical Collaboration',
    desc: 'Great work rarely happens in isolation. We build in the open, share credit generously, and trust each other completely.',
  },
  {
    icon: Globe,
    title: 'Inclusive by Default',
    desc: "Diverse perspectives make us smarter. We're building a team that reflects the world we're building for.",
  },
  {
    icon: BookOpen,
    title: 'Always Learning',
    desc: 'The best engineers never stop being curious. We invest heavily in learning, experimentation, and intellectual growth.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Mindset',
    desc: "We celebrate effort, embrace failure as feedback, and support everyone's path to becoming their best professional self.",
  },
];

const perks = [
  { icon: Coffee, label: 'Flexible Work Hours', desc: 'Own your schedule. Results matter more than hours logged.' },
  { icon: Globe, label: 'Remote-First Culture', desc: 'Work from anywhere. We have teammates across the globe.' },
  { icon: Shield, label: 'Comprehensive Health', desc: 'Full medical, dental, and vision coverage from day one.' },
];

export default function Careers() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-fuchsia-500/7 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            We're Hiring
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Build the future of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400">intelligent software.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            At NovaNeuron, you'll work alongside brilliant minds on problems that matter — pushing the boundaries of AI and software quality for clients who depend on getting it right.
          </p>
          <a
            href="#open-roles"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-fuchsia-500/25"
          >
            See Open Roles <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">What we stand for</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            These aren't words on a wall — they're principles we actively practice in how we hire, work, and grow together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 p-7 hover:border-fuchsia-500/30 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-5">
                <Icon className="text-fuchsia-400" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2.5">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Life at NovaNeuron */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Life at NovaNeuron</p>
              <h2 className="text-4xl font-bold tracking-tight mb-5">A place where you can do your best work.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We're a remote-first company with a strong culture of asynchronous collaboration, deep work, and genuine human connection. We believe a great workplace is one where people feel trusted, challenged, and supported.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Whether you're an experienced engineer looking for your next challenge or a rising talent ready to make your mark, NovaNeuron is a place where you'll grow faster than anywhere else — because we're serious about that.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="rounded-xl object-cover w-full h-44 col-span-2"
              />
              <img
                src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Engineers at work"
                className="rounded-xl object-cover w-full h-44"
              />
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team meeting"
                className="rounded-xl object-cover w-full h-44"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Benefits & Perks</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">We invest in you</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Competitive compensation is just the start. Here's how we take care of our team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="rounded-xl border border-slate-800 bg-slate-900/50 p-7 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="text-fuchsia-400" size={18} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1.5 text-sm">{label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles - Dover widget */}
      <section id="open-roles" className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Open Positions</p>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Join the team</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We're growing fast and looking for exceptional people to grow with us.
            </p>
          </div>
          <div className="flex justify-center">
            <iframe
              width="800px"
              height="700px"
              src="https://app.dover.com/jobs/novaneuron?embed=1"
              frameBorder="0"
              className="rounded-xl border border-slate-700/60 max-w-full"
              title="NovaNeuron Open Positions"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to make your move?</h2>
        <p className="text-slate-400 mb-8">
          Brilliant engineers, curious minds, and driven professionals — we'd love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:careers@novaneuro.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-400 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-fuchsia-500/25"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm transition-colors"
          >
            See Our Work
          </Link>
        </div>
      </section>
    </div>
  );
}
