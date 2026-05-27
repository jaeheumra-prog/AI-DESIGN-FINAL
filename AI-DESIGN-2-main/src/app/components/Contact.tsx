import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "jaeheum.ra@gmail.com",
      link: "mailto:jaeheum.ra@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+82 (010) 2288-7529",
      link: "tel:+821022887529"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Anseong, GG(kr)",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://www.instagram.com/jaehm___/"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/jaeheumra-prog"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Let's Work Together!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            예술적 감각과 기술적 안목이 결합된 인재를 찾으시나요?
            주도적인 프로젝트 진행과 창의적 문제해결을 원하시나요? 그렇다면 바로 연락주세요!         
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <select 
                  id="projectType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="branding">Brand Identity</option>
                  <option value="web">Web Design</option>
                  <option value="print">Print Design</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="min-h-[120px]"
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Get In Touch</h3>
              <p className="text-muted-foreground">
                안녕하세요, ART&TECH 전공, 개발자 및 예술가 이승회입니다.   
                언제나 새로운 기회나 프로젝트에 열려있습니다. 언제든 편하게 연락주세요!!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-medium">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-muted-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-medium">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6 border-0 bg-accent/50">
              <div className="space-y-2">
                <h4 className="font-medium">Currently Available</h4>
                <p className="text-sm text-muted-foreground">
                  I'm actively seeking new opportunities and available for both 
                  full-time positions and freelance projects. Let's discuss your needs!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
