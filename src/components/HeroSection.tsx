import { Calendar } from "lucide-react";

const facts = ["FREE ENTRY", "1-DAY EVENT", "4 SPEAKERS", "50–60 ATTENDEES"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Background grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-lg md:text-xl text-foreground mb-8 font-mono font-bold">
        <Calendar size={20} className="text-primary" />
        <span>May 16, 2026 — Chișinău, Moldova</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-2">
        <span className="text-glow">JVM Tech Talks</span>
      </h1>
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-primary mb-4">
        Chișinău
      </h2>
      <p className="font-mono text-sm md:text-base text-muted-foreground tracking-widest uppercase mb-6">
        // Trial Edition
      </p>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        Moldova has world-class engineers.{" "}
        <span className="text-foreground font-medium">What it needs is a stage.</span>
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {facts.map((fact) => (
          <span
            key={fact}
            className="px-4 py-2 rounded-md bg-secondary border border-border text-sm font-mono font-medium text-secondary-foreground"
          >
            {fact}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <span
          aria-disabled="true"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-muted text-muted-foreground font-bold text-lg cursor-not-allowed border border-border"
        >
          Registration Closed
        </span>
        <p className="text-xs text-muted-foreground">
          Free of charge — open to all engineers and enthusiasts
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
