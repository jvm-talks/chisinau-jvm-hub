import { User } from "lucide-react";

interface Speaker {
  name: string;
  role?: string;
  talk: string;
  tags: string[];
}

const speakers: Speaker[] = [
  {
    name: "Igor Dumchykov",
    role: "Senior Staff Software Engineer",
    talk: "How We Built a Fraud Detection System on the Fly in 3 Days",
    tags: ["Spring Boot", "Spring AI", "PostgreSQL", "PGVector", "RAG", "Gemini LLM"],
  },
  {
    name: "Sergiu Roibu",
    role: "Staff Software Engineer",
    talk: "Spring Boot — Under the Hood Mechanics",
    tags: ["Spring Boot", "Spring Internals"],
  },
  {
    name: "Sandu Nicula",
    talk: "Cache Me If You Can: Building Resilient Java Caching Layers",
    tags: ["Caching", "Java"],
  },
  {
    name: "Nicolae Nicolaev",
    talk: "Java's JIT Mechanism",
    tags: ["JIT", "JVM", "Performance"],
  },
];

const SpeakersSection = () => (
  <section id="speakers" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="font-mono text-primary text-lg block mb-2">03.</span>
        Our Speakers
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {speakers.map((s) => (
          <div
            key={s.name}
            className="p-6 rounded-lg bg-card border border-border card-hover flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                <User size={28} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{s.name}</h3>
                {s.role && (
                  <p className="text-sm text-muted-foreground">{s.role}</p>
                )}
              </div>
            </div>
            <p className="text-foreground font-medium mb-3">{s.talk}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-mono bg-secondary border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpeakersSection;
