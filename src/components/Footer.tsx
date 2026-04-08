import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="font-heading text-lg font-semibold text-foreground">Bloom & Comfort</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Gentle wellness essentials designed for the modern woman. Because comfort is not a luxury.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Heat Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Weighted Comfort</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Bloom & Comfort. Made with love.
          </p>
          <div className="flex gap-6 font-body text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
