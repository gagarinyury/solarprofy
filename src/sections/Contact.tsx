import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '130 avenue de la Lanterne\nNice, France',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 6 95 55 10 55',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'solar@profy.top',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven: 9h - 18h\nSam: Sur rendez-vous',
    },
  ];

  return (
    <section
      id="contact"
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
              Contact
            </span>
            <div className="w-12 h-[2px] bg-gold" />
          </div>
          <h2 className="heading-lg mb-4">
            Demandez votre{' '}
            <span className="text-gold-gradient">devis gratuit</span>
          </h2>
          <p className="body-md text-gray-600">
            Réponse sous 24h ouvrées. Étude personnalisée sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {isSubmitted ? (
              <div className="bg-gray-50 rounded-xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Merci pour votre demande !
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous avons bien reçu votre message. Notre équipe vous
                  contactera dans les 24h ouvrées pour discuter de votre
                  projet.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold font-medium hover:underline"
                >
                  Envoyer une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Jean Dupont"
                      required
                      className="h-12 border-gray-200 focus:border-gold focus:ring-gold"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      required
                      className="h-12 border-gray-200 focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    required
                    className="h-12 border-gray-200 focus:border-gold focus:ring-gold"
                  />
                </div>

                {/* Property Type */}
                <div className="space-y-2">
                  <Label htmlFor="property" className="text-sm font-medium">
                    Type de propriété *
                  </Label>
                  <Select required>
                    <SelectTrigger className="h-12 border-gray-200 focus:border-gold focus:ring-gold">
                      <SelectValue placeholder="Sélectionnez le type de propriété" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="maison">Maison</SelectItem>
                      <SelectItem value="appartement">Appartement</SelectItem>
                      <SelectItem value="entreprise">Entreprise</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message (optionnel)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet, vos besoins..."
                    rows={4}
                    className="border-gray-200 focus:border-gold focus:ring-gold resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  En envoyant ce formulaire, vous acceptez notre politique de
                  confidentialité.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Nos coordonnées</h3>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-lg flex-shrink-0">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      <p className="text-sm text-gray-500 whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coverage Area */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium mb-4">Zone d'intervention</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Nice',
                    'Cannes',
                    'Monaco',
                    'Antibes',
                    'Saint-Tropez',
                    'Menton',
                    'Italie (Nord)',
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
