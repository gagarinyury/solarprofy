import { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projets' },
    { href: '#process', label: 'Processus' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Show navigation after scrolling past hero
    setIsVisible(scrollY > 100);
  }, [scrollY]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="glass-effect border-b border-black/5">
          <div className="section-padding">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <a
                href="#"
                className="flex items-center gap-2 group"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Sun className="w-6 h-6 text-gold transition-transform duration-300 group-hover:rotate-180" />
                <span className="text-xl font-bold tracking-tight">SOLARPROFY</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm font-medium uppercase tracking-wider link-underline py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary text-xs"
                >
                  Devis gratuit
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium uppercase tracking-wider py-2 border-b border-gray-100 transition-colors hover:text-gold"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary mt-4"
              >
                Devis gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
