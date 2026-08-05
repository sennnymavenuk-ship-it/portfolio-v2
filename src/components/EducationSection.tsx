import { EDUCATION } from '../data/portfolioData';

export const EducationSection = () => {
  return (
    <section id="education" className="max-w-5xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">Academic Background</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12">My Education</h2>

      <div className="relative border-l border-slate-700 ml-3 sm:ml-6">
        {EDUCATION.map((edu, i) => (
          <div key={i} className="mb-10 ml-6 sm:ml-8 relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-950" />

            <p className="text-xs font-mono text-cyan-400 mb-1">{edu.period}</p>
            <h3 className="text-lg font-bold text-slate-100">{edu.title}</h3>
            <p className="text-sm text-slate-400 mb-2">{edu.institution}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
