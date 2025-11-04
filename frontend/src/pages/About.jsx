import React from 'react';
import { Users, Target, Sparkles, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const About = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-fluid-4xl font-bold text-slate-900 dark:text-white">
              {t('about_title')}
            </h1>
            <p className="text-fluid-xl text-slate-600 dark:text-slate-300">
              {t('about_p1')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Office"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-fluid-2xl font-bold text-slate-900 dark:text-white">
                  {t('about_p2')}
                </h2>
                <p className="text-fluid-base text-slate-600 dark:text-slate-300">
                  {t('about_p1')}
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Target className="h-8 w-8" />,
                  title: t('about_days'),
                  desc: t('about_days_desc'),
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: t('about_price_desc'),
                  desc: t('about_price'),
                },
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: 'Design Moderno',
                  desc: 'Tecnologia de ponta',
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: 'Suporte Dedicado',
                  desc: '30 dias grátis',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-brand-primary mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};