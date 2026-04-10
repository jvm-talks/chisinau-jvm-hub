import { User } from "lucide-react";

interface Organiser {
  name: string;
  telegram: string;
  telegramHandle: string;
  linkedin: string;
}

const organisers: Organiser[] = [
  {
    name: "Abgar Simonean",
    telegram: "https://t.me/whitsby",
    telegramHandle: "@whitsby",
    linkedin: "https://linkedin.com/in/abgar-simonean",
  },
  {
    name: "Gheorghii Mosin",
    telegram: "https://t.me/GeorgeTheBlob",
    telegramHandle: "@GeorgeTheBlob",
    linkedin: "https://linkedin.com/in/gheorghiimosin",
  },
];

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const OrganisersSection = () => (
  <section id="contact" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="font-mono text-primary text-lg block mb-2">06.</span>
        Meet the Organisers
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {organisers.map((o) => (
          <div
            key={o.name}
            className="p-6 rounded-lg bg-card border border-border card-hover text-center"
          >
            <div className="w-20 h-20 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-muted-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-1">{o.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">Organiser</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href={o.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <TelegramIcon /> {o.telegramHandle}
              </a>
              <a
                href={o.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OrganisersSection;
