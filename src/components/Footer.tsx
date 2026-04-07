import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface border-t border-white/5 pt-24 pb-12 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter mb-8 italic">
                FRED<span className="text-brand">.</span>STUDIO
              </h2>
              <p className="text-white/40 max-w-sm font-mono text-sm leading-relaxed">
                {t('footer.desc')}
              </p>
            </motion.div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-mono text-xs text-brand uppercase tracking-widest mb-8">&gt; {t('footer.links')}</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-white/60 hover:text-brand transition-colors font-display text-lg flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-mono text-xs text-brand uppercase tracking-widest mb-8">&gt; SOCIAL</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Github size={20} />, label: "GitHub", href: "#" },
                { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
                { icon: <MessageSquare size={20} />, label: "WhatsApp", href: "https://wa.me/393701053179" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 bg-surface-muted border border-white/5 flex items-center justify-center hover:bg-brand hover:text-black transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] text-white/20 tracking-widest uppercase">
          <div>© 2026 FRED.STUDIO — ALL_RIGHTS_RESERVED</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand transition-colors">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-brand transition-colors">TERMS_OF_SERVICE</a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            SYSTEM_STATUS: <span className="text-brand">OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
