import { useState } from 'react';
import { CONTACT } from '../data/portfolioData';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Front-end only for now - wire up to an email service (e.g. Formspree, EmailJS) later
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-8 py-20">
      <p className="text-center text-cyan-400 font-mono text-sm mb-2">Get In Touch</p>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-4">Let's Connect</h2>

      <div className="text-center mb-12">
        <h3 className="text-lg font-bold text-slate-100 mb-2">{CONTACT.heading}</h3>
        <p className="max-w-xl mx-auto text-sm text-slate-400 leading-relaxed">{CONTACT.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact links */}
        <div className="space-y-3">
          {CONTACT.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 hover:border-cyan-500/50 transition-colors"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-sm text-slate-200">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 space-y-4">
          {submitted && (
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm rounded-lg px-3 py-2">
              <CheckCircle2 className="w-4 h-4" /> Message ready to send - wire up an email service to go live.
            </div>
          )}

          <div>
            <label className="block text-xs text-slate-400 mb-1">Your Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Email Address</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Subject</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg py-3 transition-colors"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
