import { Mail, Github, Linkedin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-12">
          
          
        </div>
        
        <div className="flex items-center justify-center gap-8">
          <a href="mailto:alex@example.com" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group">
            <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={28} className="text-primary" />
            </div>
            
          </a>
          
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group">
            <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={28} className="text-primary" />
            </div>
            
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors group">
            <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin size={28} className="text-primary" />
            </div>
            
          </a>
        </div>
      </div>
    </section>;
};
export default Contact;