import { Cpu, Users, BookOpen } from "lucide-react";

const glanceItems = [
  {
    icon: Cpu,
    label: "Theme",
    value: "JVM Ecosystem — Performance, Concurrency & Modern Java",
  },
  {
    icon: BookOpen,
    label: "Format",
    value: "Single-day conference, consecutive speaker sessions",
  },
  {
    icon: Users,
    label: "Target Audience",
    value: "Java/Kotlin backend engineers, architects, data engineers, students",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="font-mono text-primary text-lg block mb-2">01.</span>
        About the Event
      </h2>

      <p className="text-muted-foreground text-lg leading-relaxed text-center mb-16 max-w-3xl mx-auto">
        JVM Tech Talks Chișinău is a free, community-driven technical conference bringing together
        Java and JVM engineers in Moldova for deep-dive talks, knowledge sharing, and meaningful
        connections. This trial edition is the first step toward establishing an official Google
        Developer Group (GDG) chapter in Chișinău — one of the first in Moldova.
      </p>

      <h3 className="font-mono text-sm text-primary mb-6 text-center tracking-widest uppercase">
        Event at a Glance
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {glanceItems.map((item) => (
          <div
            key={item.label}
            className="p-6 rounded-lg bg-card border border-border card-hover"
          >
            <item.icon size={24} className="text-primary mb-3" />
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-2 text-foreground">
              {item.label}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
