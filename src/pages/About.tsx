import { Check, ShieldCheck, Cpu, Star } from 'lucide-react';
import heroClinicImg from '../assets/hero-clinic-DQPnq-08.jpg';
import smilePatientImg from '../assets/smile-patient-CQjEV75t.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 sm:pt-44 sm:pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-12">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-teal-soft/60 blur-3xl animate-float"></div>
        <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl animate-float-slow"></div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="reveal max-w-3xl" style={{ transitionDelay: '0ms' }}>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-ink">
              About our practice
            </div>
            <h1 className="mt-6 text-4xl leading-[1.05] font-medium text-ink sm:text-6xl lg:text-7xl">
              A quiet revolution in{' '}
              <span className="italic text-gradient">dental care.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
              Lumière was founded to strip away the clinical coldness, rushed scheduling, and anxiety associated with traditional dentist visits. We deliver world-class dental craftsmanship paired with unhurried hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 reveal" style={{ transitionDelay: '0ms' }}>
              <img 
                src={heroClinicImg} 
                alt="Lumière clinical space interior" 
                className="rounded-[2rem] aspect-[4/5] object-cover shadow-lux w-full"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 reveal" style={{ transitionDelay: '120ms' }}>
              <div className="text-xs tracking-[0.25em] text-teal uppercase">Our Philosophy</div>
              <h2 className="font-display text-3xl font-medium text-ink sm:text-5xl">
                One patient at a time. <span className="italic text-gradient">Zero compromise.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We intentionally limit our practice to a small group of patients so that we can dedicate our absolute focus to one visitor at a time. You will never wait in a crowded lobby, and your appointments will never overlap.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                {[
                  {
                    title: 'Restraint & Aesthetics',
                    desc: 'We design smiles that respect your natural facial features, aiming for a look that is natural, authentic, and uniquely yours.'
                  },
                  {
                    title: 'Absolute Comfort',
                    desc: 'Aromatherapy, noise-canceling headphones, warm blankets, and custom sedation options are tailored for your peace of mind.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl border border-border bg-card/40">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-soft text-teal">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <h4 className="font-display text-lg text-ink">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-16 sm:py-24 bg-mist/40 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto reveal" style={{ transitionDelay: '0ms' }}>
            <div className="text-xs tracking-[0.25em] text-teal uppercase">Modern Atelier</div>
            <h2 className="mt-3 text-3xl font-medium text-ink sm:text-5xl">
              Advanced dental <span className="italic text-gradient">technology.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Science and art come together in our fully integrated digital lab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
            {[
              {
                icon: <Cpu className="h-6 w-6" />,
                title: 'CAD/CAM Same-Day Restorations',
                desc: 'Crowns and inlays are precision-milled in our on-site laboratory, completing in one visit what usually takes weeks.'
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: 'Ultra-Low Dose 3D Imaging',
                desc: 'Digital 3D screenings expose you to up to 90% less radiation while giving us surgical accuracy in treatment planning.'
              },
              {
                icon: <Cpu className="h-6 w-6" />,
                title: 'Discreet iTero 3D Scans',
                desc: 'Say goodbye to messy dental molds. Our scanners capture perfect 3D digital impressions in seconds.'
              }
            ].map((tech, idx) => (
              <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className="group relative h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lux">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-soft/60 text-teal ring-1 ring-inset ring-white transition-transform duration-500 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ink">{tech.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 reveal" style={{ transitionDelay: '0ms' }}>
          <div className="relative overflow-hidden rounded-[2rem] p-8 shadow-lux sm:rounded-[2.5rem] sm:p-16" style={{ background: 'linear-gradient(135deg, oklch(0.28 0.06 230), oklch(0.35 0.09 210))' }}>
            <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-teal/30 blur-3xl animate-float-slow"></div>
            
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-0.5 text-teal-soft">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-display text-xl leading-relaxed text-white/95 sm:text-3xl">
                "The entire clinic is designed to put you at ease. There are no clinical smells, no loud drills, and Dr. Moreau takes the time to walk you through every step in a calm, soothing voice."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img 
                  src={smilePatientImg} 
                  alt="Reviewer Camille R." 
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" 
                />
                <div>
                  <div className="font-medium text-white">Camille R.</div>
                  <div className="text-xs tracking-wide text-white/60 uppercase">Cosmetic Dentistry Patient</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
