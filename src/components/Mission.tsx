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
            <div className="bg-background p-8 md:p-12 rounded-sm shadow-2xl mt-12 relative md:absolute md:-right-24 md:top-auto md:w-[calc(100%+8rem)] z-10">
              <h3 className="text-3xl md:text-5xl font-light text-muted-foreground italic mb-8">
                Now it's your turn.
              </h3>
              
              <div className="space-y-1 mb-8">
                <p className="text-lg font-bold">Linker Team</p>
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
              <p className="text-sm text-muted-foreground mt-3">
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
