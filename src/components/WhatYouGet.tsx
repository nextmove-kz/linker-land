import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Latest Technology",
    description: "We build with cutting-edge tools and frameworks that stand the test of time.",
  },
  {
    title: "Comprehensive Documentation",
    description: "Every project includes thorough documentation, making onboarding and expansion seamless.",
  },
  {
    title: "Code Quality",
    description: "Clean, maintainable code that follows industry best practices and standards.",
  },
  {
    title: "Sustainable Optimization",
    description: "Performance built to scale without technical debt holding you back.",
  },
  {
    title: "Built to Expand",
    description: "Architecture designed for growth - add features confidently without fear.",
  },
  {
    title: "Tools That Help",
    description: "Instruments and systems that work with you, not against you.",
  },
];

const WhatYouGet = () => {
  return (
    <section id="what-you-get" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">What You Get</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Built to last
            <br />
            5+ years.
          </h2>
          <p className="text-lg max-w-2xl text-muted-foreground">
            Unlike the freelancers and AI tools that left you with unmaintainable mess, 
            we deliver projects built to industry standards. Your next developer will 
            thank you instead of rebuilding from scratch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
