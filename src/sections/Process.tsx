import { useEffect, useRef, useState } from 'react';
import { MessageSquare, PenTool, Wrench, GraduationCap, Headphones } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Nous étudions vos besoins énergétiques et analysons votre propriété pour définir la meilleure solution.',
    duration: '1-2 jours',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Conception',
    description: "Notre équipe d'ingénieurs conçoit un système sur mesure, optimisé pour votre consommation et votre architecture.",
    duration: '3-5 jours',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installation',
    description: 'Nos techniciens certifiés installent votre système avec le plus grand soin et dans le respect des normes.',
    duration: '1-3 jours',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Formation',
    description: "Nous vous formons à l'utilisation de votre système et vous fournissons toute la documentation nécessaire.",
    duration: '1 heure',
  },
  {
    number: '05',
    icon: Headphones,
    title: 'Suivi',
    description: 'Bénéficiez d\'une surveillance continue et d\'un service de maintenance pour des performances optimales.',
    duration: '24/7',
  },
];

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveStep(i);
      i += 1;
      if (i >= steps.length) clearInterval(interval);
    }, 400);
    return () => clearInterval(interval);
  }, [isVisible]);

  const lineHeight = activeStep >= 0
    ? `${((activeStep + 1) / steps.length) * 100}%`
    : '0%';

  return (
    <section id="process" ref={sectionRef} className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="section-padding">

        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-sm uppercase tracking-wider text-gray-500">Notre Processus</span>
            <div className="w-12 h-[2px] bg-gold" />
          </div>
          <h2 className="heading-lg mb-4">
            De l'étude à la maintenance,{' '}
            <span className="text-gold-gradient">nous vous accompagnons</span>
          </h2>
          <p className="body-md text-gray-500">
            Un processus simple et transparent pour votre tranquillité d'esprit.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Desktop zigzag */}
          <div className="hidden lg:block">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px] bg-gray-100">
              <div
                className="absolute top-0 left-0 w-full bg-gold transition-all duration-700"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-16">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const active = activeStep >= index;
                return (
                  <div key={step.number} className="grid grid-cols-[1fr_80px_1fr] items-center gap-0">

                    {/* Left cell */}
                    <div className={`pr-10 text-right transition-all duration-600 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}>
                      {isEven && <StepContent step={step} align="right" />}
                    </div>

                    {/* Circle */}
                    <div className="flex justify-center relative z-10">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${active ? 'bg-gold scale-100' : 'bg-gray-100 scale-90'}`}
                        style={{ transitionDelay: `${index * 100}ms` }}>
                        <step.icon className={`w-6 h-6 transition-colors duration-500 ${active ? 'text-black' : 'text-gray-400'}`} />
                      </div>
                    </div>

                    {/* Right cell */}
                    <div className={`pl-10 transition-all duration-600 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}>
                      {!isEven && <StepContent step={step} align="left" />}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile — single column */}
          <div className="lg:hidden">
            {/* Vertical line */}
            <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-gray-100">
              <div
                className="absolute top-0 left-0 w-full bg-gold transition-all duration-700"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-10">
              {steps.map((step, index) => {
                const active = activeStep >= index;
                return (
                  <div key={step.number} className={`flex items-start gap-6 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${active ? 'bg-gold scale-100' : 'bg-gray-100 scale-90'}`}>
                        <step.icon className={`w-6 h-6 transition-colors duration-500 ${active ? 'text-black' : 'text-gray-400'}`} />
                      </div>
                    </div>
                    <div className="pt-3">
                      <StepContent step={step} align="left" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-500 mb-6">Prêt à démarrer votre projet solaire ?</p>
          <a href="#contact" className="btn-primary inline-flex">Commencer maintenant</a>
        </div>

      </div>
    </section>
  );
};

const StepContent = ({ step, align }: { step: typeof steps[0]; align: 'left' | 'right' }) => (
  <div>
    <span className="text-sm text-gold font-medium uppercase tracking-wider">
      Étape {step.number}
    </span>
    <h3 className={`text-2xl font-semibold mt-2 mb-3 ${align === 'right' ? 'lg:text-right' : ''}`}>
      {step.title}
    </h3>
    <p className={`text-gray-500 text-sm leading-relaxed mb-2 ${align === 'right' ? 'lg:text-right' : ''}`}>
      {step.description}
    </p>
    <div className={`inline-flex items-center gap-2 text-sm text-gray-400 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
      Durée: {step.duration}
    </div>
  </div>
);

export default Process;
