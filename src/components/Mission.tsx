import { Button } from "@/components/ui/button";
import Contact from "./Contact";

const Mission = () => {
  return (
    <section id="mission" className="py-20 px-6 bg-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium text-muted-foreground">Our Mission</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              With our expertise, we've built
              <br />
              solutions that scale
              <br />
              from prototype to
              <br />
              production.
            </h2>
          </div>

          <div className="bg-background p-12 rounded-sm shadow-xl space-y-8">
            <h3 className="text-3xl md:text-4xl font-light text-muted-foreground italic">
              Now it's your turn.
            </h3>
            
            <div className="space-y-4">
              <p className="text-lg font-bold">Linker Team</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Technical Partners
              </p>
            </div>

            <div className="pt-4">
              <Contact 
                trigger={
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                    Get Started →
                  </Button>
                }
              />
              <p className="text-sm text-muted-foreground mt-3">
                Book your free discovery call
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
