import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lifestyle.jpg";
import DecorativeHearts from "@/components/DecorativeHearts";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cozy self-care flat lay with heating pad, tea, candle and flowers"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      <DecorativeHearts />

      <div className="relative container mx-auto px-6">
        <div className="max-w-xl">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 animate-fade-in-up">
            ✿ Comfort meets wellness
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Gentle care for{' '}
            <span className="italic text-gradient-rose">every</span>{' '}
            cycle
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Thoughtfully designed comfort essentials to nurture your body and soul — because you deserve softness in every season.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Peony line art SVG */}
      <svg className="absolute bottom-0 right-0 w-80 h-80 text-primary/10 hidden lg:block" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M100 180c-20-30-60-50-60-90C40 50 70 30 100 50c30-20 60 0 60 40 0 40-40 60-60 90z" />
        <path d="M100 180c-10-20-30-40-30-70 0-30 15-45 30-30 15-15 30 0 30 30 0 30-20 50-30 70z" />
        <path d="M85 100c-5-15 0-35 15-35s20 20 15 35" />
        <circle cx="100" cy="80" r="5" />
      </svg>
    </section>
  );
};

export default HeroSection;
