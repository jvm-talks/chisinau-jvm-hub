import { ArrowRight } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeg963FCVQ3xkO9KCMbArTbklCP5BqeX2z4uThrNzWAuedJxA/viewform?usp=publish-editor";

const hashtags = [
  "#Java", "#JVM", "#ModernJava", "#Concurrency",
  "#Performance", "#GDG", "#Chisinau", "#TechCommunity",
];

const Footer = () => (
  <footer className="py-20 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all mb-8"
      >
        Register Now <ArrowRight size={20} />
      </a>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {hashtags.map((h) => (
          <span key={h} className="text-xs font-mono text-muted-foreground">
            {h}
          </span>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-2">
        Part of the initiative to establish GDG Chișinău
      </p>
      <p className="text-xs text-muted-foreground">
        © 2026 JVM Tech Talks Chișinău
      </p>
    </div>
  </footer>
);

export default Footer;
