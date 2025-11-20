const Reviews = () => {
  const testimonials = [
    {
      quote: "They took our vision and turned it into reality faster than we thought possible. The team understood our business goals, not just the tech requirements.",
      author: "Sarah Chen",
      role: "CEO, Healthcare Tech Startup",
      rating: 5
    },
    {
      quote: "Finally, a technical team that speaks our language. They explained complex decisions in ways our whole team could understand and get behind.",
      author: "Marcus Williams",
      role: "Product Director, Enterprise SaaS",
      rating: 5
    },
    {
      quote: "Our previous rebuild attempt failed. Linker came in, audited everything, and built it right. We've been running smoothly for 18 months with zero major issues.",
      author: "Elena Rodriguez",
      role: "Founder, E-Learning Platform",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
            Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted by founders and teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted p-8 rounded-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
