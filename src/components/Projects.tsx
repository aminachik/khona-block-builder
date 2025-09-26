import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Square, Clock } from 'lucide-react';
import supermarketImage from '@/assets/supermarket-project.jpg';
import residentialImage from '@/assets/residential-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Tashkent Supermarket',
      location: 'Tashkent',
      year: '2024',
      size: '10,000 sq ft',
      timeline: '4 months',
      category: 'Commercial',
      image: supermarketImage,
      challenge: 'Tight timeline with international supply chain constraints.',
      solution: 'Streamlined MEP coordination and local sourcing.',
      outcome: 'Completed under budget, on time, with full brand compliance.',
      features: ['Full supermarket buildout', 'Modern refrigeration systems', 'Custom lighting design', 'Efficient checkout layout']
    },
    {
      title: 'Brooklyn Brownstone Revival',
      location: 'Brooklyn, NY',
      year: '2024',
      size: '3,500 sq ft',
      timeline: '6 months',
      category: 'Residential',
      image: residentialImage,
      challenge: 'Historic preservation requirements with modern functionality.',
      solution: 'Careful restoration maintaining original character.',
      outcome: 'Award-winning renovation preserving historic details.',
      features: ['Historic preservation', 'Modern kitchen design', 'Original detail restoration', 'Energy efficiency upgrades']
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of commercial and residential projects across NYC and NJ, showcasing quality craftsmanship and timely delivery.
          </p>
        </div>

        {/* Project Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="text-primary border-primary">All Projects</Button>
            <Button variant="ghost">Commercial</Button>
            <Button variant="ghost">Residential</Button>
            <Button variant="ghost">Emergency</Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-custom hover:shadow-lg transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="w-4 h-4" />
                      <span>{project.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Outcome:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                {/* Project Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="btn-outline w-full">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your project? Let's discuss your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Get a Free Quote
            </Button>
            <Button variant="outline">
              See All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;