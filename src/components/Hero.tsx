import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative">
      <div className="container-width text-center">
        <div className="w-24 h-24 bg-teal rounded-full mx-auto mb-8 flex items-center justify-center">
          <div className="text-2xl font-medium text-primary">✍️</div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
          Hi, I'm <span className="font-medium">David</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Technical writer at the intersection of{" "}
          <span className="text-teal-dark font-medium">developer education</span>,{" "}
          <span className="text-teal-dark font-medium">AI engineering</span>, and{" "}
          <span className="text-teal-dark font-medium">technical documentation</span>
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I help teams build better products through clear communication, 
          user-centered documentation, and strategic technical content.
        </p>
        
        <Button onClick={scrollToAbout} variant="outline" size="lg" className="border-teal text-teal hover:bg-teal hover:text-primary">
          Learn More About Me
        </Button>
      </div>
      
      <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal hover:text-teal-dark transition-colors" aria-label="Scroll to about section">
        <ChevronDown size={32} />
      </button>
    </section>;
};
export default Hero;