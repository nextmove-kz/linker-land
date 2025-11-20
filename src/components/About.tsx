const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">Who we are</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              We bring your
              <br />
              vision to life.
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              Building exceptional digital products requires more than just code.
              Your architecture, strategy, and execution must align perfectly, with
              unwavering consistency -{" "}
              <span className="font-bold">but we do it all for you.</span>
            </p>
            
            <p className="text-base text-muted-foreground">
              Work directly with our team of developers knowledgeable in a wide array
              of technologies. From optimizing complex backend solutions for distributed
              systems to crafting the most intricate user experiences, our tight-knit
              team leverages collective expertise to deliver results that exceed expectations.
            </p>
            
            <p className="text-base text-muted-foreground">
              No more endless searching or mastering every technical skill yourself.
              We're your dedicated technical partner with everything you need to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
