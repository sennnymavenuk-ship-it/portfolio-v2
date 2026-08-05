import { FOOTER } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-sm text-cyan-400 mb-3">{FOOTER.tagline}</p>
        <p className="text-xs text-slate-500 mb-4">{FOOTER.copyright}</p>

        <div className="flex justify-center gap-6 flex-wrap">
          {FOOTER.socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
