import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import productPlushie from "@/assets/product-plushie.jpg";
import productHeatpad from "@/assets/product-heatpad.jpg";
import productEyepillow from "@/assets/product-eyepillow.jpg";
import productGiftset from "@/assets/product-giftset.jpg";
import productBlanket from "@/assets/product-blanket.jpg";

const products = [
  {
    name: "Lavender Cuddle Bear",
    price: "$42",
    tag: "Bestseller",
    image: productPlushie,
    description: "Weighted plushie with dried lavender",
  },
  {
    name: "Heart Healing Pad",
    price: "$38",
    tag: "New",
    image: productHeatpad,
    description: "Lavender & flaxseed heating pad",
  },
  {
    name: "Silk Dream Mask",
    price: "$28",
    image: productEyepillow,
    description: "Aromatherapy eye pillow",
  },
  {
    name: "Bloom Care Box",
    price: "$68",
    tag: "Gift Set",
    image: productGiftset,
    description: "Complete self-care ritual set",
  },
  {
    name: "Petal Weighted Blanket",
    price: "$89",
    image: productBlanket,
    description: "Ultra-soft dusty rose blanket",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            ✿ Curated for you
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Comfort Essentials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full font-body">
                    {product.tag}
                  </span>
                )}
                <button className="absolute top-4 right-4 w-9 h-9 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background">
                  <Heart className="w-4 h-4 text-primary" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xl font-semibold text-foreground">{product.price}</span>
                  <Button variant="soft" size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
