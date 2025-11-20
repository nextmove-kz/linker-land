import { Button } from "@/components/ui/button";
import Contact from "./Contact";
import teamImage from "@/assets/team-collaboration.jpg";

const Mission = () => {
  return (
    <section id="mission" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 pt-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              With our expertise, we've built solutions that scale from prototype to production.
            </h2>
          </div>

          {/* Right Column - Image with Overlapping Card */}
          <div className="relative">
            <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden">
              <img 
                src={teamImage} 
                alt="Professional development team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlapping Card */}
            <div className="absolute -bottom-8 -left-8 md:-left-16 right-8 bg-background p-8 md:p-12 rounded-sm shadow-2xl">
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
        </div>
      </div>
    </section>
  );
};

export default Mission;
