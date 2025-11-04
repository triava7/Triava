import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '../components/ui/button';

export const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      category: 'E-commerce',
      description: 'Loja online moderna com catálogo de produtos, carrinho de compras e integração de pagamentos.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['React', 'Tailwind CSS', 'FastAPI', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Restaurant Website',
      category: 'Restaurant',
      description: 'Website institucional para restaurante com menu digital, reservas online e galeria de fotos.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-fluid-4xl font-bold text-slate-900 dark:text-white">
              {t('portfolio_title')}
            </h1>
            <p className="text-fluid-xl text-slate-600 dark:text-slate-300">
              {t('portfolio_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-primary bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-slate-800/90 rounded-full"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="aspect-video overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                width="1200"
                height="675"
              />
            </div>
            <div className="p-8">
              <div className="mb-4">
                <span className="text-xs font-semibold text-brand-primary bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};