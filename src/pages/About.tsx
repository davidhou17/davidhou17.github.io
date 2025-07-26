import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="section-spacing">
        <div className="container-width">
          <h1 className="text-4xl md:text-5xl font-medium mb-12 text-center">
            About Me
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="text-xl leading-relaxed mb-8">
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

              <h2 className="text-2xl font-medium mb-6 text-teal-dark">My Journey</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                My career began in traditional technical writing, but I quickly discovered my passion 
                for the intersection of education and technology. Over the years, I've worked with 
                startups and established companies to create documentation strategies that don't just 
                inform—they inspire and enable action.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                What sets me apart is my ability to think like both a user and a product strategist. 
                I don't just document what exists; I help shape what should exist to best serve the 
                people who will use it.
              </p>

              <h2 className="text-2xl font-medium mb-6 text-teal-dark">What I Bring</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="text-lg leading-relaxed">
                  <strong>Technical Writing Excellence:</strong> From API documentation to user guides, 
                  I create content that developers actually want to read and use.
                </li>
                <li className="text-lg leading-relaxed">
                  <strong>Product Thinking:</strong> I understand how documentation fits into the broader 
                  product ecosystem and user journey.
                </li>
                <li className="text-lg leading-relaxed">
                  <strong>AI & EdTech Focus:</strong> Deep experience in emerging technologies and 
                  educational platforms that are shaping the future of learning.
                </li>
                <li className="text-lg leading-relaxed">
                  <strong>Cross-functional Collaboration:</strong> I work seamlessly with engineering, 
                  product, and design teams to ensure cohesive user experiences.
                </li>
              </ul>

              <p className="text-lg leading-relaxed">
                I'm excited about the future of education technology and the role that thoughtful 
                documentation and product strategy can play in making learning more accessible, 
                engaging, and effective for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;