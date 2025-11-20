import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Your project
            <br />
            won't fail
            <br />
            <span className="italic font-light">this time.</span>
          </h1>
          
          <div className="max-w-2xl space-y-4">
            <p className="text-lg text-foreground">
              Burned by freelancers who disappear? Tired of AI-generated code that breaks?{" "}
              <span className="font-bold">
                We build projects that actually work — and keep working for years.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              Get Started →
            </Button>
            <p className="text-sm text-muted-foreground self-center">
              Book your free discovery call
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
