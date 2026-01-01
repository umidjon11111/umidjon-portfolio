import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isLangMenuOpen && !(e.target as Element).closest(".lang-menu")) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isLangMenuOpen]);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const currentLang = languages.find((l) => l.code === language);

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setIsLangMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-2xl border-b border-border/60 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo with enhanced styling */}
          <a
            href="#"
            className="group  font-display text-2xl md:text-3xl font-black gradient-text transition-transform hover:scale-105"
          >
            <span className=" z-50">Umidjon</span>
            <span className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative px-4 lg:px-5 py-2.5 text-sm lg:text-base font-semibold text-muted-foreground hover:text-foreground transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/80 rounded-lg transition-all duration-300 scale-95 group-hover:scale-100"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-3/4 transition-all duration-300"></span>
              </button>
            ))}

            {/* Enhanced Language Switcher */}
            <div className="relative lang-menu ml-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangMenuOpen(!isLangMenuOpen);
                }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/50 hover:border-border transition-all duration-300 text-sm lg:text-base font-semibold shadow-sm hover:shadow-md group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  {currentLang?.flag}
                </span>
                <span className="text-foreground font-bold tracking-wide">
                  {currentLang?.code.toUpperCase()}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-muted-foreground transition-all duration-300 ${
                    isLangMenuOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-3 py-2 w-48 rounded-2xl bg-background/98 backdrop-blur-2xl border border-border/60 shadow-2xl shadow-black/10 animate-fade-up overflow-hidden">
                  {languages.map((lang, index) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm lg:text-base font-semibold transition-all duration-200 ${
                        language === lang.code
                          ? "bg-gradient-to-r from-primary/15 to-purple-500/15 text-primary border-l-4 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 border-l-4 border-transparent"
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="flex-1 text-left">{lang.name}</span>
                      {language === lang.code && (
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="ml-2 text-sm lg:text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              {t("hero.cta.contact")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Language Switcher */}
            <div className="relative lang-menu">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangMenuOpen(!isLangMenuOpen);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/60 border border-border/50 shadow-sm"
              >
                <span className="text-lg">{currentLang?.flag}</span>
                <ChevronDown
                  size={14}
                  className={`text-muted-foreground transition-transform ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 w-44 rounded-xl bg-background/98 backdrop-blur-2xl border border-border/60 shadow-xl animate-fade-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-all ${
                        language === lang.code
                          ? "bg-primary/10 text-primary border-l-4 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 border-l-4 border-transparent"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="flex-1 text-left">{lang.name}</span>
                      {language === lang.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="p-2.5 text-foreground hover:bg-secondary/60 rounded-lg transition-all duration-300 border border-border/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="relative text-muted-foreground hover:text-foreground transition-all duration-300 py-3 px-4 text-left font-semibold rounded-xl hover:bg-secondary/60 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-primary group-hover:w-1 transition-all duration-300 rounded-full"></span>
                </button>
              ))}
              <Button
                variant="hero"
                onClick={() => scrollToSection("#contact")}
                className="mt-4 font-bold shadow-lg shadow-primary/25"
              >
                {t("hero.cta.contact")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
