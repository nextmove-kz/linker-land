import { Code2, Layers, RefreshCw, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Settings,
    title: "Backend Architecture",
    description:
      "Complex distributed systems demand expertise. We architect and build scalable backend solutions that handle millions of requests while maintaining performance and reliability.",
  },
  {
    icon: Layers,
    title: "Frontend & UX",
    description:
      "User experience is everything. Our team creates intricate, seamless interfaces that break barriers in interactivity, ensuring your users get the best possible experience.",
  },
  {
    icon: RefreshCw,
    title: "Project Revival",
    description:
      "Legacy systems holding you back? We specialize in breathing new life into existing projects through modern architecture, optimization, and strategic refactoring.",
  },
  {
    icon: Code2,
    title: "Technical Consulting",
    description:
      "Strategic technical guidance when you need it most. From technology selection to architecture reviews, we help you make informed decisions that align with your goals.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            No more
            <br />
            technical disasters.
          </h2>
          <p className="text-lg max-w-2xl text-muted-foreground">
            Whether you're bringing a legacy system back to life or starting fresh, 
            we deliver professional solutions that your team can actually maintain and expand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary flex items-center justify-center clip-hexagon">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
