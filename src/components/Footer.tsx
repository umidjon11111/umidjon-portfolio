import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Umidjon. {t('footer.built')}</span>
            <Heart size={14} className="text-primary fill-primary" />
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              {t('nav.skills')}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
