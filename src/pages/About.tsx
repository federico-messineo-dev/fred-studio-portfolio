import React from 'react';
import { motion } from 'motion/react';
import { Code2, Briefcase, Award, Terminal, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Intro Section - ALT BG */}
      <section className="py-32 px-6 md:px-24 bg-surface-muted min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-surface-bright border border-white/10 p-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop&q=80" 
              alt="Developer Workspace" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-brand/30 bg-surface flex items-center justify-center p-4">
              <span className="font-mono text-brand text-[10px] leading-tight tracking-widest text-center">{t('about.intro.trusted')}</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('nav.about')}</span>
            <h2 className="font-display font-black text-4xl md:text-6xl mb-8 tracking-tighter">
              {t('home.about.title')}
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>{t('about.intro.p1')}</p>
              <p>{t('about.intro.p2')}</p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-3">
              {['REACT / NEXT.JS', 'SAP UI5', 'N8N / AI AUTOMATION', t('about.intro.tag1')].map((tag) => (
                <span key={tag} className="bg-surface-bright px-4 py-2 font-mono text-xs text-brand border border-white/5">
                  &gt; {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('about.skills.tag')}</span>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter">{t('about.skills.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t('about.skills.s1.title'), skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: <Code2 className="text-brand" /> },
              { title: t('about.skills.s2.title'), skills: ["Node.js", "Express", "PostgreSQL", "Firebase"], icon: <Terminal className="text-brand" /> },
              { title: t('about.skills.s3.title'), skills: ["n8n", "OpenAI API", "LangChain", "Python"], icon: <Cpu className="text-brand" /> },
              { title: t('about.skills.s4.title'), skills: ["SAP UI5", "Fiori", "ABAP Cloud", "BTP"], icon: <Briefcase className="text-brand" /> }
            ].map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 bg-surface-muted border border-white/5 hover:border-brand/20 transition-all group hover:-translate-y-2"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{group.icon}</div>
                <h3 className="font-display font-bold text-xl mb-6">{group.title}</h3>
                <ul className="space-y-3">
                  {group.skills.map((skill, j) => (
                    <li key={j} className="text-white/60 text-sm font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section - ALT BG */}
      <section className="py-32 px-6 md:px-24 border-t border-white/5 bg-surface-muted">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('about.exp.tag')}</span>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter">{t('about.exp.title')}</h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: "2018 - 2023",
                role: t('about.exp.v1.role'),
                company: t('about.exp.v1.company'),
                desc: t('about.exp.v1.desc'),
                icon: <Code2 className="text-brand" />
              },
              {
                year: "2023 - 2026",
                role: t('about.exp.v2.role'),
                company: t('about.exp.v2.company'),
                desc: t('about.exp.v2.desc'),
                icon: <Briefcase className="text-brand" />
              },
              {
                year: t('about.exp.v3.year'),
                role: t('about.exp.v3.role'),
                company: t('about.exp.v3.company'),
                desc: t('about.exp.v3.desc'),
                icon: <Award className="text-brand" />
              }
            ].map((item, i, arr) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="flex gap-8 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-surface-bright border border-white/10 flex items-center justify-center relative z-10 group overflow-hidden">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  {i !== arr.length - 1 && <div className="w-[1px] h-full bg-white/10 absolute top-12" />}
                </div>
                <div className="pb-12">
                  <span className="font-mono text-brand text-xs mb-2 block">{item.year}</span>
                  <h3 className="font-display font-bold text-2xl mb-1">{item.role}</h3>
                  <h4 className="text-white/40 font-mono text-sm mb-4">{item.company}</h4>
                  <p className="text-white/60 leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
