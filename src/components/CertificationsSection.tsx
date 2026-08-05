import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">Credentials</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12">My Certifications</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={i}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors"
          >
            <div className="text-2xl mb-2">{cert.icon}</div>
            <h3 className="text-sm font-bold text-slate-100 mb-1 leading-snug">{cert.title}</h3>
            <p className="text-xs text-slate-400">{cert.issuer}</p>
            <p className="text-xs text-cyan-400 mt-1">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
