import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Upload,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll review your plans and contact you within 48 hours to schedule a site visit.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(212) 555-0123', 'Available 24/7 for emergencies'],
      action: 'tel:+12125550123'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@khonasoz.com', 'We respond within 2 hours'],
      action: 'mailto:info@khonasoz.com'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      details: ['Manhattan, Brooklyn, Queens', 'Staten Island & New Jersey'],
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 7:00 AM - 7:00 PM', 'Emergency service: 24/7'],
      action: null
    }
  ];

  const projectTypes = [
    'Commercial Buildout',
    'Residential Renovation',
    'Emergency Repair',
    'DOB Inspection',
    'Other'
  ];

  const budgetRanges = [
    'Under $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months'
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload plans or photos, and we'll provide a detailed estimate within 48 hours. Licensed & insured with a 5-year workmanship warranty available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-custom">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-foreground flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                  Project Details
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll provide a detailed quote within 48 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(212) 555-0123"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Project Location *</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Manhattan, Brooklyn, etc."
                        required
                      />
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">Select Type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                      >
                        <option value="">Select Budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                      >
                        <option value="">Select Timeline</option>
                        {timelines.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Project Description</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project, any specific requirements, or questions you have..."
                      className="min-h-[120px]"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h4 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                      Upload Plans or Photos
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop files here, or click to browse
                    </p>
                    <Button variant="outline" type="button">
                      Choose Files
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Supports: PDF, JPG, PNG (Max 10MB each)
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button type="submit" className="btn-hero w-full md:w-auto px-12">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Submit Quote Request
                    </Button>
                    <p className="text-sm text-muted-foreground mt-3">
                      We'll review and contact you within 48 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p 
                            key={detailIndex} 
                            className={`${detailIndex === 0 && info.action ? 'font-semibold text-primary' : 'text-muted-foreground'} ${detailIndex > 0 ? 'text-sm' : ''}`}
                          >
                            {info.action && detailIndex === 0 ? (
                              <a href={info.action} className="hover:underline">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Emergency CTA */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-montserrat font-semibold text-foreground mb-3">
                  Emergency? Call Now!
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  24/7 emergency construction services
                </p>
                <Button 
                  className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                  asChild
                >
                  <a href="tel:+12125550123">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Hotline
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;