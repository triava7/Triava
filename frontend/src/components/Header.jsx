import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { Button } from './ui/button';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_services'), path: '/services' },
    { name: t('nav_portfolio'), path: '/portfolio' },
    { name: t('nav_faq'), path: '/faq' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">Triava</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-brand-primary bg-blue-50 dark:bg-blue-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-lg"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
            </Button>
            <Link to="/contact">
              <Button className="ml-2 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg">
                {t('cta_quote')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-lg"
            >
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t dark:border-slate-700">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-brand-primary bg-blue-50 dark:bg-blue-900/20'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4 bg-gradient-to-r from-brand-primary to-brand-neon-cyan hover:shadow-lg hover:shadow-brand-primary/30 text-white rounded-lg font-semibold">
                  {t('cta_quote')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};