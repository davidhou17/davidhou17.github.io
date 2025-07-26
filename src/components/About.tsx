const About = () => {
  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              I'm a technical writer passionate about making complex technology accessible 
              through clear, user-focused documentation and educational content.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              With a background spanning developer relations, AI product development, and 
              educational technology, I specialize in creating content that bridges the gap 
              between technical complexity and user understanding.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Currently exploring opportunities in <span className="text-teal-dark font-medium">edtech 
              product roles</span> where I can combine my technical writing expertise with 
              product strategy to build learning experiences that truly serve developers and educators.
            </p>
          </div>
          
          <div className="border-l-4 border-teal pl-6 bg-card p-6 rounded-r-lg">
            <p className="text-muted-foreground italic">
              "The best documentation doesn't just explain how something works—it shows 
              why it matters and helps users achieve their goals."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;