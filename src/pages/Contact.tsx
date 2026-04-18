import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Send, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const subjectOptions = [
    { value: 'info', labelIt: 'Informazioni', labelEn: 'Information' },
    { value: 'preventivo', labelIt: 'Richiesta preventivo', labelEn: 'Quote request' },
    { value: 'collaborazione', labelIt: 'Collaborazione', labelEn: 'Collaboration' },
    { value: 'supporto', labelIt: 'Supporto tecnico', labelEn: 'Technical support' },
    { value: 'altro', labelIt: 'Altro', labelEn: 'Other' }
  ];

  const faqs = [
    { q: t('contact.faq.q1'), a: t('contact.faq.a1') },
    { q: t('contact.faq.q2'), a: t('contact.faq.a2') },
    { q: t('contact.faq.q3'), a: t('contact.faq.a3') },
    { q: t('contact.faq.q4'), a: t('contact.faq.a4') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedSubject = subjectOptions.find(opt => opt.value === formState.subject);
    const subjectLabel = selectedSubject ? (language === 'it' ? selectedSubject.labelIt : selectedSubject.labelEn) : formState.subject;
    const subject = `${subjectLabel} - ${formState.name}`;
    const body = `${t('contact.form.name')}: ${formState.name}\n\n${t('contact.form.msg')}:\n${formState.message}`;
    window.location.href = `mailto:fredstudio.digital@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex flex-col">
      {/* Contact Main Section */}
      <section className="py-32 px-6 md:px-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('contact.hero.tag')}</span>
              <h2 className="font-display font-black text-5xl md:text-8xl tracking-tighter mb-8 italic">{t('contact.hero.title')}</h2>
              <p className="text-white/60 text-xl mb-12 max-w-md leading-relaxed">
                {t('contact.hero.desc')}
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: <Mail size={20} />, label: "Email", val: "fredstudio.digital@gmail.com" },
                  { icon: <Phone size={20} />, label: "Telefono", val: "+39 370 105 3179" },
                  { icon: <MapPin size={20} />, label: "Sede", val: "Roma, Italia / Remoto" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 text-white/60"
                  >
                    <div className="text-brand">{item.icon}</div>
                    <span className="font-mono text-xs uppercase tracking-widest w-20">{item.label}:</span>
                    <span className="text-white font-medium">{item.val}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a 
                href="https://wa.me/393701053179" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-6 p-6 bg-brand/5 border border-brand/20 hover:bg-brand/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-brand tracking-widest">{t('contact.wa.tag')}</div>
                  <div className="font-display font-bold text-xl uppercase">{t('contact.wa.label')}</div>
                </div>
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-surface-muted p-10 border border-white/5"
            >
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="group">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2 transition-colors group-focus-within:text-brand">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder={t('contact.form.placeholder.name')}
                    className="w-full bg-transparent border-0 border-b border-white/20 py-3 px-0 focus:ring-0 focus:border-brand transition-all text-white placeholder:text-white/10 font-mono text-sm"
                  />
                </div>
                <div className="group">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2 transition-colors group-focus-within:text-brand">{t('contact.form.subject')}</label>
                  <div className="relative">
                    <select 
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full bg-transparent border-0 border-b border-white/20 py-3 px-0 focus:ring-0 focus:border-brand transition-all text-white font-mono text-sm appearance-none cursor-pointer"
                      style={{ backgroundImage: 'none' }}
                    >
                      <option value="" disabled className="bg-surface-muted text-white/40">{t('contact.form.placeholder.subject')}</option>
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-surface-muted text-white">
                          {language === 'it' ? option.labelIt : option.labelEn}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown size={16} className="text-white/40" />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2 transition-colors group-focus-within:text-brand">{t('contact.form.msg')}</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder={t('contact.form.placeholder.msg')}
                    className="w-full bg-transparent border-0 border-b border-white/20 py-3 px-0 focus:ring-0 focus:border-brand transition-all text-white placeholder:text-white/10 font-mono text-sm resize-none"
                  />
                </div>
                <button type="submit" className="w-full bg-brand text-black font-mono font-bold py-5 tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3">
                  {t('contact.form.btn')} <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - ALT BG */}
      <section className="py-32 px-6 md:px-24 border-y border-white/5 bg-surface-muted">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">&gt; {t('contact.faq.tag')}</span>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter">{t('contact.faq.title')}</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 bg-surface">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`text-brand transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6 text-white/60 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
