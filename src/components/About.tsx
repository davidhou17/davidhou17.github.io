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
                  I believe AI will change the way we learn permanently, and I'm passionate about
                  building the best interface for that shift. I'm currently a product lead at
                  <strong>Decagon</strong>, working on our education and internal AI initiatives.
                  I work on learning products and experiences that bring product enablement into
                  the platform, as well as Arc, our internal AI workspace and company brain.
                  I'm also involved in the entire learning journey for our product: from ops and
                  docs to the AI automations that power our content to leading live trainings and
                  workshops for our biggest and most strategic accounts.
                </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Previously, I was a technical writer / developer experience engineer at MongoDB,
                where I led documentation for our AI products. I also served as our team's AI technologist -- learning 
                the latest and greatest in AI tooling, building AI workflows 
                to improve productivity, and creating a culture of innovative yet responsible
                AI use. Before that, I did technical and UI/UX writing
                at New Relic and narrative journalism at Tsai CITY, where I wrote biweekly articles on 
                the entrepreneurial ecosystem at Yale and New Haven. In college, I was the Co-Editor-in-Chief 
                of the Yale Record, America's oldest humor magazine.
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
