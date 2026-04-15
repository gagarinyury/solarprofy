import { useEffect, useRef, useState } from 'react';
import { Award, Users, MapPin, Zap } from 'lucide-react';

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Expertise',
      description: '15 ans d\'expérience dans l\'installation solaire',
    },
    {
      icon: Users,
      title: 'Équipe',
      description: 'Certifiés et formés aux dernières technologies',
    },
    {
      icon: MapPin,
      title: 'Couverture',
      description: 'France et nord de l\'Italie',
    },
    {
      icon: Zap,
      title: 'Qualité',
      description: 'Équipements premium garantis 25 ans',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-sm uppercase tracking-wider text-gray-500">
                À propos de nous
              </span>
            </div>

            {/* Heading */}
            <h2 className="heading-lg mb-6">
              Votre expert en{' '}
              <span className="text-gold-gradient">énergie solaire</span> sur la
              Côte d'Azur
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-600 body-md mb-8">
              <p>
                Nous sommes spécialisés dans l'installation de panneaux solaires
                haut de gamme pour les villas et entreprises. Notre équipe
                d'experts assure une solution clé en main, de l'étude à la
                maintenance.
              </p>
              <p>
                Basés à Nice, nous intervenons sur toute la Côte d'Azur, en
                France et dans le nord de l'Italie. Notre engagement : vous
                offrir les meilleures solutions solaires avec un service
                premium.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/about-villa.jpg"
                  alt="Modern villa with solar panels in Nice"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-lg max-w-[200px]">
                <div className="text-4xl font-semibold text-gold mb-2">500+</div>
                <div className="text-sm text-gray-600">
                  Installations réalisées avec succès
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
