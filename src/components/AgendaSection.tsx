interface AgendaItem {
  time: string;
  title: string;
  isBreak?: boolean;
}

const agenda: AgendaItem[] = [
  { time: "11:00", title: "Doors Open & Registration" },
  { time: "11:30", title: "Opening Remarks — Abgar Simonean & Gheorghii Mosin" },
  { time: "11:45", title: "Word from Our Sponsor — Grid Dynamics" },
  {
    time: "11:50",
    title: "Igor Dumchykov — How We Built a Fraud Detection System on the Fly in 3 Days",
  },
  { time: "12:35", title: "Coffee Break ☕️", isBreak: true },
  { time: "12:50", title: "Sergiu Roibu — Spring Boot — Under the Hood Mechanics" },
  { time: "13:35", title: "Coffee Break ☕️", isBreak: true },
  {
    time: "13:50",
    title: "Sandu Nicula — Cache Me If You Can: Building Resilient Java Caching Layers",
  },
  { time: "14:35", title: "Lunch Break 🍕", isBreak: true },
  { time: "15:35", title: "Nicolae Nicolaev — Java's JIT Mechanism" },
  { time: "16:20", title: "Closing Remarks & Networking 🤝" },
];

const AgendaSection = () => (
  <section id="agenda" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="font-mono text-primary text-lg block mb-2">04.</span>
        Agenda
      </h2>

      <div className="relative pl-8 md:pl-12">
        {/* Vertical line */}
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-1">
          {agenda.map((item, i) => {
            const isTalk = !item.isBreak && i > 1 && i < agenda.length - 1;
            // Separate speaker name from title for talks
            let speaker = "";
            let talkTitle = item.title;
            if (isTalk) {
              const dashIdx = item.title.indexOf(" — ");
              if (dashIdx > -1) {
                speaker = item.title.slice(0, dashIdx);
                talkTitle = item.title.slice(dashIdx + 3);
              }
            }

            return (
              <div
                key={i}
                className={`relative flex items-start gap-4 md:gap-6 py-3 ${
                  item.isBreak ? "opacity-60" : ""
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-[-20px] md:left-[-28px] top-[18px] w-2.5 h-2.5 rounded-full border-2 ${
                    item.isBreak
                      ? "border-muted-foreground bg-background"
                      : "border-primary bg-primary"
                  }`}
                />

                <span className="font-mono text-sm text-muted-foreground w-14 shrink-0 pt-0.5">
                  {item.time}
                </span>

                <span
                  className={`text-sm leading-relaxed ${
                    item.isBreak
                      ? "text-muted-foreground italic"
                      : "text-foreground"
                  }`}
                >
                  {isTalk && speaker ? (
                    <>
                      <strong>{speaker}</strong> — {talkTitle}
                    </>
                  ) : (
                    item.title
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AgendaSection;
