import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Euro } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '../components/ui/button';
import { AnimatedHero } from '../components/AnimatedHero';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section with Animated Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-fluid-4xl font-bold text-white leading-tight animate-fade-in">
              {t('hero_title')}
            </h1>
            <p className="text-fluid-xl text-slate-200 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero_description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {t('cta_quote')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  {t('cta_services')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-fluid-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t('about_title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-fluid-lg text-slate-600 dark:text-slate-300">
                  {t('about_p1')}
                </p>
                <p className="text-fluid-lg text-slate-600 dark:text-slate-300">
                  {t('about_p2')}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow duration-300">
                  <Zap className="h-12 w-12 text-brand-primary mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {t('about_days')}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t('about_days_desc')}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow duration-300">
                  <Euro className="h-12 w-12 text-brand-primary mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {t('about_price')}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t('about_price_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-fluid-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t('services_title')}
              </h2>
              <p className="text-fluid-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {t('services_subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: t('service_1_title'), desc: t('service_1_desc'), num: '01' },
                { title: t('service_2_title'), desc: t('service_2_desc'), num: '02' },
                { title: t('service_3_title'), desc: t('service_3_desc'), num: '03' },
                { title: t('service_4_title'), desc: t('service_4_desc'), num: '04' },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl font-bold text-brand-primary/20 mb-4">
                    {service.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <div className="inline-block bg-gradient-to-r from-brand-primary to-brand-accent text-white px-8 py-4 rounded-xl shadow-lg">
                <p className="text-lg font-semibold">
                  {t('special_price')} <span className="text-3xl font-bold">300€</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-fluid-3xl font-bold">
              {t('hero_title')}
            </h2>
            <p className="text-fluid-lg opacity-90">
              {t('hero_description')}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-brand-primary hover:bg-slate-100 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {t('cta_quote')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};