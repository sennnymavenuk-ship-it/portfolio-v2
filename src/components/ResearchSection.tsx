import { RESEARCH } from '../data/portfolioData';

export const ResearchSection = () => {
  return (
    <section id="research" className="max-w-5xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">Academic Research</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10">MSc Research Project</h2>

      <div className="bg-slate-800/50 border border-cyan-500/30 rounded-3xl p-6 sm:p-10">
        <span className="inline-block text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full mb-4">
          {RESEARCH.status}
        </span>

        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 mb-1">{RESEARCH.title}</h3>
        <p className="text-cyan-400 text-sm mb-6">{RESEARCH.subtitle}</p>

        <div className="space-y-4 mb-8">
          {RESEARCH.paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {RESEARCH.infoGrid.map((item, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-700 rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {RESEARCH.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-slate-900 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
