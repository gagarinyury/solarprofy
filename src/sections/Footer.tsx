import { Sun, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: 'À propos', href: '#about' },
      { label: 'Nos services', href: '#services' },
      { label: 'Nos projets', href: '#projects' },
      { label: 'Processus', href: '#process' },
    ],
    services: [
      { label: 'Panneaux solaires', href: '#services' },
      { label: 'Batteries de stockage', href: '#services' },
      { label: 'Installation', href: '#services' },
      { label: 'Maintenance', href: '#services' },
    ],
    legal: [
      { label: 'Mentions légales', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
      { label: 'CGV', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Sun className="w-8 h-8 text-gold" />
              <span className="text-2xl tracking-tight">
                <span className="text-gold font-light">SOLAR</span><span className="text-white font-semibold">PROFY</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Solutions solaires premium clé en main pour votre villa sur la
              Côte d'Azur, en France et dans le nord de l'Italie.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 border border-white/20 rounded-full hover:bg-gold hover:border-gold hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>130 avenue de la Lanterne</p>
              <p>Nice, France</p>
              <p className="pt-2">
                <a
                  href="tel:+33695551055"
                  className="hover:text-gold transition-colors"
                >
                  +33 6 95 55 10 55
                </a>
              </p>
              <p>
                <a
                  href="mailto:solar@profy.top"
                  className="hover:text-gold transition-colors"
                >
                  solar@profy.top
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SolarProfy. Tous droits réservés.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 border border-white/20 rounded-full hover:bg-gold hover:border-gold hover:text-black transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
