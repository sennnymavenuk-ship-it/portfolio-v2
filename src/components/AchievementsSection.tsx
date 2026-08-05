import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">Proud Moments</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12">Key Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={i}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors"
          >
            <div className="text-3xl mb-3">{a.icon}</div>
            <h3 className="font-bold text-slate-100 mb-2">{a.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
