import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container-width flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image on the left */}
        <div className="w-full md:w-5/12">
          <img 
            src="/my-notion-face-transparent.png" 
            alt="Profile" 
            className="max-w-full h-auto"
          />
        </div>

        {/* Text content on the right center */}
        <div className="w-full md:w-7/12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            <TypeAnimation
              sequence={[
                'Hi, I\'m ',
                500,
                'Hi, I\'m David',
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={1}
              cursor={false}
            />
          </h1>
          
          <p className="text-xl md:text-xl text-muted-foreground mb-8 leading-relaxed">
            I work at the intersection of{" "}
            <span className="text-teal-dark font-medium">developer education</span>,{" "}
            <span className="text-teal-dark font-medium">AI engineering</span>, and{" "}
            <span className="text-teal-dark font-medium">technical documentation</span>
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={scrollToAbout} 
              className="w-fit font-medium text-foreground dark:text-foreground transition-all duration-300 hover:scale-105"
              style={{ 
                borderWidth: '2px',
                borderColor: 'currentColor', 
                borderStyle: 'dashed', 
                borderRadius: '4px',
                transform: 'rotate(-1deg)',
                padding: '8px 20px',
                position: 'relative',
                background: 'transparent',
                boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => {
                const isDarkMode = document.documentElement.classList.contains('dark');
                e.currentTarget.style.background = isDarkMode ? '#374151' : '#f3f4f6'; // gray-800 for dark, gray-100 for light
              }}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              onMouseDown={(e) => {
                const isDarkMode = document.documentElement.classList.contains('dark');
                e.currentTarget.style.background = isDarkMode ? '#1f2937' : '#e5e7eb'; // gray-900 for dark, gray-200 for light
              }}
              onMouseUp={(e) => {
                const isDarkMode = document.documentElement.classList.contains('dark');
                e.currentTarget.style.background = isDarkMode ? '#374151' : '#f3f4f6'; // gray-800 for dark, gray-100 for light
              }}
            >
              More about me
            </button>
            
            <div className="flex items-center gap-3 ml-2">
              <a href="mailto:dhou.david@gmail.com" className="text-foreground/70 hover:text-teal transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://github.com/davidhou17" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-teal transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/d-hou" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-teal transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={scrollToContact} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal hover:text-teal-dark transition-colors" aria-label="Scroll to contact section">
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;