const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Writing",
      skills: ["API Documentation", "Technical Tutorials", "User Guides", "Developer Onboarding", "Content Strategy"]
    },
    {
      title: "Development & Tools",
      skills: ["Python", "Markdown", "Git", "Documentation Platforms", "Static Site Generators", "Figma"]
    },
    {
      title: "AI & Emerging Tech",
      skills: ["Generative AI Frameworks", "ML Documentation", "AI Product Development", "Prompt Engineering", "Technical Research"]
    },
    {
      title: "Product & Research",
      skills: ["User Research", "Information Architecture", "Product Strategy", "Roadmap Planning", "Cross-functional Collaboration"]
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-secondary/30">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">
          Skills & Tools
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A blend of technical writing expertise, development skills, and product thinking 
          that enables me to create exceptional documentation and educational experiences.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-teal-dark">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary text-secondary-foreground text-sm rounded-md border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;