import { Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border bg-card">
      <div className="container-width py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">© 2025 David Hou.</div>
          
          <a href="https://linkedin.com/in/d-hou" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-teal-dark transition-colors">
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>;
};
export default Footer;