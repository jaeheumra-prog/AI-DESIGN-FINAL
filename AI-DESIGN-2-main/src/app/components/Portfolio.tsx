import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Branding", "Web Design", "Print", "Digital"];

  const projects = [
    {
      id: 1,
      title: "Modern Tech Startup Branding",
      category: "Branding",
      description: "Complete brand identity system for a innovative tech startup including logo, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1633533446213-a438ff5f0629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NTM3MDIwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Logo Design", "Brand Identity", "Style Guide"]
    },
    {
      id: 2,
      title: "E-commerce Website Redesign",
      category: "Web Design",
      description: "Complete UX/UI redesign of an e-commerce platform focusing on conversion optimization and user experience.",
      image: "https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU1MjgwMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["UI Design", "UX Research", "Responsive Design"]
    },
    {
      id: 3,
      title: "Concert Poster Series",
      category: "Print",
      description: "Dynamic poster series for a summer music festival featuring bold typography and vibrant color schemes.",
      image: "https://images.unsplash.com/photo-1686164439898-9790e48910ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc1NTM3MDIwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Typography", "Print Design", "Event Branding"]
    },
    {
      id: 4,
      title: "Minimalist Logo Collection",
      category: "Branding",
      description: "Collection of clean, minimalist logos for various industries focusing on timeless design principles.",
      image: "https://images.unsplash.com/photo-1618242556516-6858a8f34cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbG9nbyUyMGRlc2lnbnxlbnwxfHx8fDE3NTUyODM2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Logo Design", "Minimalism", "Brand Identity"]
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Digital",
      description: "Comprehensive social media visual campaign for a lifestyle brand including posts, stories, and ad creatives.",
      image: "https://images.unsplash.com/photo-1633533446213-a438ff5f0629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NTM3MDIwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Social Media", "Digital Marketing", "Content Creation"]
    },
    {
      id: 6,
      title: "Mobile App Interface",
      category: "Web Design",
      description: "Intuitive and modern mobile app interface design for a fitness tracking application.",
      image: "https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU1MjgwMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Mobile Design", "App Interface", "User Experience"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects that showcase my design process, 
            problem-solving abilities, and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}