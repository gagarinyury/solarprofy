import { useEffect, useRef, useState } from 'react';
import { Sun, Battery, Settings, Wrench, FileCheck, ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: '01',
      icon: Sun,
      title: 'Panneaux Solaires',
      description:
        'Installation de panneaux photovoltaïques haute performance, sélectionnés parmi les meilleures marques européennes pour un rendement optimal.',
      features: ['Rendement > 21%', 'Garantie 25 ans', 'Esthétique premium'],
    },
    {
      number: '02',
      icon: Settings,
      title: 'Onduleurs',
      description:
        'Systèmes de conversion d\'énergie intelligents qui optimisent la production et garantissent la sécurité de votre installation.',
      features: ['Monitoring en temps réel', 'Haute efficacité', 'Connectivité IoT'],
    },
    {
      number: '03',
      icon: Battery,
      title: 'Batteries de Stockage',
      description:
        'Solutions de stockage d\'énergie pour une autonomie maximale et une utilisation optimale de votre production solaire.',
      features: ['Autonomie 24h', 'Backup intégré', 'Gestion intelligente'],
    },
    {
      number: '04',
      icon: FileCheck,
      title: 'Installation Complète',
      description:
        'Service clé en main incluant l\'étude, les démarches administratives, l\'installation et la mise en service.',
      features: ['Étude personnalisée', 'Démarches incluses', 'Installation certifiée'],
    },
    {
      number: '05',
      icon: Wrench,
      title: 'Maintenance',
      description:
        'Service après-vente et surveillance continue pour garantir les performances de votre installation sur le long terme.',
      features: ['Surveillance 24/7', 'Intervention 48h', 'Maintenance préventive'],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-black text-white"
    >
      <div className="section-padding mb-12">
        {/* Section Header */}
        <div
          className={`max-w-3xl transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Nos Services
            </span>
          </div>
          <h2 className="heading-lg mb-4">
            Des solutions <span className="text-gold">complètes</span> pour votre
            autonomie énergétique
          </h2>
          <p className="body-md text-gray-400">
            De l'étude à la maintenance, nous vous accompagnons à chaque étape
            de votre projet solaire.
          </p>
        </div>
      </div>

      {/* Services Cards - Horizontal Scroll on Desktop */}
      <div className="relative">
        <div className="flex overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 gap-6 snap-x snap-mandatory scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`flex-shrink-0 w-[320px] sm:w-[380px] snap-start transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 group hover:bg-white/10 hover:border-gold/30 transition-all duration-400">
                {/* Number & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-semibold text-gold/30">
                    {service.number}
                  </span>
                  <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <button className="flex items-center gap-2 text-sm font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {services.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/20"
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="section-padding mt-12">
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-white/5 rounded-xl border border-white/10 transition-all duration-700 delay-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Besoin d'une solution sur mesure ?
            </h3>
            <p className="text-gray-400 text-sm">
              Nos experts étudient votre projet et vous proposent la meilleure solution.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-medium text-sm uppercase tracking-wider hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Demander un devis
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
