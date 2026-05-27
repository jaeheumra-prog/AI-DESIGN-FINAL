import { useState } from "react";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const OASIS_URL = import.meta.env.VITE_OASIS_URL ?? "https://aidesign-main.vercel.app";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const goBackToShorts = () => {
    setIsMenuOpen(false);

    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "close-profile-overlay" }, "*");
      return;
    }

    if (window.history.length > 1) {
      window.history.back();
    }
  };

  const goToOasis = () => {
    setIsMenuOpen(false);
    window.location.href = OASIS_URL;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-medium text-lg">
              Lee Seung Hoe
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goBackToShorts}
              className="hidden sm:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" />
              Shorts
            </Button>
            <Button
              size="sm"
              onClick={goToOasis}
              className="hidden sm:inline-flex"
            >
              3D Lounge
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <button
              onClick={goBackToShorts}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Back to Shorts
            </button>
            <button
              onClick={goToOasis}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Go to 3D Lounge
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
