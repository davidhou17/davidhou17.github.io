import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-medium mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">alex@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Let's Chat</h4>
                  <p className="text-muted-foreground">
                    I'm always open to discussing edtech product roles, 
                    technical writing projects, or collaboration opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Drop me a line and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-teal hover:bg-teal-dark text-primary"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;