import { Heart, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <span className="font-heading text-xl font-semibold text-foreground tracking-wide">
            Bloom & Comfort
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Shop</a>
          <a href="#" className="hover:text-primary transition-colors">Self-Care</a>
          <a href="#" className="hover:text-primary transition-colors">Our Story</a>
          <a href="#" className="hover:text-primary transition-colors">Journal</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">2</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/50 px-6 py-4 flex flex-col gap-3 font-body text-sm">
          <a href="#" className="py-2 text-muted-foreground hover:text-primary transition-colors">Shop</a>
          <a href="#" className="py-2 text-muted-foreground hover:text-primary transition-colors">Self-Care</a>
          <a href="#" className="py-2 text-muted-foreground hover:text-primary transition-colors">Our Story</a>
          <a href="#" className="py-2 text-muted-foreground hover:text-primary transition-colors">Journal</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
