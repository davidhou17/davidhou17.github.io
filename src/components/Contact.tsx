import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container-width">
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Get in Touch</h2>
        </div>
        <div className="flex items-center justify-center gap-8">
          <a href="mailto:dhou.david@gmail.com" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={24} className="text-primary" />
            </div>
          </a>
          
          <a href="https://github.com/davidhou17" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={24} className="text-primary" />
            </div>
          </a>
          
          <a href="https://linkedin.com/in/d-hou" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin size={24} className="text-primary" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;