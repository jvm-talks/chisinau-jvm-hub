import { MapPin, Clock, Building } from "lucide-react";

const VenueSection = () => (
  <section id="venue" className="py-24 section-fade">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="font-mono text-primary text-lg block mb-2">02.</span>
        Venue
      </h2>

      {/* Photo + Details */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
        {/* Placeholder photo */}
        <div className="rounded-lg overflow-hidden border border-border bg-secondary flex items-center justify-center aspect-[4/3] md:aspect-auto">
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <Building size={48} />
            <span className="font-mono text-sm">Venue photo placeholder</span>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div className="p-6 rounded-lg bg-card border border-border flex-1">
            <h3 className="text-2xl font-bold mb-1">Tekwill</h3>
            <p className="text-primary font-mono text-sm mb-2">Frontend Hall</p>
            <p className="text-muted-foreground text-sm mb-5 italic">
              Chișinău's leading innovation hub and coworking space
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Strada Alexandru cel Bun 51, Chișinău, Moldova</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Clock size={16} className="shrink-0 text-primary" />
                <span>
                  Doors open at{" "}
                  <strong className="text-foreground">9:00 AM</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-border flex-1 min-h-[200px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8!2d28.8277!3d47.0245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c33e8849a23%3A0x83e300c2026cc63c!2sTekwill!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tekwill location"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VenueSection;
