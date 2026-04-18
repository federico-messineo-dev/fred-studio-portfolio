import React from 'react';
import { motion } from 'motion/react';
import { Globe, Cpu, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Main Services Section */}
      <section className="py-32 px-6 md:px-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('services.hero.tag')}</span>
            <h2 className="font-display font-black text-4xl md:text-7xl tracking-tighter">{t('services.hero.title')}</h2>
            <p className="text-white/60 text-xl max-w-2xl mt-8 leading-relaxed">
              {t('services.hero.desc')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('services.s1.title'),
                desc: t('services.s1.desc'),
                icon: <Globe className="text-brand" size={32} />,
                features: [t('services.s1.f1'), t('services.s1.f2'), t('services.s1.f3'), t('services.s1.f4')]
              },
              {
                title: t('services.s2.title'),
                desc: t('services.s2.desc'),
                icon: <Cpu className="text-brand" size={32} />,
                features: [t('services.s2.f1'), t('services.s2.f2'), t('services.s2.f3'), t('services.s2.f4')]
              },
              {
                title: t('services.s3.title'),
                desc: t('services.s3.desc'),
                icon: <Terminal className="text-brand" size={32} />,
                features: [t('services.s3.f1'), t('services.s3.f2'), t('services.s3.f3'), t('services.s3.f4')]
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-surface-muted p-10 relative overflow-hidden transition-all hover:bg-surface-bright border border-white/5"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <div className="mb-8 group-hover:rotate-12 transition-transform duration-500">{service.icon}</div>
                <h3 className="font-display font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed text-sm">{service.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-mono text-white/40">
                      <CheckCircle2 size={14} className="text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section - ALT BG */}
      <section className="py-32 px-6 md:px-24 border-y border-white/5 bg-surface-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('services.workflow.tag')}</span>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter">{t('services.workflow.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />
            
            {[
              { title: t('services.workflow.discovery.title'), desc: t('services.workflow.discovery.desc') },
              { title: t('services.workflow.strategy.title'), desc: t('services.workflow.strategy.desc') },
              { title: t('services.workflow.execution.title'), desc: t('services.workflow.execution.desc') },
              { title: t('services.workflow.launch.title'), desc: t('services.workflow.launch.desc') }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-surface border border-brand/20 flex items-center justify-center font-display font-black text-2xl text-brand mb-6 group hover:bg-brand hover:text-black transition-colors duration-300">
                  {i + 1}
                </div>
                <h3 className="font-display font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl md:text-7xl tracking-tighter mb-12">{t('services.cta.title')}</h2>
          <a 
            href="mailto:fredstudio.digital@gmail.com" 
            className="inline-flex items-center gap-4 bg-brand text-black font-mono font-bold px-12 py-6 text-lg hover:scale-105 transition-all"
          >
            {t('services.cta.btn')} <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
