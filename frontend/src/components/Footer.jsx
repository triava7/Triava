import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const navigation = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_services'), path: '/services' },
    { name: t('nav_portfolio'), path: '/portfolio' },
    { name: t('nav_faq'), path: '/faq' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Triava</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t('footer_tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              {t('footer_quick_links')}
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              {t('contact_info')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="h-4 w-4 text-brand-primary" />
                <a href="tel:+351937334363" className="hover:text-brand-primary transition-colors">
                  +351 937 334 363
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4 text-brand-primary" />
                <a href="mailto:triava.business@gmail.com" className="hover:text-brand-primary transition-colors">
                  triava.business@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Clock className="h-4 w-4 text-brand-primary" />
                <span>{t('contact_hours_value')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              {t('footer_newsletter')}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {t('footer_newsletter_desc')}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder={t('footer_email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-primary to-brand-neon-cyan hover:shadow-lg hover:shadow-brand-primary/30 text-white rounded-lg font-semibold"
              >
                {subscribed ? '✓ ' + t('form_success') : t('footer_subscribe')}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t dark:border-slate-800 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Triava. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};