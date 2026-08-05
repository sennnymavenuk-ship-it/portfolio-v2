import { EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">Career Journey</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12">Work Experience</h2>

      <div className="relative border-l border-slate-700 ml-3 sm:ml-6">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="mb-10 ml-6 sm:ml-8 relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-950" />

            <p className="text-xs font-mono text-cyan-400 mb-1">{job.period}</p>
            <h3 className="text-lg font-bold text-slate-100">{job.role}</h3>
            <p className="text-sm text-slate-400 mb-3">{job.company}</p>

            <ul className="space-y-1.5 mb-3">
              {job.bullets.map((b, j) => (
                <li key={j} className="text-sm text-slate-300 leading-relaxed flex gap-2">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
