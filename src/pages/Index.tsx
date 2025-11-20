import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhatYouGet from "@/components/WhatYouGet";
import Mission from "@/components/Mission";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhatYouGet />
      <Mission />
      <Portfolio />
      <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
