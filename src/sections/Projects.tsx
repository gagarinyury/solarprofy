import { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const projects = [
    {
      image: '/images/project-nice.jpg',
      title: 'Villa Contemporaine',
      location: 'Nice, France',
      power: '12 kWc',
      savings: '75%',
      description: 'Installation complète avec stockage batterie',
      size: 'large',
    },
    {
      image: '/images/project-cannes.jpg',
      title: 'Propriété Méditerranéenne',
      location: 'Cannes, France',
      power: '8 kWc',
      savings: '65%',
      description: 'Intégration architecturale premium',
      size: 'medium',
    },
    {
      image: '/images/project-monaco.jpg',
      title: 'Résidence de Luxe',
      location: 'Monaco',
      power: '15 kWc',
      savings: '80%',
      description: 'Solution haut de gamme sur mesure',
      size: 'tall',
    },
    {
      image: '/images/project-antibes.jpg',
      title: 'Villa Moderne',
      location: 'Antibes, France',
      power: '10 kWc',
      savings: '70%',
      description: 'Design épuré et performances optimales',
      size: 'medium',
    },
    {
      image: '/images/project-sttropez.jpg',
      title: 'Bastide Provençale',
      location: 'Saint-Tropez, France',
      power: '9 kWc',
      savings: '68%',
      description: 'Harmonie entre tradition et modernité',
      size: 'large',
    },
    {
      image: '/images/project-italy.jpg',
      title: 'Villa Italienne',
      location: 'Ligurie, Italie',
      power: '11 kWc',
      savings: '72%',
      description: 'Installation transfrontalière certifiée',
      size: 'medium',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gray-50"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-sm uppercase tracking-wider text-gray-500">
                Nos Projets
              </span>
            </div>
            <h2 className="heading-lg mb-4">
              Découvrez nos{' '}
              <span className="text-gold-gradient">réalisations</span> sur la
              Côte d'Azur
            </h2>
            <p className="body-md text-gray-600">
              Des installations premium sur les plus belles propriétés de la
              région.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors"
          >
            Voir tous les projets
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${
                project.size === 'tall' ? 'md:row-span-2' : ''
              } ${
                isVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  project.size === 'tall' ? 'h-[500px] md:h-full' : 'h-[300px]'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-70'
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Location Badge */}
                  <div
                    className={`flex items-center gap-2 text-white/80 text-sm mb-3 transition-all duration-500 ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-white/70 text-sm mb-4 transition-all duration-500 delay-100 ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div
                    className={`flex gap-6 transition-all duration-500 delay-150 ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div>
                      <div className="text-gold font-bold">{project.power}</div>
                      <div className="text-white/50 text-xs">Puissance</div>
                    </div>
                    <div>
                      <div className="text-gold font-bold">
                        {project.savings}
                      </div>
                      <div className="text-white/50 text-xs">Économies</div>
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div
                    className={`mt-4 transition-all duration-500 delay-200 ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                      Voir le projet
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
