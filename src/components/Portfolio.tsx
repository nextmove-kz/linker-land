const Portfolio = () => {
  const projects = [
    {
      title: "FinTech Platform Modernization",
      client: "Series B Startup",
      description: "Transformed legacy system into a scalable microservices architecture, reducing infrastructure costs by 40% while handling 10x traffic growth.",
      impact: "Supported growth from 50K to 500K users",
      tags: ["Backend", "Cloud", "Performance"]
    },
    {
      title: "Mobile-First E-Commerce",
      client: "Retail Brand",
      description: "Built responsive shopping experience from scratch with real-time inventory sync and seamless checkout, increasing mobile conversions by 65%.",
      impact: "2M+ monthly active users",
      tags: ["Frontend", "Mobile", "UX"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      client: "Enterprise SaaS",
      description: "Designed intuitive data visualization platform that makes complex metrics accessible to non-technical teams, reducing reporting time by 80%.",
      impact: "Adopted by 200+ organizations",
      tags: ["Data", "AI/ML", "Design"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Real projects, real impact
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background p-8 rounded-sm shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_0_16px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_0_24px_rgba(0,0,0,0.15)] transition-shadow">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                {project.client}
              </p>
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-6">
                <p className="text-sm font-bold text-foreground">
                  {project.impact}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
