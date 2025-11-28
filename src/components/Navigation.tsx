import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png?url";
import Contact from "./Contact";
const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="linker.kz logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-[#7B39ED]">Linker</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Who we are
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              What we do
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Reviews
            </button>
          </div>

          <Contact
            trigger={<Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started →</Button>}
          />
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
