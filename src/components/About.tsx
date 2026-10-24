import React from "react";

const About = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center md:text-left">About Me</h2>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                I'm a product builder and operator working at the intersection of education and AI.
                I believe AI will change the way we learn, and I'm passionate about building the
                best interface for that shift.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I'm currently at <a href="https://decagon.ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800 underline"><strong>Decagon</strong></a>, building AI products that help our customers learn the
                platform and our internal teams work more effectively. On the customer side, I work
                on everything that helps users get the most out of Decagon: building interactive
                learning products, creating tools and automations that power our content, and
                running workshops and onsites for our most strategic accounts. Internally, I'm
                building Arc, our AI workspace and company brain, which helps everyone at Decagon
                ramp faster and be more productive, from learning the platform to building agents
                and running deployments.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Previously, I was at <strong>MongoDB</strong>, where I led documentation for our AI
                products (Voyage AI, Vector Search, MongoDB MCP Server), building tutorials, sample
                apps, and code for developers. I also served as my team's AI technologist:
                evaluating new AI tooling, building workflows that made our team more productive,
                and creating a culture of innovative yet responsible AI use. Before that, I did
                technical and UX writing at New Relic. In college, I was Co-Editor-in-Chief of the
                Yale Record, America's oldest humor magazine.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I currently live in NYC. Outside of work, I like to run, listen to podcasts, and
                think about food, and often all at once. Lately, I've been vibe coding, bird
                watching, and reminiscing about when I used to play the <a href="https://www.youtube.com/watch?v=IHRoIfBhORU" className="text-gray-600 hover:text-blue-800 underline">piano</a> more often. When I'm
                not in NYC, I'm probably hiking or spending time with family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
