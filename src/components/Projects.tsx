import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, BookOpen, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Documentation Framework",
      description: "Developed a comprehensive framework for documenting AI/ML workflows, including model training, deployment, and monitoring processes.",
      category: "Technical Documentation",
      icon: <Bot className="w-6 h-6 text-teal" />,
      link: "#",
      tags: ["Documentation", "AI/ML", "Developer Experience"]
    },
    {
      title: "Developer Education Platform",
      description: "Created interactive learning modules and documentation for a developer platform, increasing user engagement by 40%.",
      category: "Educational Content",
      icon: <BookOpen className="w-6 h-6 text-teal" />,
      link: "#",
      tags: ["Education", "Interactive Content", "User Experience"]
    },
    {
      title: "API Documentation Redesign",
      description: "Led the complete redesign of API documentation, implementing user research insights and modern documentation patterns.",
      category: "Product Documentation",
      icon: <FileText className="w-6 h-6 text-teal" />,
      link: "#",
      tags: ["API Design", "User Research", "Information Architecture"]
    },
    {
      title: "Technical Writing Style Guide",
      description: "Established organization-wide writing standards and created tools for maintaining consistency across all technical content.",
      category: "Content Strategy",
      icon: <FileText className="w-6 h-6 text-teal" />,
      link: "#",
      tags: ["Style Guide", "Content Strategy", "Team Processes"]
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">
          Projects & Case Studies
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of technical writing and documentation projects that showcase 
          my approach to making complex information accessible and actionable.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 mb-2">
                    {project.icon}
                    <span className="text-sm font-medium text-teal-dark">
                      {project.category}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-teal-light text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;