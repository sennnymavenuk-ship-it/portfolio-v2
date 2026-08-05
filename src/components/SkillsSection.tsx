import { SKILLS } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">Technical Expertise</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SKILLS.map((group, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
              <h3 className="font-bold text-slate-100 mb-5">{group.category}</h3>
              <div className="space-y-4">
                {group.items.map((item, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-cyan-400 font-mono">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: j * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};