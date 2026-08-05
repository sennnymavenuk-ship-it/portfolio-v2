import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-center text-slate-400 mb-12">Freelance & Exploratory</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 transition-colors">
            <div className="text-4xl mb-3">{project.icon}</div>
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-sm text-cyan-400 mb-3">{project.subtitle}</p>
            <p className="text-slate-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, j) => (
                <span key={j} className="text-xs bg-slate-700 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:underline">
              {project.linkLabel} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};