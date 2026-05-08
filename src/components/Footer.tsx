const hashtags = [
  "#Java", "#JVM", "#ModernJava", "#Concurrency",
  "#Performance", "#GDG", "#Chisinau", "#TechCommunity",
];

const Footer = () => (
  <footer className="py-20 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <span
        aria-disabled="true"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-muted text-muted-foreground font-bold text-lg cursor-not-allowed border border-border mb-8"
      >
        Registration Closed
      </span>

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
