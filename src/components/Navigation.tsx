import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    label: 'About',
    href: '/about',
    isExternal: true
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const handleNavClick = (href: string, isExternal?: boolean) => {
    if (isExternal) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="container-width py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })} className="text-xl font-medium text-primary hover:text-teal-dark transition-colors">Home</button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href, item.isExternal)} className="text-muted-foreground hover:text-teal-dark transition-colors">
                {item.label}
              </button>)}
            <ThemeToggle />
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden mt-4 py-4 bg-background border border-border rounded-lg shadow-lg">
            {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href, item.isExternal)} className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-teal-dark hover:bg-secondary/50 transition-colors">
                {item.label}
              </button>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;