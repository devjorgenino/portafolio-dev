import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export const LanguageSelector = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <Languages className="w-4 h-4" />
        <span className="text-xs font-medium uppercase">{language}</span>
      </button>
      
      {/* Mobile Dropdown */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 glass rounded-xl p-2 min-w-[100px] border border-primary/20 z-50"
        >
          <button
            onClick={() => handleLanguageChange('es')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              language === 'es' 
                ? 'bg-primary/20 text-primary' 
                : 'hover:bg-surface hover:text-foreground'
            }`}
          >
            {t('language.spanish')}
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              language === 'en' 
                ? 'bg-primary/20 text-primary' 
                : 'hover:bg-surface hover:text-foreground'
            }`}
          >
            {t('language.english')}
          </button>
        </div>
      )}

      {/* Desktop Dropdown */}
      <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="glass rounded-xl p-2 min-w-[120px] border border-primary/20">
          <button
            onClick={() => changeLanguage('es')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              language === 'es' 
                ? 'bg-primary/20 text-primary' 
                : 'hover:bg-surface hover:text-foreground'
            }`}
          >
            {t('language.spanish')}
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              language === 'en' 
                ? 'bg-primary/20 text-primary' 
                : 'hover:bg-surface hover:text-foreground'
            }`}
          >
            {t('language.english')}
          </button>
        </div>
      </div>
    </div>
  );
};
