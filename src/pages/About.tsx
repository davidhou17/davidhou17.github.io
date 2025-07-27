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
                I'm a technical educator and writer passionate about translating complex topics into code and words.
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