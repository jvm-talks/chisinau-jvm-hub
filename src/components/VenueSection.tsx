import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const VenueSection = () => (
  <section id="venue" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="font-mono text-primary text-lg block mb-2">02.</span>
        Venue
      </h2>

      {/* Photo + Details */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
        <div className="rounded-lg overflow-hidden border border-border bg-secondary aspect-[4/3] md:aspect-auto">
          <img src="/assets/venue-guide/06-business-center.jpg" alt="Toro Business Center entrance" className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div className="p-6 rounded-lg bg-card border border-border flex-1">
            <h3 className="text-2xl font-bold mb-1">Toro Business Center</h3>
            <p className="text-primary font-mono text-sm mb-2">7th floor</p>
            <p className="text-muted-foreground text-sm mb-5 italic">
              Next to Toro Center
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Strada Pan Halippa 6, Chișinău, Moldova</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Clock size={16} className="shrink-0 text-primary" />
                <span>
                  Doors open at{" "}
                  <strong className="text-foreground">11:00 AM</strong>
                </span>
              </div>
            </div>

            <Link
              to="/venue-guide"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View attendee venue guide <ArrowRight size={16} />
            </Link>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-border flex-1 min-h-[200px]">
            <iframe
              src="https://www.google.com/maps?q=Toro+Business+Center,+Pan+Halippa+6,+Chișinău,+Moldova&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toro Business Center — Strada Pan Halippa 6, Chișinău"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VenueSection;
