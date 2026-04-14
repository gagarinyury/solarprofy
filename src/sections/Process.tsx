import { useEffect, useRef, useState } from 'react';
import { MessageSquare, PenTool, Wrench, GraduationCap, Headphones } from 'lucide-react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate steps sequentially
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 400);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Consultation',
      description:
        'Nous étudions vos besoins énergétiques et analysons votre propriété pour définir la meilleure solution.',
      duration: '1-2 jours',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Conception',
      description:
        'Notre équipe d\'ingénieurs conçoit un système sur mesure, optimisé pour votre consommation et votre architecture.',
      duration: '3-5 jours',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Installation',
      description:
        'Nos techniciens certifiés installent votre système avec le plus grand soin et dans le respect des normes.',
      duration: '1-3 jours',
    },
    {
      number: '04',
      icon: GraduationCap,
      title: 'Formation',
      description:
        'Nous vous formons à l\'utilisation de votre système et vous fournissons toute la documentation nécessaire.',
      duration: '1 heure',
    },
    {
      number: '05',
      icon: Headphones,
      title: 'Suivi',
      description:
        'Bénéficiez d\'une surveillance continue et d\'un service de maintenance pour des performances optimales.',
      duration: '24/7',
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-sm uppercase tracking-wider text-gray-500">
              Notre Processus
            </span>
            <div className="w-12 h-[2px] bg-gold" />
          </div>
          <h2 className="heading-lg mb-4">
            De l'étude à la maintenance,{' '}
            <span className="text-gold-gradient">nous vous accompagnons</span>
          </h2>
          <p className="body-md text-gray-600">
            Un processus simple et transparent pour votre tranquillité d'esprit.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 lg:-translate-x-1/2">
            <div
              className="absolute top-0 left-0 w-full bg-gold transition-all duration-1000"
              style={{
                height: isVisible
                  ? `${((activeStep + 1) / steps.length) * 100}%`
                  : '0%',
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-8 lg:gap-0 transition-all duration-700 ${
                  isVisible && activeStep >= index
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  flexDirection:
                    index % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                {/* Content */}
                <div
                  className={`flex-1 lg:pr-16 lg:pl-0 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'
                  }`}
                >
                  <div
                    className={`transition-all duration-500 ${
                      activeStep >= index
                        ? 'translate-x-0 opacity-100'
                        : index % 2 === 0
                        ? '-translate-x-8 opacity-0'
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <span className="text-sm text-gold font-medium uppercase tracking-wider">
                      Étape {step.number}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-3">{step.title}</h3>
                    <p className="text-gray-600 body-sm mb-2">
                      {step.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      Durée: {step.duration}
                    </span>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeStep >= index
                        ? 'bg-gold scale-100'
                        : 'bg-gray-100 scale-90'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <step.icon
                      className={`w-6 h-6 transition-colors duration-500 ${
                        activeStep >= index ? 'text-black' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 mb-6">
            Prêt à démarrer votre projet solaire ?
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Commencer maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
