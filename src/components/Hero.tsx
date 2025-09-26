import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, FileText } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  const trustBadges = [
    'Licensed & Insured',
    'NYC DOB Compliance',
    '24/7 Project Coordination'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 40%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {trustBadges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {badge}
              </Badge>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
            Licensed General Contractor
            <span className="block text-secondary-foreground">
              Manhattan, Brooklyn, Queens, Staten Island & NJ
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Commercial & residential construction, DOB-compliant inspections, and fast, accurate estimates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="btn-hero bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-hero"
            >
              <FileText className="w-5 h-5 mr-2" />
              Get a Free Estimate
            </Button>
            <Button 
              size="lg" 
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              View Projects
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+12125550123"
              className="flex items-center space-x-2 text-white hover:text-secondary transition-colors group"
            >
              <div className="p-2 bg-white/20 rounded-full group-hover:bg-secondary transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white/80">Call Now</p>
                <p className="font-semibold">(212) 555-0123</p>
              </div>
            </a>
            <div className="text-white/60">
              <p className="text-sm">Emergency 24/7 Service</p>
              <p className="font-semibold">Available NYC & NJ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;