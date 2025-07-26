import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Youtube } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-spacing">
      <div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">
          Resume & Links
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Download my resume or connect with me on professional platforms 
          to learn more about my experience and recent work.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            size="lg" 
            className="bg-teal hover:bg-teal-dark text-primary min-w-[200px]"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group"
          >
            <Github size={24} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group"
          >
            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group"
          >
            <Youtube size={24} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;