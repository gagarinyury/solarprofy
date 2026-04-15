import { useEffect, useRef, useState } from 'react';
import { TrendingDown, Battery, Leaf, Home, Shield, Coins } from 'lucide-react';

const WhySolar = () => {
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

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Économies',
      value: '70%',
      description: 'Réduisez jusqu\'à 70% votre facture d\'électricité',
      color: 'from-gold to-gold-dark',
    },
    {
      icon: Battery,
      title: 'Autonomie',
      value: '24/7',
      description: 'Devenez indépendant du réseau électrique',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Leaf,
      title: 'Écologie',
      value: '0',
      description: 'Réduisez votre empreinte carbone à zéro',
      color: 'from-emerald-400 to-emerald-600',
    },
    {
      icon: Home,
      title: 'Valorisation',
      value: '+15%',
      description: 'Augmentez la valeur de votre propriété',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Durabilité',
      value: '25',
      description: 'Ans de garantie sur vos équipements',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Coins,
      title: 'Rentabilité',
      value: '6-8',
      description: 'Ans pour un retour sur investissement',
      color: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section
      id="why-solar"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
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
              Pourquoi choisir l'énergie solaire ?
            </span>
            <div className="w-12 h-[2px] bg-gold" />
          </div>
          <h2 className="heading-lg mb-4">
            Les avantages de l'énergie{' '}
            <span className="text-gold-gradient">solaire premium</span>
          </h2>
          <p className="body-md text-gray-600">
            Découvrez pourquoi de plus en plus de propriétaires font confiance
            à l'énergie solaire pour leur villa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                transform: isVisible
                  ? 'scale(1) rotateY(0deg)'
                  : 'scale(0.3) rotateY(90deg)',
              }}
            >
              <div className="relative h-full p-8 bg-white border border-gray-100 rounded-xl overflow-hidden group-hover:border-gold/30 group-hover:shadow-xl transition-all duration-400 preserve-3d">
                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${benefit.color} opacity-10 rounded-bl-full`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${benefit.color} mb-6`}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl font-semibold text-black mb-2">
                  {benefit.value}
                  <span className="text-lg text-gray-400 ml-1">
                    {benefit.title === 'Économies' && '%'}
                    {benefit.title === 'Valorisation' && '%'}
                    {benefit.title === 'Durabilité' && ' ans'}
                    {benefit.title === 'Rentabilité' && ' ans'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gray-50 rounded-xl transition-all duration-700 delay-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-3xl font-semibold text-gold mb-1">98%</div>
            <div className="text-sm text-gray-500">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gold mb-1">2.5M+</div>
            <div className="text-sm text-gray-500">kWh produits/an</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gold mb-1">1500+</div>
            <div className="text-sm text-gray-500">Tonnes CO₂ évitées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gold mb-1">24h</div>
            <div className="text-sm text-gray-500">Délai de réponse</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolar;
