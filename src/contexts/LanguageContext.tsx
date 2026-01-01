import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'uz' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'I build modern, fast and scalable web experiences.',
    'hero.tagline': 'Full-Stack Developer | React | Next.js | Node.js',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact Me',
    'hero.available': 'Available for work',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Crafting digital experiences with precision and passion',
    'about.description': 'I\'m a full-stack developer with 4+ years of experience building scalable web applications. I specialize in creating seamless user experiences using modern technologies like React, Next.js, and Node.js.',
    'about.philosophy': 'My philosophy is simple: write clean code, design intuitive interfaces, and deliver solutions that exceed expectations. I believe in continuous learning and staying ahead of the curve in this ever-evolving tech landscape.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    'about.technologies': 'Technologies',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of my recent work',
    'projects.view': 'View Project',
    'projects.code': 'Source Code',
    'projects.all': 'View All Projects',
    
    // Project descriptions
    'project.ecommerce.title': 'E-Commerce Platform',
    'project.ecommerce.desc': 'A full-featured online shopping platform with real-time inventory, secure payments, and an intuitive admin dashboard.',
    'project.taskflow.title': 'TaskFlow Pro',
    'project.taskflow.desc': 'A collaborative project management tool with real-time updates, team chat, and advanced analytics for productivity tracking.',
    'project.analytics.title': 'Analytics Dashboard',
    'project.analytics.desc': 'An interactive data visualization platform with customizable widgets, real-time updates, and comprehensive reporting features.',
    'project.social.title': 'Social Connect',
    'project.social.desc': 'A modern social networking app with real-time messaging, content sharing, and AI-powered content recommendations.',
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'Technologies I work with',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.tools': 'Tools & Platforms',
    
    // Contact
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Have a project in mind? I\'d love to hear about it.',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.info': 'Contact Information',
    'contact.location': 'Tashkent, Uzbekistan',
    'contact.available': 'Available for freelance projects',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with passion and',
  },
  ru: {
    // Navbar
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.skills': 'Навыки',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.headline': 'Создаю современные, быстрые и масштабируемые веб-решения.',
    'hero.tagline': 'Full-Stack Разработчик | React | Next.js | Node.js',
    'hero.cta.projects': 'Мои проекты',
    'hero.cta.contact': 'Связаться',
    'hero.available': 'Открыт для работы',
    
    // About
    'about.title': 'Обо мне',
    'about.subtitle': 'Создаю цифровые продукты с точностью и страстью',
    'about.description': 'Я full-stack разработчик с более чем 4-летним опытом создания масштабируемых веб-приложений. Специализируюсь на создании бесшовного пользовательского опыта с использованием современных технологий: React, Next.js и Node.js.',
    'about.philosophy': 'Моя философия проста: писать чистый код, создавать интуитивные интерфейсы и предоставлять решения, превосходящие ожидания. Верю в постоянное обучение и стремлюсь быть впереди в постоянно развивающемся мире технологий.',
    'about.experience': 'Лет опыта',
    'about.projects': 'Завершённых проектов',
    'about.clients': 'Довольных клиентов',
    'about.technologies': 'Технологий',
    
    // Projects
    'projects.title': 'Избранные проекты',
    'projects.subtitle': 'Подборка моих недавних работ',
    'projects.view': 'Смотреть проект',
    'projects.code': 'Исходный код',
    'projects.all': 'Все проекты',
    
    // Project descriptions
    'project.ecommerce.title': 'E-Commerce платформа',
    'project.ecommerce.desc': 'Полнофункциональная платформа онлайн-торговли с управлением складом в реальном времени, безопасными платежами и интуитивной админ-панелью.',
    'project.taskflow.title': 'TaskFlow Pro',
    'project.taskflow.desc': 'Инструмент для совместного управления проектами с обновлениями в реальном времени, командным чатом и продвинутой аналитикой.',
    'project.analytics.title': 'Аналитическая панель',
    'project.analytics.desc': 'Интерактивная платформа визуализации данных с настраиваемыми виджетами, обновлениями в реальном времени и комплексной отчётностью.',
    'project.social.title': 'Social Connect',
    'project.social.desc': 'Современное социальное приложение с мгновенными сообщениями, обменом контентом и AI-рекомендациями.',
    
    // Skills
    'skills.title': 'Навыки и экспертиза',
    'skills.subtitle': 'Технологии, с которыми я работаю',
    'skills.frontend': 'Frontend разработка',
    'skills.backend': 'Backend разработка',
    'skills.tools': 'Инструменты и платформы',
    
    // Contact
    'contact.title': 'Давайте работать вместе',
    'contact.subtitle': 'Есть проект? Буду рад обсудить.',
    'contact.name': 'Ваше имя',
    'contact.email': 'Ваш email',
    'contact.message': 'Ваше сообщение',
    'contact.send': 'Отправить',
    'contact.sending': 'Отправка...',
    'contact.success': 'Сообщение отправлено!',
    'contact.info': 'Контактная информация',
    'contact.location': 'Ташкент, Узбекистан',
    'contact.available': 'Доступен для фриланс-проектов',
    
    // Footer
    'footer.rights': 'Все права защищены.',
    'footer.built': 'Создано с любовью и',
  },
  uz: {
    // Navbar
    'nav.about': 'Men haqimda',
    'nav.projects': 'Loyihalar',
    'nav.skills': 'Ko\'nikmalar',
    'nav.contact': 'Aloqa',
    
    // Hero
    'hero.headline': 'Zamonaviy, tez va kengaytiriladigan veb tajribalarni yarataman.',
    'hero.tagline': 'Full-Stack Dasturchi | React | Next.js | Node.js',
    'hero.cta.projects': 'Loyihalarni ko\'rish',
    'hero.cta.contact': 'Bog\'lanish',
    'hero.available': 'Ishga tayyor',
    
    // About
    'about.title': 'Men haqimda',
    'about.subtitle': 'Aniqlik va ishtiyoq bilan raqamli tajribalar yarataman',
    'about.description': 'Men 4+ yillik tajribaga ega full-stack dasturchiman. React, Next.js va Node.js kabi zamonaviy texnologiyalar yordamida kengaytiriladigan veb-ilovalar yaratishga ixtisoslashganman.',
    'about.philosophy': 'Mening falsafam oddiy: toza kod yozish, intuitiv interfeyslar yaratish va kutilganidan oshib ketadigan yechimlar taqdim etish. Doimo o\'rganishga va texnologiya olamida oldinda bo\'lishga intilaman.',
    'about.experience': 'Yillik tajriba',
    'about.projects': 'Tugallangan loyihalar',
    'about.clients': 'Mamnun mijozlar',
    'about.technologies': 'Texnologiyalar',
    
    // Projects
    'projects.title': 'Tanlangan loyihalar',
    'projects.subtitle': 'So\'nggi ishlarimdan namunalar',
    'projects.view': 'Loyihani ko\'rish',
    'projects.code': 'Manba kodi',
    'projects.all': 'Barcha loyihalar',
    
    // Project descriptions
    'project.ecommerce.title': 'E-Tijorat platformasi',
    'project.ecommerce.desc': 'Real vaqtda ombor boshqaruvi, xavfsiz to\'lovlar va intuitiv admin paneli bilan to\'liq onlayn savdo platformasi.',
    'project.taskflow.title': 'TaskFlow Pro',
    'project.taskflow.desc': 'Real vaqtda yangilanishlar, jamoa chat va rivojlangan tahlillar bilan hamkorlikdagi loyiha boshqaruv vositasi.',
    'project.analytics.title': 'Tahliliy panel',
    'project.analytics.desc': 'Moslashtirilgan vidjetlar, real vaqt yangilanishlari va keng qamrovli hisobotlar bilan interaktiv ma\'lumotlarni vizualizatsiya platformasi.',
    'project.social.title': 'Social Connect',
    'project.social.desc': 'Real vaqtda xabar almashish, kontent ulashish va AI tavsiyalari bilan zamonaviy ijtimoiy tarmoq ilovasi.',
    
    // Skills
    'skills.title': 'Ko\'nikmalar va tajriba',
    'skills.subtitle': 'Men ishlaydigan texnologiyalar',
    'skills.frontend': 'Frontend dasturlash',
    'skills.backend': 'Backend dasturlash',
    'skills.tools': 'Asboblar va platformalar',
    
    // Contact
    'contact.title': 'Keling, birga ishlaymiz',
    'contact.subtitle': 'Loyihangiz bormi? Eshitishni xohlayman.',
    'contact.name': 'Ismingiz',
    'contact.email': 'Elektron pochtangiz',
    'contact.message': 'Xabaringiz',
    'contact.send': 'Yuborish',
    'contact.sending': 'Yuborilmoqda...',
    'contact.success': 'Xabar muvaffaqiyatli yuborildi!',
    'contact.info': 'Aloqa ma\'lumotlari',
    'contact.location': 'Toshkent, O\'zbekiston',
    'contact.available': 'Freelance loyihalar uchun tayyor',
    
    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan.',
    'footer.built': 'Sevgi va',
  },
  tr: {
    // Navbar
    'nav.about': 'Hakkımda',
    'nav.projects': 'Projeler',
    'nav.skills': 'Yetenekler',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.headline': 'Modern, hızlı ve ölçeklenebilir web deneyimleri oluşturuyorum.',
    'hero.tagline': 'Full-Stack Geliştirici | React | Next.js | Node.js',
    'hero.cta.projects': 'Projeleri Gör',
    'hero.cta.contact': 'İletişime Geç',
    'hero.available': 'İş için müsait',
    
    // About
    'about.title': 'Hakkımda',
    'about.subtitle': 'Hassasiyet ve tutkuyla dijital deneyimler yaratıyorum',
    'about.description': '4+ yıllık deneyime sahip full-stack geliştiriciyim. React, Next.js ve Node.js gibi modern teknolojiler kullanarak ölçeklenebilir web uygulamaları oluşturmada uzmanlaşıyorum.',
    'about.philosophy': 'Felsefem basit: temiz kod yazmak, sezgisel arayüzler tasarlamak ve beklentileri aşan çözümler sunmak. Sürekli öğrenmeye ve bu sürekli gelişen teknoloji dünyasında öncü olmaya inanıyorum.',
    'about.experience': 'Yıl Deneyim',
    'about.projects': 'Tamamlanan Proje',
    'about.clients': 'Mutlu Müşteri',
    'about.technologies': 'Teknoloji',
    
    // Projects
    'projects.title': 'Öne Çıkan Projeler',
    'projects.subtitle': 'Son çalışmalarımdan bir seçki',
    'projects.view': 'Projeyi Gör',
    'projects.code': 'Kaynak Kodu',
    'projects.all': 'Tüm Projeler',
    
    // Project descriptions
    'project.ecommerce.title': 'E-Ticaret Platformu',
    'project.ecommerce.desc': 'Gerçek zamanlı envanter yönetimi, güvenli ödemeler ve sezgisel yönetici paneli ile tam özellikli çevrimiçi alışveriş platformu.',
    'project.taskflow.title': 'TaskFlow Pro',
    'project.taskflow.desc': 'Gerçek zamanlı güncellemeler, takım sohbeti ve gelişmiş analitik ile işbirlikçi proje yönetim aracı.',
    'project.analytics.title': 'Analitik Paneli',
    'project.analytics.desc': 'Özelleştirilebilir widget\'lar, gerçek zamanlı güncellemeler ve kapsamlı raporlama özellikleri ile etkileşimli veri görselleştirme platformu.',
    'project.social.title': 'Social Connect',
    'project.social.desc': 'Gerçek zamanlı mesajlaşma, içerik paylaşımı ve AI destekli önerilerle modern sosyal ağ uygulaması.',
    
    // Skills
    'skills.title': 'Yetenekler ve Uzmanlık',
    'skills.subtitle': 'Çalıştığım teknolojiler',
    'skills.frontend': 'Frontend Geliştirme',
    'skills.backend': 'Backend Geliştirme',
    'skills.tools': 'Araçlar ve Platformlar',
    
    // Contact
    'contact.title': 'Birlikte Çalışalım',
    'contact.subtitle': 'Bir projeniz mi var? Duymak isterim.',
    'contact.name': 'Adınız',
    'contact.email': 'E-posta Adresiniz',
    'contact.message': 'Mesajınız',
    'contact.send': 'Mesaj Gönder',
    'contact.sending': 'Gönderiliyor...',
    'contact.success': 'Mesaj başarıyla gönderildi!',
    'contact.info': 'İletişim Bilgileri',
    'contact.location': 'Taşkent, Özbekistan',
    'contact.available': 'Freelance projeler için müsait',
    
    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.built': 'Tutku ve',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
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
