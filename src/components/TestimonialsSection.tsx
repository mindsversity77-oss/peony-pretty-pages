import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma R.",
    rating: 5,
    text: "The lavender heating pad has completely changed my period routine. It's like a warm hug when I need it most.",
    product: "Heart Healing Pad",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text: "I bought the Bloom Care Box as a gift for my sister and she absolutely loved it. The packaging alone made her tear up!",
    product: "Bloom Care Box",
  },
  {
    name: "Lily T.",
    rating: 5,
    text: "The weighted plushie is my new comfort companion. It's so soft and the lavender scent is incredibly calming.",
    product: "Lavender Cuddle Bear",
  },
  {
    name: "Ava K.",
    rating: 4,
    text: "Beautiful quality and such a thoughtful brand. The eye pillow is now part of my nightly wind-down ritual.",
    product: "Silk Dream Mask",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            ✿ Love letters
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            What our community says
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl border border-border/50 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-primary fill-primary" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="font-body text-foreground leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-foreground">{t.name}</span>
                <span className="font-body text-xs text-muted-foreground">Purchased: {t.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
