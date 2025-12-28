import { createContext, useContext, useState, useEffect } from 'react';
import data from '../data.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const changeLanguage = (lang) => {
    if (lang === 'es' || lang === 'en') {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = data[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value;
  };

  const value = {
    language,
    changeLanguage,
    t,
    currentLanguageData: data[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
