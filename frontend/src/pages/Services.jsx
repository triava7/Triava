import React from 'react';
import { MessageSquare, Cpu, Palette, Rocket, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: t('service_1_title'),
      description: t('service_1_desc'),
      features: [
        'Análise de necessidades',
        'Definição de objetivos',
        'Planeamento estratégico',
      ],
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: t('service_2_title'),
      description: t('service_2_desc'),
      features: [
        'Protótipo funcional',
        'Validação rápida',
        'Feedback imediato',
      ],
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: t('service_3_title'),
      description: t('service_3_desc'),
      features: [
        'Design responsivo',
        'Otimizado para conversão',
        'Experiência do usuário',
      ],
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: t('service_4_title'),
      description: t('service_4_desc'),
      features: [
        'Lançamento em 7 dias',
        'Suporte de 30 dias',
        'Treinamento incluído',
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-fluid-4xl font-bold text-slate-900 dark:text-white">
              {t('services_title')}
            </h1>
            <p className="text-fluid-xl text-slate-600 dark:text-slate-300">
              {t('services_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-brand-primary mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-fluid-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t('pricing_title')}
              </h2>
              <p className="text-fluid-lg text-slate-600 dark:text-slate-300">
                {t('pricing_subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Base Plan */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {t('plan_base')}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    50€
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">{t('per_year')}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_1')}
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_2')}
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg">
                    {t('cta_quote')}
                  </Button>
                </Link>
              </div>

              {/* Advanced Plan */}
              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white p-8 rounded-2xl shadow-2xl transform scale-105 relative">
                <div className="absolute top-4 right-4 bg-white text-brand-primary text-xs font-bold px-3 py-1 rounded-full">
                  {t('recommended')}
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('plan_advanced')}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">150€</span>
                  <span className="opacity-90">{t('per_year')}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_1')}
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_2')}
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_3')}
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_4')}
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-white text-brand-primary hover:bg-slate-100 rounded-lg">
                    {t('cta_quote')}
                  </Button>
                </Link>
              </div>

              {/* Premium Plan */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {t('plan_premium')}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    250€
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">{t('per_year')}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_1')}
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_2')}
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_5')}
                  </li>
                  <li className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    {t('plan_feature_4')}
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg">
                    {t('cta_quote')}
                  </Button>
                </Link>
              </div>
            </div>
            <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-8">
              {t('pricing_note')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};