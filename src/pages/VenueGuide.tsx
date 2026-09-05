import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, Car, Check, ClipboardSignature, Copy, MapPin, Navigation, ShieldCheck } from "lucide-react";

const address = "Strada Pan Halippa 6, Chișinău, Moldova";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Toro+Business+Center%2C+Pan+Halippa+6%2C+Chisinau%2C+Moldova";
const parkingSteps = [
  ["01-parking-entrance.jpg", "Enter the Toro Center parking", "Drive into the underground parking entrance. The first 2 hours are free; parking is paid after that."],
  ["02-parking-elevator.jpg", "Find the parking elevator", "After parking, follow the signs to this elevator lobby."],
  ["03-first-floor.jpg", "Go to Parter (ground floor)", "Take the elevator to Parter, the ground floor of Toro Center."],
  ["04-exit-mall.jpg", "Exit Toro Center", "Leave the mall through this exit and continue outside."],
  ["05-turn-right.jpg", "Turn right", "Once outside, turn right and walk toward the neighboring business-center entrance."],
  ["06-business-center.jpg", "Enter Toro Business Center", "You have arrived. Go inside and speak to the security personnel."],
];

const VenueGuide = () => {
  const [copied, setCopied] = useState(false);
  const copyAddress = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <header className="relative z-10 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm font-bold text-primary">GDG<span className="text-foreground">//</span>Event</Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft size={16} /> Back to event</Link>
        </div>
      </header>

      <section className="relative z-10 container max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-12">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-mono font-semibold text-primary mb-6"><Navigation size={13} /> ATTENDEE VENUE GUIDE</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">Find us at<span className="block gradient-text">Toro Business Center.</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">The GDG Event takes place on the <strong className="text-foreground">7th floor</strong>. Use this guide to get from Toro Center to the event entrance.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold hover:brightness-110"><Navigation size={18} /> Open directions <ArrowUpRight size={16} /></a>
              <button type="button" onClick={copyAddress} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border bg-card font-semibold hover:border-primary/50">{copied ? <Check size={18} className="text-primary" /> : <Copy size={18} />}{copied ? "Address copied" : "Copy address"}</button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl shadow-black/30">
              <img src="/assets/venue-guide/06-business-center.jpg" alt="Entrance to Toro Business Center" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 pt-20 bg-gradient-to-t from-black/90 to-transparent"><p className="font-bold text-white">Toro Business Center</p><p className="text-sm text-white/70">Strada Pan Halippa 6 · Floor 7</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 container max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <InfoCard icon={MapPin} label="Address" title="Strada Pan Halippa 6" detail="Chișinău, Moldova" />
          <InfoCard icon={Building2} label="Destination" title="Toro Business Center" detail="7th floor" />
          <InfoCard icon={Car} label="Parking" title="First 2 hours are free" detail="Parking is paid afterward" warning />
        </div>
      </section>

      <section className="relative z-10 container max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-2xl mb-10"><p className="font-mono text-sm text-primary mb-3">// ARRIVING BY CAR</p><h2 className="text-3xl md:text-4xl font-bold mb-4">From parking to the venue</h2><p className="text-muted-foreground leading-relaxed">Follow these landmarks in order. If you are not parking, skip ahead to the Toro Business Center entrance.</p></div>
        <div className="space-y-6">
          {parkingSteps.map(([image, title, text], index) => (
            <article key={title} className="grid md:grid-cols-[1.15fr_.85fr] rounded-2xl border border-border bg-card overflow-hidden">
              <div className="relative overflow-hidden min-h-[280px] md:min-h-[430px]"><img src={`/assets/venue-guide/${image}`} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><span className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur text-primary font-mono font-bold flex items-center justify-center border border-primary/30">{String(index + 1).padStart(2, "0")}</span></div>
              <div className="p-6 md:p-10 flex flex-col justify-center"><p className="text-xs font-mono text-primary mb-3">STEP {index + 1} OF {parkingSteps.length}</p><h3 className="text-2xl font-bold mb-3">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p>{index < parkingSteps.length - 1 && <ArrowRight className="text-primary mt-8" size={22} />}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 container max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-card p-6 md:p-10">
          <p className="font-mono text-sm text-primary mb-3">// AT RECEPTION</p><h2 className="text-3xl md:text-4xl font-bold mb-8">A quick check-in, then floor 7</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ArrivalStep icon={ShieldCheck} number="01" title="Speak to security" text="Tell the security personnel you are attending the GDG Event." />
            <ArrivalStep icon={ClipboardSignature} number="02" title="Find your name & sign" text="Find your name on the attendee list and leave your signature next to it." />
            <ArrivalStep icon={Building2} number="03" title="Take the elevator" text="Security will grant access. Take the business-center elevator to floor 7." />
          </div>
        </div>
      </section>

    </main>
  );
};

const InfoCard = ({ icon: Icon, label, title, detail, warning = false }: { icon: typeof MapPin; label: string; title: string; detail: string; warning?: boolean }) => (
  <div className={`rounded-xl border p-5 ${warning ? "border-amber-500/30 bg-amber-500/5" : "border-border bg-card"}`}><Icon className={warning ? "text-amber-400 mb-4" : "text-primary mb-4"} size={22} /><p className={`text-xs font-mono uppercase tracking-wider mb-2 ${warning ? "text-amber-400" : "text-muted-foreground"}`}>{label}</p><p className="font-semibold">{title}</p><p className="text-sm text-muted-foreground">{detail}</p></div>
);

const ArrivalStep = ({ icon: Icon, number, title, text }: { icon: typeof ShieldCheck; number: string; title: string; text: string }) => (
  <div><div className="flex items-center justify-between mb-4"><Icon className="text-primary" size={26} /><span className="font-mono text-xs text-muted-foreground">{number}</span></div><h3 className="font-bold text-lg mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></div>
);

export default VenueGuide;
