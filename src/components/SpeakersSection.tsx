interface Speaker {
  name: string;
  role?: string;
  talk: string;
  bio: string;
  tags: string[];
  photo: string;
  companyLogo?: string;
}

const speakers: Speaker[] = [
  {
    name: "Igor Dumchykov",
    role: "Senior Staff Software Engineer @Grid Dynamics",
    bio: "Seasoned engineer with deep expertise in building production-grade systems at scale. Specialises in Spring ecosystem and cloud-native architectures.",
    talk: "How We Built a Fraud Detection System on the Fly in 3 Days",
    tags: ["Spring Boot", "Spring AI", "PostgreSQL", "PGVector", "RAG", "Gemini LLM"],
    photo: "/assets/speakers/igor.jpg",
    companyLogo: "/assets/sponsor/GD_logo_white_SVG.svg",
  },
  {
    name: "Sergiu Roibu",
    role: "Staff Software Engineer @Grid Dynamics",
    bio: "Backend engineer passionate about understanding what happens beneath the abstractions. Focused on Spring internals and JVM performance.",
    talk: "Spring Boot — Under the Hood Mechanics",
    tags: ["Spring Boot", "Spring Internals"],
    photo: "/assets/speakers/serghei.jpg",
    companyLogo: "/assets/sponsor/GD_logo_white_SVG.svg",
  },
  {
    name: "Sandu Nicula",
    role: "Senior Software Engineer @Klarna",
    bio: "Java engineer with hands-on experience designing resilient, high-throughput systems. Enthusiast of caching strategies and distributed architecture patterns.",
    talk: "Cache Me If You Can: Building Resilient Java Caching Layers",
    tags: ["Caching", "Java"],
    photo: "/assets/speakers/sandu.jpg",
    companyLogo: "/assets/companies/yopeso.svg",
  },
  {
    name: "Nicolae Nicolaev",
    role: "Senior Java Developer @MAIB",
    bio: "JVM enthusiast focused on performance engineering and compiler optimisation. Enjoys digging into the internals of how Java actually runs.",
    talk: "Java's JIT Mechanism",
    tags: ["JIT", "JVM", "Performance"],
    photo: "/assets/speakers/nicolae.png",
    companyLogo: "/assets/companies/maib.png",
  },
];

const SpeakersSection = () => (
  <section id="speakers" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="font-mono text-primary text-lg block mb-2">03.</span>
        Our Speakers
      </h2>

      <div className="flex flex-col gap-8">
        {speakers.map((s) => (
          <div
            key={s.name}
            className="relative p-6 md:p-8 rounded-lg bg-card border border-border card-hover flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start"
          >
            {s.companyLogo && (
              <img
                src={s.companyLogo}
                alt="Company logo"
                className="absolute top-4 right-4 h-8 w-auto object-contain opacity-70"
              />
            )}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-border shrink-0">
              <img src={s.photo} alt={s.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col text-center md:text-left">
              <h3 className="font-bold text-xl md:text-2xl">{s.name}</h3>
              {s.role && (
                <p className="text-sm text-muted-foreground mt-1">{s.role}</p>
              )}
              <p className="text-foreground font-medium text-lg mt-3">{s.talk}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
                {s.bio}
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpeakersSection;