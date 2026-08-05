import { STRENGTHS } from '../data/portfolioData';

export const StrengthsSection = () => {
  return (
    <section id="strengths" className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">Beyond the Code</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12">Core Strengths</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STRENGTHS.map((s, i) => (
          <div
            key={i}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all"
          >
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-bold text-slate-100 mb-2">{s.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
