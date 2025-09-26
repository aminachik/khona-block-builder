import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  Clock, 
  Users, 
  CheckCircle,
  Star,
  MapPin,
  Wrench
} from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '200+', label: 'Projects Completed', icon: Award },
    { number: '24/7', label: 'Emergency Service', icon: Shield },
    { number: '5 Boroughs', label: 'Service Areas', icon: MapPin }
  ];

  const certifications = [
    'NYS Licensed General Contractor',
    'Fully Insured & Bonded',
    'DOB Compliant',
    'OSHA Certified',
    'EPA Lead-Safe Certified',
    'Workers Compensation Covered'
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Fast response in NYC & NJ with experienced local crews who understand regional building codes and requirements.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successfully completed Tashkent supermarkets, NYC restaurants, and numerous residential projects with excellent client satisfaction.'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'Clear estimates with detailed breakdowns and milestone updates throughout your project. No hidden fees or surprises.'
    },
    {
      icon: Wrench,
      title: 'Quality Craftsmanship',
      description: 'Meticulous attention to detail with premium materials and skilled tradespeople delivering lasting results.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            About Khona Soz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Licensed, insured, and DOB-compliant, we bring decades of experience to construction projects across NYC and NJ.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-montserrat font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a commitment to excellence, Khona Soz has become a trusted general contractor 
                specializing in commercial buildouts and residential renovations throughout the New York metropolitan area.
              </p>
              <p>
                Our expertise spans supermarket construction, restaurant fit-outs, residential renovations, and 
                emergency repairs. We pride ourselves on delivering projects on time, within budget, and with 
                meticulous attention to quality and compliance.
              </p>
              <p>
                From our successful completion of Tashkent supermarkets to complex NYC brownstone renovations, 
                we bring the same level of professionalism and craftsmanship to every project, regardless of size.
              </p>
            </div>

            {/* Licenses & Certifications */}
            <div className="mt-8">
              <h4 className="text-lg font-montserrat font-semibold text-foreground mb-4">
                Licenses & Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="justify-start py-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Team Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-custom">
              <img
                src={teamPhoto}
                alt="Khona Soz Construction Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Trust Badge Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-border">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">5.0 Rating</div>
                  <div className="text-muted-foreground">50+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-montserrat font-bold text-foreground text-center mb-12">
            Why Choose Khona Soz?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-montserrat font-semibold text-foreground mb-3">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your construction needs and provide you with a detailed, transparent quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Schedule Consultation
              </Button>
              <Button variant="outline">
                Call (212) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;