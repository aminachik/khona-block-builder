import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Home, ClipboardCheck, AlertTriangle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Buildouts',
      description: 'Supermarkets, restaurants, and retail fit-outs with DOB coordination and MEP integration.',
      features: ['Turn-key commercial interiors', 'Brand rollouts', 'Multi-site coordination', 'Fast permitting'],
      cta: 'Request Commercial Quote'
    },
    {
      icon: Home,
      title: 'Residential Renovations',
      description: 'Brownstones, apartments, and multi-family homes with expert craftsmanship.',
      features: ['Complete renovations', 'Kitchen & bathroom remodels', 'Multi-family conversions', 'Historic preservation'],
      cta: 'Request Residential Quote'
    },
    {
      icon: ClipboardCheck,
      title: 'DOB Inspections & Permits',
      description: 'Fast, compliant permitting and inspections for all NYC projects.',
      features: ['Permit applications', 'DOB inspections', 'Code compliance', 'Violation resolution'],
      cta: 'Schedule Inspection'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Repairs',
      description: '24/7 service for urgent construction needs and emergency situations.',
      features: ['24/7 availability', 'Rapid response', 'Emergency stabilization', 'Insurance coordination'],
      cta: 'Emergency Hotline'
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Construction Services in NYC & NJ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From commercial buildouts to residential renovations, we deliver DOB-compliant construction with transparent pricing and fast timelines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need something specific? We handle all types of construction projects.
          </p>
          <Button className="btn-hero">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;