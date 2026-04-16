import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Zap, Target, Shield, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import RubiksCube from '../components/RubiksCube';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
          {/* Colonna sinistra: testo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-brand text-sm mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand" />
              <span>{t('home.hero.tag')}</span>
            </div>
            
            <h1 className="font-display font-black text-6xl md:text-9xl leading-[0.9] tracking-tighter mb-8">
              {t('home.hero.title1')}<br />
              {t('home.hero.title2')}<br />
              <span className="text-outline">{t('home.hero.title3')}</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              {t('home.hero.desc')}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="https://wa.me/393701053179" 
                className="group relative bg-brand text-black font-mono font-bold px-8 py-4 flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
              >
                <MessageSquare size={18} />
                {t('home.hero.cta.wa')}
              </a>
              <Link 
                to="/servizi" 
                className="group border border-white/20 text-white font-mono font-bold px-8 py-4 flex items-center justify-center gap-3 hover:border-brand transition-colors"
              >
                <Zap size={18} />
                {t('home.hero.cta.services')}
              </Link>
            </div>
          </motion.div>

          {/* Colonna destra: Cubo di Rubik */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full flex justify-end md:pr-16"
            style={{ height: 'clamp(280px, 45vw, 520px)' }}
          >
            <div className="w-full max-w-md transform md:translate-x-6">
              <RubiksCube />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section - ALT BG */}
      <section className="py-32 px-6 md:px-24 bg-surface-muted border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: t('home.values.v1.title'),
                desc: t('home.values.v1.desc'),
                icon: <Target className="text-brand" size={40} />
              },
              {
                title: t('home.values.v2.title'),
                desc: t('home.values.v2.desc'),
                icon: <Shield className="text-brand" size={40} />
              },
              {
                title: t('home.values.v3.title'),
                desc: t('home.values.v3.desc'),
                icon: <Rocket className="text-brand" size={40} />
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="flex flex-col gap-6"
              >
                <div className="bg-surface-bright w-20 h-20 flex items-center justify-center border border-white/10 group overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {value.icon}
                  </motion.div>
                </div>
                <h3 className="font-display font-bold text-2xl">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">
                &gt; {t('home.method.tag')}
              </span>
              <h2 className="font-display font-black text-4xl md:text-7xl tracking-tighter">
                {t('home.method.title')}
              </h2>
            </div>
            <Link 
              to="/portfolio" 
              className="text-brand font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
            >
              {t('home.method.cta')} <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: t('services.workflow.discovery.title'),  desc: t('services.workflow.discovery.desc') },
              { step: "02", title: t('services.workflow.strategy.title'),   desc: t('services.workflow.strategy.desc') },
              { step: "03", title: t('services.workflow.execution.title'),  desc: t('services.workflow.execution.desc') },
              { step: "04", title: t('services.workflow.launch.title'),     desc: t('services.workflow.launch.desc') }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 bg-surface-muted border border-white/5 group hover:border-brand/30 transition-colors"
              >
                <span className="font-mono text-brand/10 text-6xl font-black absolute top-4 right-4 group-hover:text-brand/20 transition-colors">
                  {item.step}
                </span>
                <h4 className="font-display font-bold text-xl mb-4 relative z-10">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary Section - ALT BG */}
      <section className="py-32 px-6 md:px-24 bg-surface-muted border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">
              &gt; {t('home.about.tag')}
            </span>
            <h2 className="font-display font-black text-4xl md:text-6xl mb-8 tracking-tighter">
              {t('home.about.title')}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              {t('home.about.desc')}
            </p>
            <Link 
              to="/chi-sono" 
              className="inline-flex items-center gap-3 text-brand font-mono text-xs uppercase tracking-widest hover:gap-5 transition-all"
            >
              {t('home.about.cta')} <ArrowRight size={14} />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-surface-bright border border-white/10 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80" 
              alt="Developer Workspace" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;