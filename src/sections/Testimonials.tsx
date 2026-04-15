import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  // Auto-play
  useEffect(() => {
    if (isVisible && isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, isAutoPlaying]);

  const testimonials = [
    {
      quote:
        "Installation impeccable, équipe professionnelle et à l'écoute. Nos factures ont diminué de 60% dès la première année. Un investissement qui vaut vraiment le coup !",
      author: 'Famille Martin',
      location: 'Nice, France',
      rating: 5,
      project: '12 kWc avec stockage',
    },
    {
      quote:
        "Service premium et résultat à la hauteur de nos attentes. L'équipe a su s'adapter aux contraintes architecturales de notre propriété tout en garantissant des performances optimales.",
      author: 'Jean-Pierre Dubois',
      location: 'Cannes, France',
      rating: 5,
      project: '8 kWc intégré',
    },
    {
      quote:
        "Excellente expérience du début à la fin. Le suivi post-installation est remarquable et l'application de monitoring très pratique. Je recommande vivement !",
      author: 'Marco Rossi',
      location: 'Monaco',
      rating: 5,
      project: '15 kWc premium',
    },
    {
      quote:
        "Nous avons comparé plusieurs installateurs et Solar s'est distingué par leur expertise et leur professionnalisme. Le rendement dépasse nos prévisions !",
      author: 'Sophie Laurent',
      location: 'Antibes, France',
      rating: 5,
      project: '10 kWc',
    },
  ];

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-black text-white"
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
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Témoignages
            </span>
            <div className="w-12 h-[2px] bg-gold" />
          </div>
          <h2 className="heading-lg mb-4">
            Ce que nos <span className="text-gold">clients</span> disent de nous
          </h2>
          <p className="body-md text-gray-400">
            La satisfaction de nos clients est notre meilleure récompense.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Quote Icon */}
          <div className="absolute -top-8 left-0 lg:-left-8">
            <Quote className="w-16 h-16 text-gold/20" />
          </div>

          {/* Slider Content */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-gold text-gold"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-8 text-white/90">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="space-y-1">
                      <div className="font-semibold text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.location}
                      </div>
                      <div className="text-gold text-sm">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            {/* Prev Button */}
            <button
              onClick={goToPrev}
              className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 bg-gold'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className={`mt-16 pt-16 border-t border-white/10 transition-all duration-700 delay-400 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-semibold text-gold mb-2">98%</div>
              <div className="text-sm text-gray-400">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-gold mb-2">4.9/5</div>
              <div className="text-sm text-gray-400">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-gold mb-2">500+</div>
              <div className="text-sm text-gray-400">Avis vérifiés</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-gold mb-2">100%</div>
              <div className="text-sm text-gray-400">Recommandation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
