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
                  I'm a builder and operator working at the intersection of education and AI.
                  I believe AI will change the way we learn, and I'm passionate about
                  building the best interface for that shift.
                </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                  I'm currently a product lead at{" "}
                  <a href="https://decagon.ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800 underline">
                  <strong>Decagon</strong></a>, working on our education and internal AI initiatives.
                  I work on learning products and experiences that bring product enablement into
                  the platform, as well as Arc, our internal AI workspace and company brain.
                  I'm also involved in the entire learning journey for our product: from ops and
                  docs to the AI automations that power our content to leading live trainings and
                  workshops for our biggest and most strategic accounts.
                </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Previously, I was at <strong>MongoDB</strong>, where I led documentation and developer
                experience for our AI products, including Voyage AI, Vector Search, and the MongoDB MCP Server.
                I also served as my team's AI technologist: evaluating new AI tooling, building workflows
                that made our team more productive, and creating a culture of innovative yet responsible
                AI use. Before that, I did technical and UX writing at New Relic. In college, I was
                Co-Editor-in-Chief of the Yale Record, America's oldest humor magazine.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                I currently live in NYC. Outside of work, I like to run, 
                listen to podcasts, and think about food, and often all at once. 
                Lately, I've been vibe coding and reminiscing about when I used
                to play the <a href="https://www.youtube.com/watch?v=IHRoIfBhORU" className="text-gray-600 hover:text-blue-800 underline">
                piano</a> more often. When I'm not in NYC, I'm probably
                hiking or spending time with family.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
