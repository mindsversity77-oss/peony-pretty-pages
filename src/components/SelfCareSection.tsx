import { Flower2, Sparkles, Moon } from "lucide-react";

const features = [
  {
    icon: Flower2,
    title: "Botanical Blends",
    description: "Every product is infused with natural botanicals — lavender, chamomile, and rose — for soothing aromatherapy.",
  },
  {
    icon: Sparkles,
    title: "Mindful Design",
    description: "Crafted with intention. Each piece is designed to bring a moment of calm to your daily self-care ritual.",
  },
  {
    icon: Moon,
    title: "Cycle Syncing",
    description: "Our collections are curated to support you through every phase — from rest days to power days.",
  },
];

const SelfCareSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            ✿ Why Bloom & Comfort
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground max-w-lg mx-auto">
            Wellness woven into every detail
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfCareSection;
