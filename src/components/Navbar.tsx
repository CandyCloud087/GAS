import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BW</span>
            </div>
            <span className="text-xl font-bold">BlinkWatch</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("produto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Produto
            </button>
            <button
              onClick={() => scrollToSection("comprar")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Comprar
            </button>
            <button
              onClick={() => scrollToSection("empresas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Para Empresas
            </button>
            <button
              onClick={() => scrollToSection("assinaturas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Assinaturas
            </button>
            <Button onClick={() => scrollToSection("contato")}>
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("produto")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Produto
            </button>
            <button
              onClick={() => scrollToSection("comprar")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Comprar
            </button>
            <button
              onClick={() => scrollToSection("empresas")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Para Empresas
            </button>
            <button
              onClick={() => scrollToSection("assinaturas")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Assinaturas
            </button>
            <Button onClick={() => scrollToSection("contato")} className="w-full">
              Contato
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
