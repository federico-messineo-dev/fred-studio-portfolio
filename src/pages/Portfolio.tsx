import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Projects Header - ALT BG */}
      <section className="pt-32 pb-20 px-6 md:px-24 bg-surface-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div>
              <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('portfolio.hero.tag')}</span>
              <h2 className="font-display font-black text-4xl md:text-7xl tracking-tighter">{t('portfolio.hero.title')}</h2>
            </div>
            <div className="font-mono text-white/40 text-sm border-l-2 border-brand pl-4">
              [ {t('portfolio.hero.showing')} ]
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "La Veranda da Simona",
                tags: t('portfolio.p1.tags'),
                img: "https://picsum.photos/seed/veranda/1200/800",
                type: "CASE_STUDY"
              },
              {
                title: "AI Logistics Hub",
                tags: t('portfolio.p2.tags'),
                img: "https://picsum.photos/seed/logistics/1200/800",
                type: "ENTERPRISE"
              },
              {
                title: "Crypto Dashboard",
                tags: t('portfolio.p3.tags'),
                img: "https://picsum.photos/seed/crypto/1200/800",
                type: "FINTECH"
              },
              {
                title: "Smart Home Controller",
                tags: t('portfolio.p4.tags'),
                img: "https://picsum.photos/seed/home/1200/800",
                type: "IOT"
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden mb-6 bg-surface-bright border border-white/10">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-surface px-3 py-1 font-mono text-[10px] text-brand border border-brand/20">{project.type}</div>
                  <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="text-black" size={40} />
                  </div>
                </div>
                <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-brand transition-colors">{project.title}</h3>
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest">{project.tags}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 md:px-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('portfolio.test.tag')}</span>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter">{t('portfolio.test.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marco Rossi",
                role: "CEO @ TechFlow",
                text: t('portfolio.test.t1.text'),
                rating: 5
              },
              {
                name: "Elena Bianchi",
                role: "Marketing Manager @ CreativeHub",
                text: t('portfolio.test.t2.text'),
                rating: 5
              },
              {
                name: "Giuseppe Verdi",
                role: "Founder @ GreenStart",
                text: t('portfolio.test.t3.text'),
                rating: 5
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-10 bg-surface-muted border border-white/5 hover:border-brand/20 transition-colors group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="fill-brand text-brand" />)}
                </div>
                <p className="text-white/60 italic mb-8 leading-relaxed group-hover:text-white transition-colors">"{t.text}"</p>
                <div>
                  <h4 className="font-display font-bold text-lg">{t.name}</h4>
                  <p className="font-mono text-xs text-brand uppercase">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section - ALT BG */}
      <section className="py-20 px-6 md:px-24 bg-surface-muted">
        <div className="max-w-7xl mx-auto flex items-center justify-center border-2 border-dashed border-white/10 p-20">
          <div className="text-center">
            <span className="font-mono text-brand text-sm tracking-widest animate-pulse mb-4 block">{t('portfolio.coming')}</span>
            <p className="text-white/40 text-xs font-mono uppercase">{t('portfolio.coming.desc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
