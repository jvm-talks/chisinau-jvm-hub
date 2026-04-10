import { ExternalLink } from "lucide-react";

const SponsorSection = () => (
  <section id="sponsor" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="font-mono text-primary text-lg block mb-2">05.</span>
        Special Thanks to Our Sponsor
      </h2>

      <div className="p-6 md:p-8 rounded-lg bg-card border border-border card-hover flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Logo */}
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border border-border shrink-0">
          <img src="/assets/sponsor/logo.png" alt="Grid Dynamics" className="w-full h-full object-contain p-4" />
        </div>

        {/* Text */}
        <div className="flex flex-col text-center md:text-left">
          <a
            href="https://www.griddynamics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors justify-center md:justify-start"
          >
            Grid Dynamics <ExternalLink size={18} />
          </a>

          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-2xl">
            Grid Dynamics is a leading digital engineering company specialising in big data, cloud, and AI solutions for Fortune 1000 enterprises. With engineering centres across multiple countries, Grid Dynamics combines deep technical expertise with a culture of innovation — making them a natural partner for grassroots developer communities.
          </p>

          <p className="text-primary font-mono text-sm mt-4 italic">
            Proudly supporting Moldova's engineering community
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SponsorSection;