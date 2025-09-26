import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  Shield,
  Award
} from 'lucide-react';

const Footer = () => {
  const serviceAreas = [
    'Manhattan',
    'Brooklyn', 
    'Queens',
    'Staten Island',
    'Bronx',
    'New Jersey'
  ];

  const services = [
    'Commercial Buildouts',
    'Residential Renovations',
    'DOB Inspections',
    'Emergency Repairs',
    'Permit Applications',
    'Code Compliance'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Free Quote', href: '#contact' },
    { name: 'Emergency Service', href: 'tel:+12125550123' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-montserrat font-bold mb-2">Khona Soz</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Licensed General Contractor
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Professional construction services across NYC and NJ. Licensed, insured, and DOB-compliant with over 15 years of experience.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="w-4 h-4 text-secondary" />
                <span>DOB Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                  ))}
                </div>
                <span>5.0 Rating (50+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <a 
                    href={`#${area.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">Get In Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a 
                href="tel:+12125550123"
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-secondary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-secondary" />
                <div>
                  <div className="text-sm font-medium">(212) 555-0123</div>
                  <div className="text-xs">24/7 Emergency Line</div>
                </div>
              </a>
              
              <a 
                href="mailto:info@khonasoz.com"
                className="flex items-center space-x-3 text-primary-foreground/70 hover:text-secondary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-secondary" />
                <div>
                  <div className="text-sm font-medium">info@khonasoz.com</div>
                  <div className="text-xs">Response within 2 hours</div>
                </div>
              </a>
              
              <div className="flex items-start space-x-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">NYC & New Jersey</div>
                  <div className="text-xs">All 5 boroughs covered</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-primary-foreground/70">
                <Clock className="w-4 h-4 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Mon-Fri: 7AM-7PM</div>
                  <div className="text-xs">Emergency: 24/7</div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold"
              asChild
            >
              <a href="#contact">Get Free Quote</a>
            </Button>
          </div>
        </div>

        {/* Quick Links Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 bg-primary-dark">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} Khona Soz. All rights reserved. | NYS License #________ | Fully Insured & Bonded</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;