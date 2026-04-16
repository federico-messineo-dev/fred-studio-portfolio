import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface Translations {
  [key: string]: {
    it: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navbar
  'nav.home': { it: 'Home', en: 'Home' },
  'nav.about': { it: 'Chi Sono', en: 'About' },
  'nav.services': { it: 'Servizi', en: 'Services' },
  'nav.portfolio': { it: 'Portfolio', en: 'Portfolio' },
  'nav.contact': { it: 'Contatti', en: 'Contact' },
  
  // Footer
  'footer.rights': { it: 'Tutti i diritti riservati.', en: 'All rights reserved.' },
  'footer.location': { it: 'Roma, Italia / Remoto', en: 'Rome, Italy / Remote' },
  
  // Home
  'home.hero.tag': { it: 'PRONTO_PER_IL_DEPLOY_2026', en: 'READY_FOR_DEPLOYMENT_2026' },
  'home.hero.title1': { it: 'Sviluppatore.', en: 'Developer.' },
  'home.hero.title2': { it: 'Builder.', en: 'Builder.' },
  'home.hero.title3': { it: 'Automazione AI.', en: 'AI Automation.' },
  'home.hero.desc': { it: 'Trasformo idee in prodotti digitali. Siti web, automazioni intelligenti e consulenza IT — tutto quello che ti serve per competere online.', en: 'I transform ideas into digital products. Websites, intelligent automations, and IT consulting — everything you need to compete online.' },
  'home.hero.cta.wa': { it: 'Scrivimi su WhatsApp', en: 'Message me on WhatsApp' },
  'home.hero.cta.services': { it: 'Scopri i servizi', en: 'Discover services' },
  'home.values.v1.title': { it: 'Precisione Tecnica', en: 'Technical Precision' },
  'home.values.v1.desc': { it: 'Ogni riga di codice è scritta per durare. Architetture pulite, scalabili e documentate.', en: 'Every line of code is written to last. Clean, scalable, and documented architectures.' },
  'home.values.v2.title': { it: 'Sicurezza Integrata', en: 'Integrated Security' },
  'home.values.v2.desc': { it: 'La protezione dei dati non è un optional. Protocolli avanzati in ogni fase.', en: 'Data protection is not optional. Advanced protocols at every stage.' },
  'home.values.v3.title': { it: 'Innovazione AI', en: 'AI Innovation' },
  'home.values.v3.desc': { it: 'Integro le ultime tecnologie AI per dare un vantaggio competitivo reale.', en: 'I integrate the latest AI technologies to provide a real competitive edge.' },
  'home.method.tag': { it: 'IL_MIO_METODO', en: 'MY_METHOD' },
  'home.method.title': { it: 'Dal concetto al lancio.', en: 'From concept to launch.' },
  'home.method.cta': { it: 'Vedi i lavori', en: 'View works' },
  'home.about.tag': { it: 'CHI_SONO', en: 'ABOUT_ME' },
  'home.about.title': { it: 'Ingegneria digitale, visione umana.', en: 'Digital engineering, human vision.' },
  'home.about.desc': { it: 'Sono Federico, un consulente tecnologico specializzato nel colmare il divario tra complessità tecnica e obiettivi di business.', en: 'I am Federico, a tech consultant specialized in bridging the gap between technical complexity and business goals.' },
  'home.about.cta': { it: 'Scopri di più su di me', en: 'Learn more about me' },

  // About
  'about.intro.trusted': { it: 'SCELTO DA INNOVATORI', en: 'TRUSTED BY INNOVATORS' },
  'about.intro.p1': { it: 'Sono Federico, un consulente tecnologico specializzato nel colmare il divario tra complessità tecnica e obiettivi di business. La mia missione è rendere la tecnologia un alleato, non un ostacolo.', en: 'I am Federico, a tech consultant specialized in bridging the gap between technical complexity and business goals. My mission is to make technology an ally, not an obstacle.' },
  'about.intro.p2': { it: 'Con un background solido nello sviluppo full-stack e una passione viscerale per l\'automazione, ho aiutato decine di startup e aziende consolidate a ottimizzare i propri processi.', en: 'With a solid background in full-stack development and a visceral passion for automation, I have helped dozens of startups and established companies optimize their processes.' },
  'about.intro.tag1': { it: '6+ ANNI DI ESPERIENZA', en: '6+ YEARS OF EXPERIENCE' },
  'about.skills.tag': { it: 'COMPETENZE_TECNICHE', en: 'TECHNICAL_SKILLS' },
  'about.skills.title': { it: 'Il mio stack tecnologico.', en: 'My tech stack.' },
  'about.exp.tag': { it: 'PERCORSO_PROFESSIONALE', en: 'PROFESSIONAL_PATH' },
  'about.exp.title': { it: 'Percorso Professionale.', en: 'Professional Path.' },
  'about.exp.v1.role': { it: 'Full Stack Developer', en: 'Full Stack Developer' },
  'about.exp.v1.desc': { it: 'Sviluppo di piattaforme web scalabili e integrazione di sistemi legacy.', en: 'Development of scalable web platforms and integration of legacy systems.' },
  'about.exp.v2.role': { it: 'Supporto PMO', en: 'PMO Support' },
  'about.exp.v2.desc': { it: 'Coordinamento tecnico e gestione dei flussi di lavoro per progetti IT complessi.', en: 'Technical coordination and workflow management for complex IT projects.' },
  'about.exp.v3.role': { it: 'Senior Tech Consultant & AI Builder', en: 'Senior Tech Consultant & AI Builder' },
  'about.exp.v3.desc': { it: 'Progettazione di architetture AI-first e automazione dei processi aziendali.', en: 'Design of AI-first architectures and automation of business processes' },
  'about.skills.s1.title': { it: 'Frontend', en: 'Frontend' },
  'about.skills.s2.title': { it: 'Backend', en: 'Backend' },
  'about.skills.s3.title': { it: 'AI & Automazione', en: 'AI & Automation' },
  'about.skills.s4.title': { it: 'Enterprise', en: 'Enterprise' },
  'about.exp.v1.company': { it: 'Tech Solutions Hub', en: 'Tech Solutions Hub' },
  'about.exp.v2.company': { it: 'Project Management Office', en: 'Project Management Office' },
  'about.exp.v3.company': { it: 'Freelance / Consulenza Strategica', en: 'Freelance / Strategic Consulting' },
  'about.exp.v3.year': { it: '2026 - Presente', en: '2026 - Present' },

  // Services
  'services.hero.tag': { it: 'COSA_FACCIO', en: 'WHAT_I_DO' },
  'services.hero.title': { it: 'Soluzioni custom.', en: 'Custom solutions.' },
  'services.hero.desc': { it: 'Offro un set completo di servizi tecnologici per coprire ogni aspetto della tua presenza digitale.', en: 'I offer a complete set of tech services to cover every aspect of your digital presence.' },
  'services.s1.title': { it: 'Siti Web Vetrina', en: 'Showcase Websites' },
  'services.s1.desc': { it: 'Presenza online ad alte prestazioni. SEO-friendly e ultraveloci.', en: 'High-performance online presence. SEO-friendly and ultra-fast.' },
  'services.s2.title': { it: 'Automazioni AI', en: 'AI Automations' },
  'services.s2.desc': { it: 'Elimina i compiti ripetitivi. Collega i tuoi strumenti con l\'AI.', en: 'Eliminate repetitive tasks. Connect your tools with AI.' },
  'services.s3.title': { it: 'Consulenza IT', en: 'IT Consulting' },
  'services.s3.desc': { it: 'Analisi dei processi e supporto tecnico per scalare la tua infrastruttura.', en: 'Process analysis and technical support to scale your infrastructure.' },
  'services.s1.f1': { it: 'Design Esclusivo', en: 'Exclusive Design' },
  'services.s1.f2': { it: 'Ottimizzazione SEO', en: 'SEO Optimization' },
  'services.s1.f3': { it: 'Ottimizzazione GEO (AI)', en: 'GEO Optimization (AI)' },
  'services.s1.f4': { it: 'Mobile First', en: 'Mobile First' },
  'services.s2.f1': { it: 'Workflow n8n', en: 'n8n Workflows' },
  'services.s2.f2': { it: 'Integrazione LLM', en: 'LLM Integration' },
  'services.s2.f3': { it: 'Chatbot Custom', en: 'Custom Chatbots' },
  'services.s2.f4': { it: 'Data Extraction', en: 'Data Extraction' },
  'services.s3.f1': { it: 'Audit Tecnico', en: 'Technical Audit' },
  'services.s3.f2': { it: 'Cloud Migration', en: 'Cloud Migration' },
  'services.s3.f3': { it: 'Software Architecture', en: 'Software Architecture' },
  'services.s3.f4': { it: 'Security Check', en: 'Security Check' },
  'services.workflow.tag': { it: 'WORKFLOW', en: 'WORKFLOW' },
  'services.workflow.title': { it: 'Come lavoriamo insieme.', en: 'How we work together.' },
  'services.cta.title': { it: 'Pronto a scalare il tuo business?', en: 'Ready to scale your business?' },
  'services.cta.btn': { it: 'Inizia ora', en: 'Start now' },

  // Portfolio
  'portfolio.hero.tag': { it: 'ARCHIVIO_PROGETTI', en: 'PROJECT_ARCHIVE' },
  'portfolio.hero.title': { it: 'Lavoro selezionato.', en: 'Selected work.' },
  'portfolio.hero.showing': { it: 'MOSTRANDO 4 DI 12 PROGETTI', en: 'SHOWING 4 OF 12 PROJECTS' },
  'portfolio.p1.tags': { it: 'Brand Design / Sviluppo Web / Integrazione CMS', en: 'Brand Design / Web Development / CMS Integration' },
  'portfolio.p2.tags': { it: 'Automazione AI / Dashboard / Tracciamento Real-time', en: 'AI Automation / Dashboard / Real-time Tracking' },
  'portfolio.p3.tags': { it: 'Web3 / React / Visualizzazione Dati', en: 'Web3 / React / Data Visualization' },
  'portfolio.p4.tags': { it: 'IoT / App Mobile / Automazione', en: 'IoT / Mobile App / Automation' },
  'portfolio.test.tag': { it: 'TESTIMONIANZE', en: 'TESTIMONIALS' },
  'portfolio.test.title': { it: 'Cosa dicono i clienti.', en: 'What clients say.' },
  'portfolio.test.t1.text': { it: 'Federico ha trasformato il nostro modo di lavorare. L\'automazione AI che ha implementato ci fa risparmiare circa 20 ore a settimana.', en: 'Federico transformed the way we work. The AI automation he implemented saves us about 20 hours a week.' },
  'portfolio.test.t2.text': { it: 'Il sito web è incredibile. Non solo è bellissimo, ma le performance sono fuori dal comune. Abbiamo raddoppiato le conversioni.', en: 'The website is incredible. Not only is it beautiful, but the performance is out of this world. We doubled our conversions.' },
  'portfolio.test.t3.text': { it: 'Un professionista raro. Capisce subito le esigenze di business e le traduce in soluzioni tecniche impeccabili.', en: 'A rare professional. He immediately understands business needs and translates them into impeccable technical solutions.' },
  'portfolio.coming': { it: '[ NUOVI PROGETTI IN ARRIVO ]', en: '[ NEW PROJECTS COMING SOON ]' },
  'portfolio.coming.desc': { it: 'Aggiornamento settimanale dell\'archivio', en: 'Weekly archive update' },

  // Contact
  'contact.hero.tag': { it: 'DISPONIBILITÀ', en: 'AVAILABILITY' },
  'contact.hero.title': { it: 'Parliamoci', en: 'Let\'s talk' },
  'contact.hero.desc': { it: 'Hai un progetto in mente? Scrivimi — rispondo entro 24 ore.', en: 'Have a project in mind? Write to me — I respond within 24 hours.' },
  'contact.form.name': { it: 'Nome', en: 'Name' },
  'contact.form.subject': { it: 'Oggetto', en: 'Subject' },
  'contact.form.msg': { it: 'Messaggio', en: 'Message' },
  'contact.form.placeholder.name': { it: '[ inserisci nome... ]', en: '[ enter name... ]' },
  'contact.form.placeholder.subject': { it: '[ seleziona oggetto... ]', en: '[ select subject... ]' },
  'contact.form.placeholder.msg': { it: '[ descrivi il tuo progetto... ]', en: '[ describe your project... ]' },
  'contact.form.btn': { it: 'INVIA_COMANDO', en: 'SEND_COMMAND' },
  'contact.faq.tag': { it: 'FAQ', en: 'FAQ' },
  'contact.faq.title': { it: 'Domande frequenti.', en: 'Frequently asked questions.' },
  'contact.wa.tag': { it: 'CONTATTO DIRETTO', en: 'DIRECT CONTACT' },
  'contact.wa.label': { it: 'WhatsApp', en: 'WhatsApp' },
  'contact.faq.q1': { it: 'Quanto tempo ci vuole per un sito web?', en: 'How long does a website take?' },
  'contact.faq.a1': { it: 'Dipende dalla complessità, ma mediamente una landing page richiede 1-2 settimane, mentre un sito multipagina 3-5 settimane.', en: 'It depends on complexity, but on average a landing page takes 1-2 weeks, while a multi-page site takes 3-5 weeks.' },
  'contact.faq.q2': { it: 'Ti occupi anche di manutenzione?', en: 'Do you also handle maintenance?' },
  'contact.faq.a2': { it: 'Certamente. Offro pacchetti di manutenzione mensile per garantire che il tuo sito sia sempre aggiornato e sicuro.', en: 'Certainly. I offer monthly maintenance packages to ensure your site is always up-to-date and secure.' },
  'contact.faq.q3': { it: 'Lavori con clienti internazionali?', en: 'Do you work with international clients?' },
  'contact.faq.a3': { it: 'Sì, parlo correntemente inglese e ho gestito progetti per clienti in tutta Europa e negli Stati Uniti.', en: 'Yes, I am fluent in English and have managed projects for clients across Europe and the United States.' },
  'contact.faq.q4': { it: 'Quali sono i costi medi?', en: 'What are the average costs?' },
  'contact.faq.a4': { it: 'Ogni progetto è unico. Dopo la chiamata conoscitiva, riceverai un preventivo dettagliato basato sulle tue specifiche esigenze.', en: 'Every project is unique. After the discovery call, you will receive a detailed quote based on your specific needs.' },
  'contact.info.title': { it: 'TEMPI_DI_RISPOSTA', en: 'RESPONSE_TIME' },
  'contact.info.desc': { it: 'Solitamente rispondo a tutte le richieste entro 24 ore lavorative. Se hai un\'urgenza, specifica [URGENTE] nell\'oggetto del messaggio.', en: 'I usually respond to all requests within 24 business hours. If you have an emergency, specify [URGENT] in the message subject.' },
  'footer.desc': { it: 'Sviluppo soluzioni digitali all\'avanguardia che fondono estetica, intelligenza artificiale e performance estreme.', en: 'Developing cutting-edge digital solutions that blend aesthetics, artificial intelligence, and extreme performance.' },
  'footer.links': { it: 'NAVIGAZIONE', en: 'NAVIGATION' },
  'services.workflow.discovery.title': { it: 'Discovery', en: 'Discovery' },
  'services.workflow.discovery.desc': { it: 'Chiamata conoscitiva per definire perimetro e obiettivi.', en: 'Discovery call to define scope and goals.' },
  'services.workflow.strategy.title': { it: 'Strategy', en: 'Strategy' },
  'services.workflow.strategy.desc': { it: 'Creazione di un piano d\'azione dettagliato e preventivo.', en: 'Creation of a detailed action plan and quote.' },
  'services.workflow.execution.title': { it: 'Execution', en: 'Execution' },
  'services.workflow.execution.desc': { it: 'Sviluppo iterativo con aggiornamenti settimanali.', en: 'Iterative development with weekly updates.' },
  'services.workflow.launch.title': { it: 'Launch', en: 'Launch' },
  'services.workflow.launch.desc': { it: 'Consegna finale, training e supporto continuo.', en: 'Final delivery, training, and ongoing support.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
