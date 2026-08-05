import { ABOUT } from '../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">About Me</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10">Who I Am</h2>

      <div className="max-w-3xl mx-auto space-y-4 mb-12">
        {ABOUT.paragraphs.map((p, i) => (
          <p key={i} className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {p}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ABOUT.infoCards.map((card, i) => (
          <div
            key={i}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors"
          >
            <div className="text-2xl mb-2">{card.icon}</div>
            <h3 className="font-bold text-slate-100 mb-1">{card.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
