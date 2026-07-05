import { 
  Smile, Sparkles, ShieldCheck, HeartPulse, Stethoscope, 
  Gem, Check, Clock, ArrowRight 
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Smile className="h-6 w-6" />,
      title: 'Cosmetic Dentistry',
      price: 'from $1,800',
      desc: 'Hand-crafted porcelain veneers, in-office whitening and full smile design guided by digital mock-ups you can preview before we begin.',
      bullets: ['Digital smile preview', 'Hand-layered porcelain', 'Lifetime aesthetic warranty'],
      duration: '2–4 visits',
      delay: '0ms'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Invisalign & Aligners',
      price: 'from $4,900',
      desc: 'As an Invisalign Diamond+ provider we plan every movement in 3D — so your treatment is shorter, calmer, and virtually invisible.',
      bullets: ['iTero digital scan', 'Remote check-ins', 'Refinement included'],
      duration: '6–14 months',
      delay: '100ms'
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Preventive Care',
      price: 'from $220',
      desc: 'Airflow cleanings, low-dose 3D imaging and personalised hygiene coaching to keep your smile healthy for decades.',
      bullets: ['Airflow polishing', 'Oral cancer screening', 'Custom hygiene plan'],
      duration: '60 minutes',
      delay: '0ms'
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: 'Implants & Restorative',
      price: 'from $3,600',
      desc: 'Guided-surgery implants with same-day temporaries and CAD/CAM ceramic crowns milled in our on-site lab.',
      bullets: ['Guided 3D surgery', 'Same-day temporaries', 'Ceramic or titanium'],
      duration: '1–2 visits',
      delay: '100ms'
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Pediatric Dentistry',
      price: 'from $180',
      desc: 'A dedicated suite with soft lighting, storytelling headphones and a gentle team that specialises in children under 14.',
      bullets: ["Dedicated kids' suite", 'Sedation-free comfort', 'Family plans'],
      duration: '45 minutes',
      delay: '0ms'
    },
    {
      icon: <Gem className="h-6 w-6" />,
      title: 'Prestige Smile Makeover',
      price: 'from $12,000',
      desc: 'Our signature concierge program: full-mouth aesthetic reconstruction with a personal coordinator across three curated visits.',
      bullets: ['Personal coordinator', 'Private suite', 'Chauffeur on request'],
      duration: '3 visits',
      delay: '100ms'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Intro Header Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-32" style={{ background: 'var(--gradient-hero)' }}>
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-teal-soft/60 blur-3xl animate-float"></div>
        <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl animate-float-slow"></div>
        
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-8 animate-rise">
              <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-ink">
                Our services
              </div>
              <h1 className="mt-6 text-4xl leading-[1.05] font-medium text-ink sm:text-6xl lg:text-7xl">
                Treatments,{' '}
                <span className="italic text-gradient">refined</span>
                <br className="hidden sm:block" />
                to the smallest detail.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                From a quiet cleaning to a complete smile transformation, every Lumière treatment is delivered in a private suite by specialists who care deeply about the craft.
              </p>
            </div>
            
            <div className="animate-rise lg:col-span-4" style={{ animationDelay: '120ms' }}>
              <div className="glass grid grid-cols-3 gap-4 rounded-3xl p-5 sm:p-6 bg-card/60 backdrop-blur-sm">
                <div className="text-center">
                  <div className="font-display text-2xl text-ink sm:text-3xl">6</div>
                  <div className="mt-1 text-[10px] tracking-widest text-muted-foreground uppercase">Specialties</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-ink sm:text-3xl">24h</div>
                  <div className="mt-1 text-[10px] tracking-widest text-muted-foreground uppercase">Response</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-ink sm:text-3xl">1:1</div>
                  <div className="mt-1 text-[10px] tracking-widest text-muted-foreground uppercase">Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {servicesList.map((service, index) => (
              <div key={index} className="reveal" style={{ transitionDelay: service.delay }}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lux sm:p-10">
                  <div className="absolute -top-32 -right-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60" style={{ background: 'var(--gradient-primary)' }}></div>
                  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal-soft/60 text-teal ring-1 ring-inset ring-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      {service.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h2 className="font-display text-2xl text-ink sm:text-3xl">{service.title}</h2>
                        <span className="rounded-full bg-mist px-3 py-1 text-xs tracking-wide text-ink font-medium">{service.price}</span>
                      </div>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{service.desc}</p>
                      
                      <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2 text-sm text-ink/80">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          {service.duration}
                        </div>
                        <a href="/#contact" className="group/link inline-flex items-center gap-2 text-sm font-medium text-teal cursor-pointer">
                          Book this treatment
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Pricing Info Note */}
          <div className="reveal mt-16 text-center border-t border-border/50 pt-12" style={{ transitionDelay: '0ms' }}>
            <h3 className="font-display text-xl text-ink">Transparent, tailored pricing</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Prices above are starting points. After your consultation we'll send a written plan with a fixed quote and flexible financing options — no surprises.
            </p>
            <a href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:shadow-lux">
              Request a quote
            </a>
          </div>
        </div>
      </section>

      {/* Private Consultation CTA Block */}
      <section className="relative py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="reveal animate-rise" style={{ transitionDelay: '0ms' }}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-lux sm:rounded-[2.5rem]">
              <img 
                src="/assets/hero-clinic-DQPnq-08.jpg" 
                alt="Clinic interior design" 
                loading="lazy" 
                className="absolute inset-0 h-full w-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/60 to-transparent"></div>
              
              <div className="relative grid grid-cols-1 gap-8 p-8 sm:p-14 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <div className="text-xs tracking-[0.25em] text-teal-soft uppercase">Ready when you are</div>
                  <h2 className="mt-3 font-display text-3xl text-white sm:text-5xl">Meet us for a private consultation.</h2>
                  <p className="mt-4 max-w-lg text-white/70">A calm hour with a specialist, a 3D scan, and a plan designed entirely around you.</p>
                </div>
                <div className="flex items-end lg:col-span-2 lg:justify-end">
                  <a href="/#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">
                    Reserve a consultation 
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
