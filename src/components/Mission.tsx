import { Button } from "@/components/ui/button";
import Contact from "./Contact";
import teamImage from "@/assets/team-collaboration.jpg";

const Mission = () => {
  return (
    <section id="mission" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[6fr_4fr] gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 pt-8 relative">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              With our expertise, we've built solutions that scale from prototype to production.
            </h2>

            {/* Overlapping Card */}
            <div className="bg-background p-6 md:p-8 rounded-sm shadow-2xl mt-8 relative md:absolute md:-right-16 md:top-auto md:w-[calc(100%+6rem)] z-10">
              <h3 className="text-2xl md:text-4xl font-light text-muted-foreground italic mb-6">
                Now it's your turn.
              </h3>
              
              <div className="space-y-1 mb-6">
                <p className="text-base font-bold">Linker Team</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Technical Partners
                </p>
              </div>

              <Contact 
                trigger={
                  <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 w-full md:w-auto">
                    Get Started →
                  </Button>
                }
              />
              <p className="text-xs text-muted-foreground mt-2">
                Book your free discovery call
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-24 md:mt-0">
            <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden">
              <img 
                src={teamImage} 
                alt="Professional development team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
