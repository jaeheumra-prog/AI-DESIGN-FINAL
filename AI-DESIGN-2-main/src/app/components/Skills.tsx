import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { Palette, Monitor, Printer, Zap, Users, Lightbulb } from "lucide-react";

export function Skills() {
  const technicalSkills = [
    { name: "Spring Boots", level: 70 },
    { name: "SQL(DB Engineering)",level: 65},
    { name: "Python", level: 90 },
    { name: "Embedded System Engineering", level: 80},
    { name: "AI proficiency", level: 70},
    { name: "Java Script", level: 60},
    { name: "Literary Writing", level: 85 },
    { name: "Adobe After Effects", level: 35 },
    { name: "HTML/CSS", level: 75 },
    { name: "Davinci Resolve", level: 90 },
    { name: "Blender", level: 50},
    { name: "Unity", level: 80},
    { name: "Eng", level: 60},
    { name: "Jpn", level: 30}
  ];

  const designAreas = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Brand Identity",
      description: "Creating cohesive visual identities that capture brand essence and resonate with target audiences."
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Digital Design",
      description: "Designing intuitive user interfaces and engaging digital experiences across web and mobile platforms."
    },
    {
      icon: <Printer className="h-8 w-8 text-primary" />,
      title: "Print Design",
      description: "Crafting impactful print materials from business cards to large format displays with attention to production details."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Motion Graphics",
      description: "Bringing static designs to life with smooth animations and engaging motion graphics for digital platforms."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "User Experience",
      description: "Focusing on user-centered design principles to create intuitive and accessible design solutions."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Creative Strategy",
      description: "Developing creative concepts that align with business goals and effectively communicate brand messages."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            다양한 분야의 안목과 기술을 가지고 있습니다. 융복합적 및 창의적 사고가 가능하며,
            팀프로젝트 및 Build to Order 프로젝트의 경험이 있습니다.            
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium">Technical Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Design Areas */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium"> Specializations</h3>
            <div className="grid gap-6">
              {designAreas.map((area, index) => (
                <Card key={index} className="p-6 border-0 shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      {area.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{area.title}</h4>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-8">Additional Strengths</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Creative Problem Solving",
              "Project Management",
              "Artistic Eye&Tasts",
              "Team Collaboration",
              "Deadline Management",
              "Convergent Thinking",
              "Trend Analysis",
              "Quality Assurance"
            ].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-accent rounded-full text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}