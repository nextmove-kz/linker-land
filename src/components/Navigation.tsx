import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png?url";
import Contact from "./Contact";
import { type Locale, locales } from "@/lib/i18n";

interface NavigationProps {
  locale: Locale;
  translations: typeof import('@/i18n/en.json')['navigation'];
}

const Navigation = ({ locale, translations: t }: NavigationProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const switchLanguage = (newLocale: Locale) => {
    const currentPath = window.location.pathname;
    // Remove existing locale prefix if present
    let pathWithoutLang = currentPath.replace(/^\/(en|ru)/, '') || '/';
    // Ensure path starts with /
    if (!pathWithoutLang.startsWith('/')) {
      pathWithoutLang = '/' + pathWithoutLang;
    }
    // Build new path with locale prefix
    const newPath = pathWithoutLang === '/' 
      ? `/${newLocale}/` 
      : `/${newLocale}${pathWithoutLang}`;
    window.location.href = newPath;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-1.5 md:px-6 py-4">
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
              {t.whoWeAre}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {t.whatWeDo}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {t.portfolio}
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {t.reviews}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {locales.map((lang) => (
                <button
                  key={lang}
                  onClick={() => switchLanguage(lang)}
                  className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                    locale === lang
                      ? "text-primary underline"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <Contact
              trigger={<Button className="bg-primary text-primary-foreground hover:bg-primary/90">{t.getStarted}</Button>}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
