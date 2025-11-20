const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">Who we are</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              We know you've
              <br />
              been burned
              <br />
              before.
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              You've hired freelancers who vanished mid-project. You've seen AI tools 
              generate code that looked good but collapsed under real use.{" "}
              <span className="font-bold">You've inherited projects so fragile that 
              adding a single feature breaks everything.</span>
            </p>
            
            <p className="text-base text-muted-foreground">
              We're different. Linker.kz is a Kazakhstan-based team of expert developers 
              who build systems that actually last. We write documentation. We follow 
              standards. We create architecture that welcomes change instead of fighting it.
            </p>
            
            <p className="text-base text-muted-foreground">
              When we hand over a project, your team can actually work with it. 
              No mysteries. No hacks. Just solid, professional engineering that serves 
              your business for years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
