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
                  I'm a proud generalist that works at the intersection of developer education, 
                  AI engineering, and technical documentation. In other words, I'm a builder and writer
                  that loves helping people reach their "aha!" moment. I'm passionate about 
                  how AI will change the way we learn.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Currently, I'm a technical writer at <span className="text-[#00684A]">MongoDB</span>, 
                  where I lead the documentation for our GenAI products. That is, I write 
                  both the code and the words that developers use when learning how to build AI applications with MongoDB.
                  I also serve as our team's AI technologist, which entails learning 
                  the latest and greatest in AI tooling, writing prompts to automate workflows 
                  and improve productivity, and building a culture of innovative yet responsible
                  AI use on our team.
                </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Previously, I worked at New Relic, where I did technical and UI/UX writing
                for their observability platform, and at Tsai CITY, where I did narrative 
                journalism, writing biweekly articles on the entrepreneurial ecosystem 
                at Yale and New Haven. In college, I was the Co-Editor-in-Chief 
                of the Yale Record, America's oldest humor magazine.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                I currently live in NYC. Outside of work, I like to run, 
                listen to podcasts, and think about food, and often all at once. 
                Lately, I've been vibe coding and reminiscing about when I used
                to play the <a href="https://www.youtube.com/watch?v=IHRoIfBhORU" className="text-blue-600 hover:text-blue-800 underline">
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
