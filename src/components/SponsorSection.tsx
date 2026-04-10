import { ExternalLink } from "lucide-react";

const SponsorSection = () => (
  <section id="sponsor" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="font-mono text-primary text-lg block mb-2">05.</span>
        Special Thanks to Our Sponsor
      </h2>

      <div className="inline-block p-10 rounded-lg bg-card border border-border card-hover">
        <div className="w-48 h-16 mx-auto mb-6 bg-secondary rounded flex items-center justify-center">
          <span className="font-mono text-lg text-muted-foreground">Grid Dynamics</span>
        </div>
        <a
          href="https://www.griddynamics.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          Grid Dynamics <ExternalLink size={16} />
        </a>
        <p className="text-muted-foreground text-sm mt-3">
          Proudly supporting Moldova's engineering community
        </p>
      </div>
    </div>
  </section>
);

export default SponsorSection;
