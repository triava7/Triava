import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Euro, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '../components/ui/button';
import { FuturisticHero } from '../components/FuturisticHero';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section - Futuristic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-black dark:via-slate-950 dark:to-black">
        <FuturisticHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Tech badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-primary">Tecnologia de Ponta</span>
            </div>
            
            {/* Main heading with gradient */}
            <h1 className="text-fluid-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                {t('hero_title')}
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-fluid-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t('hero_description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-brand-primary to-brand-neon-cyan hover:shadow-2xl hover:shadow-brand-primary/50 text-white rounded-xl font-semibold transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {t('cta_quote')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-neon-cyan to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-2 border-brand-secondary/50 text-slate-200 hover:bg-brand-secondary/10 hover:border-brand-secondary hover:text-white backdrop-blur-sm transition-all duration-300"
                >
                  {t('cta_services')}
                </Button>
              </Link>
            </div>
            
            {/* Tech stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-neon-cyan bg-clip-text text-transparent">7</div>
                <div className="text-sm text-slate-400 mt-1">Dias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand-secondary to-brand-neon-purple bg-clip-text text-transparent">300€</div>
                <div className="text-sm text-slate-400 mt-1">Investimento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand-accent to-brand-neon-orange bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-slate-400 mt-1">Responsivo</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
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
                <div className="relative group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-brand-primary/20 hover:border-brand-primary/50 hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Zap className="relative h-12 w-12 text-brand-primary mb-4" />
                  <h3 className="relative text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {t('about_days')}
                  </h3>
                  <p className="relative text-sm text-slate-600 dark:text-slate-400">
                    {t('about_days_desc')}
                  </p>
                </div>
                <div className="relative group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-brand-accent/20 hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Euro className="relative h-12 w-12 text-brand-accent mb-4" />
                  <h3 className="relative text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {t('about_price')}
                  </h3>
                  <p className="relative text-sm text-slate-600 dark:text-slate-400">
                    {t('about_price_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                { title: t('service_1_title'), desc: t('service_1_desc'), num: '01', color: 'brand-primary' },
                { title: t('service_2_title'), desc: t('service_2_desc'), num: '02', color: 'brand-secondary' },
                { title: t('service_3_title'), desc: t('service_3_desc'), num: '03', color: 'brand-accent' },
                { title: t('service_4_title'), desc: t('service_4_desc'), num: '04', color: 'brand-coral' },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className=\"relative group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden\"
                >
                  <div className=\"absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300\"></div>
                  <div className={`relative text-5xl font-bold text-${service.color}/20 mb-4 group-hover:text-${service.color}/40 transition-colors`}>
                    {service.num}
                  </div>
                  <h3 className=\"relative text-xl font-bold text-slate-900 dark:text-white mb-3\">
                    {service.title}
                  </h3>
                  <p className=\"relative text-sm text-slate-600 dark:text-slate-400\">
                    {service.desc}
                  </p>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-${service.color}/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>
            <div className=\"text-center mt-12\">
              <div className=\"inline-block relative group\">
                <div className=\"absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity\"></div>
                <div className=\"relative bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white px-10 py-5 rounded-2xl shadow-2xl\">
                  <p className=\"text-lg font-semibold\">
                    {t('special_price')} <span className=\"text-4xl font-bold ml-2\">300€</span>
                  </p>
                </div>
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