import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-24 bg-accent/40">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          ✿ Join the bloom
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Gentle updates, delivered softly
        </h2>
        <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
          Be the first to know about new comfort drops, self-care tips, and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="rounded-full bg-background border-border h-12 px-5 font-body"
          />
          <Button variant="hero" size="lg" className="whitespace-nowrap">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
