import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-villa.jpg"
          alt="Luxury villa with solar panels on French Riviera"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      {/* Animated Sun */}
      <div className="absolute top-1/2 right-0 lg:right-20 -translate-y-1/2 translate-x-1/3 lg:translate-x-0">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
          {/* Sun Rays */}
          <div className="absolute inset-0 animate-sun-rotate">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-[2px] bg-gradient-to-t from-gold to-transparent origin-bottom"
                style={{
                  height: '60%',
                  transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                  transformOrigin: '50% 100%',
                }}
              />
            ))}
          </div>
          
          {/* Sun Core */}
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-gold via-gold-light to-gold-dark animate-sun-pulse shadow-glow-lg" />
          
          {/* Inner Glow */}
          <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-gold-light to-gold opacity-80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center section-padding">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs uppercase tracking-wider mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Solutions clé en main
          </div>

          {/* Main Heading */}
          <h1
            className={`heading-xl mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block">ÉNERGIE SOLAIRE</span>
            <span className="block text-gold-gradient">PREMIUM</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`body-lg text-gray-600 mb-4 max-w-xl transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Solutions complètes clé en main pour votre villa
          </p>
          
          <p
            className={`body-md text-gray-500 mb-10 max-w-lg transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Installation de panneaux solaires haut de gamme sur la Côte d'Azur, 
            en France et dans le nord de l'Italie
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button onClick={scrollToContact} className="btn-primary group">
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={scrollToAbout} className="btn-outline">
              En savoir plus
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-black/10 transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="text-3xl sm:text-4xl font-semibold text-gold">500+</div>
              <div className="text-sm text-gray-500 mt-1">Installations</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-semibold text-gold">15+</div>
              <div className="text-sm text-gray-500 mt-1">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-semibold text-gold">70%</div>
              <div className="text-sm text-gray-500 mt-1">Économies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-black transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-wider">Découvrir</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
