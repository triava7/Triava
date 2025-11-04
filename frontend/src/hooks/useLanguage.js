import { useState, useEffect } from 'react';
import { i18n } from '../i18n';

export const useLanguage = () => {
  const [language, setLanguage] = useState(i18n.getCurrentLanguage());

  useEffect(() => {
    const handleLanguageChange = (event) => {
      setLanguage(event.detail.lang);
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    i18n.setLanguage(newLang);
  };

  const t = (key) => i18n.t(key);

  return { language, toggleLanguage, t };
};