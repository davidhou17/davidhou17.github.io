import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on edtech products, developer education, 
            or technical documentation? I'd love to hear about your project.
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-8">
          <a
            href="mailto:alex@example.com"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group"
          >
            <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={28} className="text-primary" />
            </div>
            <span className="text-sm font-medium">Email</span>
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group"
          >
            <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={28} className="text-primary" />
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group"
          >
            <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin size={28} className="text-primary" />
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;