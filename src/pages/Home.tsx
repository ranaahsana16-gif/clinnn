import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ArrowRight, Star, Smile, Sparkles, ShieldCheck, 
  HeartPulse, Stethoscope, Gem, Check, Phone, MapPin, Clock 
} from 'lucide-react';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Cosmetic consultation',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      alert('Please fill out the required fields.');
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: 'Cosmetic consultation',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-32" style={{ background: 'var(--gradient-hero)' }}>
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-teal-soft/60 blur-3xl animate-float"></div>
        <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl animate-float-slow"></div>
        
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 animate-rise">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
              </span>
              Concierge dentistry — since 2008
            </div>
            
            <h1 className="mt-6 text-4xl leading-[1.05] font-medium text-ink sm:text-6xl lg:text-7xl">
              A quieter kind of{' '}
              <span 
                className="italic text-gradient gradient-animated" 
                style={{
                  backgroundImage: 'linear-gradient(120deg, oklch(0.35 0.09 230), oklch(0.55 0.11 200), oklch(0.35 0.09 230))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                dental care.
              </span>
            </h1>
            
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Lumière is a private practice where meticulous craftsmanship meets hospitality. We treat one patient at a time, in rooms designed to feel closer to a spa than a clinic.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <a href="#contact" className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium sm:px-7 sm:py-3.5">
                Reserve a consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <NavLink to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-card sm:px-6 sm:py-3.5">
                Explore treatments
              </NavLink>
            </div>
            
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 sm:mt-14 sm:gap-6">
              <div className="reveal" style={{ transitionDelay: '0ms' }}>
                <div className="font-display text-2xl font-medium text-ink sm:text-3xl">17+</div>
                <div className="mt-1 text-[10px] tracking-wide text-muted-foreground uppercase sm:text-xs">Years of practice</div>
              </div>
              <div className="reveal" style={{ transitionDelay: '120ms' }}>
                <div className="font-display text-2xl font-medium text-ink sm:text-3xl">12k</div>
                <div className="mt-1 text-[10px] tracking-wide text-muted-foreground uppercase sm:text-xs">Smiles restored</div>
              </div>
              <div className="reveal" style={{ transitionDelay: '240ms' }}>
                <div className="font-display text-2xl font-medium text-ink sm:text-3xl">4.98</div>
                <div className="mt-1 text-[10px] tracking-wide text-muted-foreground uppercase sm:text-xs">Patient rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Images Block */}
          <div className="relative lg:col-span-5">
            <div className="relative animate-rise" style={{ animationDelay: '150ms' }}>
              <div className="absolute -inset-6 rounded-[2rem] bg-[var(--gradient-primary)] opacity-20 blur-2xl animate-float-slow"></div>
              <img 
                src="/assets/hero-clinic-DQPnq-08.jpg" 
                alt="Interior of Lumière Dental clinic" 
                width="1600" 
                height="1200" 
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lux ring-1 ring-white/60"
              />
              
              {/* Floating Badge 1 (Loved by Patients) */}
              <div className="glass absolute -top-4 -left-3 flex items-center gap-3 rounded-2xl px-3 py-2.5 animate-float sm:-top-6 sm:-left-6 sm:px-4 sm:py-3">
                <div className="flex -space-x-2">
                  <img src="/assets/smile-patient-CQjEV75t.jpg" alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9" />
                  <img src="/assets/dentist-qrqZnThk.jpg" alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9" />
                  <div className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-teal text-[10px] font-semibold text-primary-foreground sm:h-9 sm:w-9">+9k</div>
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-teal">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <div className="text-[10px] text-muted-foreground sm:text-xs">Loved by patients</div>
                </div>
              </div>
              
              {/* Floating Badge 2 (Next Opening) */}
              <div className="glass absolute -right-2 bottom-6 rounded-2xl px-3 py-2.5 animate-float-slow sm:-right-4 sm:bottom-8 sm:px-4 sm:py-3">
                <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Next opening</div>
                <div className="mt-1 font-display text-base text-ink sm:text-lg">Thu · 10:30 AM</div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-teal sm:text-xs">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal"></span> Dr. Élise Moreau
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Marquee Banner */}
        <div className="mx-auto mt-20 max-w-7xl px-5 sm:mt-24 sm:px-6">
          <div className="overflow-hidden border-t border-border/60 pt-8">
            <div className="flex w-max animate-marquee gap-16 text-xs tracking-[0.25em] whitespace-nowrap text-muted-foreground uppercase">
              <span>American Dental Association</span>
              <span>Invisalign Diamond+</span>
              <span>ISO 9001 Certified</span>
              <span>Forbes Health 2024</span>
              <span>Awwwards Nominee</span>
              <span>Best of SF 2023</span>
              {/* Repeated for loop */}
              <span>American Dental Association</span>
              <span>Invisalign Diamond+</span>
              <span>ISO 9001 Certified</span>
              <span>Forbes Health 2024</span>
              <span>Awwwards Nominee</span>
              <span>Best of SF 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal max-w-2xl" style={{ transitionDelay: '0ms' }}>
              <div className="text-xs tracking-[0.25em] text-teal uppercase">Our services</div>
              <h2 className="mt-3 text-3xl font-medium text-ink sm:text-5xl">
                Precision treatments, <span className="italic text-gradient">softly delivered.</span>
              </h2>
            </div>
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              <p className="max-w-md text-muted-foreground">
                Every treatment plan is composed around you — your health, your comfort, and the smile you've always imagined.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              {
                icon: <Smile className="h-5 w-5" />,
                title: 'Cosmetic Dentistry',
                desc: "Veneers, whitening and smile design tailored to your features.",
                num: '01',
                delay: '0ms'
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: 'Invisalign & Aligners',
                desc: 'Discreet, digital-precision orthodontics for adults.',
                num: '02',
                delay: '80ms'
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: 'Preventive Care',
                desc: 'Gentle cleanings, hygiene plans and digital screenings.',
                num: '03',
                delay: '160ms'
              },
              {
                icon: <HeartPulse className="h-5 w-5" />,
                title: 'Implants & Restorative',
                desc: 'Titanium and ceramic implants placed with surgical care.',
                num: '04',
                delay: '240ms'
              },
              {
                icon: <Stethoscope className="h-5 w-5" />,
                title: 'Pediatric Dentistry',
                desc: 'A calm, playful room designed just for young patients.',
                num: '05',
                delay: '320ms'
              },
              {
                icon: <Gem className="h-5 w-5" />,
                title: 'Prestige Smile Makeover',
                desc: 'A signature full-mouth aesthetic program over 3 visits.',
                num: '06',
                delay: '400ms'
              }
            ].map((service, index) => (
              <div key={index} className="reveal" style={{ transitionDelay: service.delay }}>
                <NavLink to="/services" className="group block relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lux sm:p-8">
                  <div className="absolute inset-x-0 -top-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70" style={{ background: 'var(--gradient-primary)' }}></div>
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-soft/60 text-teal ring-1 ring-inset ring-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {service.icon}
                    </div>
                    <h3 className="mt-6 font-display text-xl text-ink">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-teal opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                    <div className="absolute top-0 right-0 text-xs text-muted-foreground/50">{service.num}</div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 flex justify-center" style={{ transitionDelay: '0ms' }}>
            <NavLink to="/services" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:shadow-lux">
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden py-20 sm:py-28 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative" style={{ transitionDelay: '0ms' }}>
            <img 
              src="/assets/dentist-qrqZnThk.jpg" 
              alt="Dr. Élise Moreau at Lumière Dental" 
              width="1024" 
              height="1280" 
              loading="lazy" 
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lux"
            />
            <img 
              src="/assets/equipment-G57BKPjR.jpg" 
              alt="Modern dental equipment" 
              width="1280" 
              height="960" 
              loading="lazy" 
              className="absolute -bottom-10 -right-6 hidden aspect-[4/3] w-2/3 rounded-2xl object-cover shadow-lux ring-4 ring-background sm:block animate-float-slow"
            />
            <div className="glass absolute -left-3 top-8 rounded-2xl px-4 py-3 animate-float sm:-left-6 sm:top-10 sm:px-5 sm:py-4">
              <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Board certified</div>
              <div className="mt-1 font-display text-sm text-ink sm:text-base">DDS · MSc Prosthodontics</div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <div className="text-xs tracking-[0.25em] text-teal uppercase">About the clinic</div>
            <h2 className="mt-3 text-3xl font-medium text-ink sm:text-5xl">
              A practice built on <span className="italic text-gradient">restraint</span> and craftsmanship.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Founded by Dr. Élise Moreau, Lumière blends European aesthetics with the most advanced dental technology. Our team is intentionally small so that every patient receives complete, unhurried attention.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Single-suite appointments — never rushed, never overlapping.',
                '3D digital imaging and same-day ceramic restorations.',
                'Sedation, aromatherapy, and noise-cancelling comfort options.',
                'Transparent pricing with financing designed around you.'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-soft text-teal">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-ink/80">{benefit}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="relative py-20 sm:py-28 bg-background">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="reveal max-w-2xl" style={{ transitionDelay: '0ms' }}>
            <div className="text-xs tracking-[0.25em] text-teal uppercase">The Lumière journey</div>
            <h2 className="mt-3 text-3xl font-medium text-ink sm:text-5xl">
              Four quiet steps to a <span className="italic text-gradient">confident smile.</span>
            </h2>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {[
              {
                num: '01',
                title: 'Consultation',
                desc: 'A 60-minute discovery visit with digital imaging and a bespoke plan.',
                delay: '0ms'
              },
              {
                num: '02',
                title: 'Design',
                desc: 'Preview your future smile in 3D before a single procedure begins.',
                delay: '100ms'
              },
              {
                num: '03',
                title: 'Treatment',
                desc: 'Executed by specialists in a serene, single-patient environment.',
                delay: '200ms'
              },
              {
                num: '04',
                title: 'Aftercare',
                desc: 'Concierge follow-ups, at-home kits, and lifetime hygiene support.',
                delay: '300ms'
              }
            ].map((step, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: step.delay }}>
                <div className="group relative h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lux sm:p-8">
                  <div className="font-display text-4xl text-teal-soft transition-colors group-hover:text-teal">{step.num}</div>
                  <h3 className="mt-6 font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="reveal" style={{ transitionDelay: '0ms' }}>
            <div className="relative overflow-hidden rounded-[2rem] p-8 shadow-lux sm:rounded-[2.5rem] sm:p-16" style={{ background: 'linear-gradient(135deg, oklch(0.28 0.06 230), oklch(0.35 0.09 210))' }}>
              <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-teal/30 blur-3xl animate-float-slow"></div>
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float"></div>
              
              <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-0.5 text-teal-soft">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 font-display text-xl leading-relaxed text-white/95 sm:text-3xl">
                    "I've never felt calmer at a dental visit. The suite feels like a boutique hotel, and my veneers look impossibly natural — my friends only notice that I look happier."
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <img 
                      src="/assets/smile-patient-CQjEV75t.jpg" 
                      alt="Camille R." 
                      loading="lazy" 
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" 
                    />
                    <div>
                      <div className="font-medium text-white">Camille R.</div>
                      <div className="text-xs tracking-wide text-white/60 uppercase">Patient · Veneers</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="glass-dark rounded-2xl p-6 text-white">
                    <div className="text-[10px] tracking-widest text-white/60 uppercase">Patient satisfaction</div>
                    <div className="mt-2 font-display text-4xl sm:text-5xl">98.7%</div>
                    <p className="mt-3 text-sm text-white/70">Independent survey across 2,400 patients treated in 2024.</p>
                    <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-teal-soft to-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="reveal" style={{ transitionDelay: '0ms' }}>
            <div className="grid grid-cols-1 gap-10 rounded-[2rem] border border-border bg-card p-6 shadow-lux sm:rounded-[2.5rem] sm:p-12 lg:grid-cols-2">
              <div>
                <div className="text-xs tracking-[0.25em] text-teal uppercase">Reserve a visit</div>
                <h2 className="mt-3 text-3xl font-medium text-ink sm:text-5xl">
                  Begin your <span className="italic text-gradient">Lumière</span> journey.
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Share a few details and our concierge will confirm your first consultation within one business day.
                </p>
                
                <div className="mt-8 space-y-4 text-sm sm:mt-10">
                  <div className="flex items-center gap-3 text-ink/80">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-soft/60 text-teal">
                      <Phone className="h-4 w-4" />
                    </span>
                    +1 (415) 555-0180
                  </div>
                  <div className="flex items-center gap-3 text-ink/80">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-soft/60 text-teal">
                      <MapPin className="h-4 w-4" />
                    </span>
                    214 Marina Boulevard, San Francisco
                  </div>
                  <div className="flex items-center gap-3 text-ink/80">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-soft/60 text-teal">
                      <Clock className="h-4 w-4" />
                    </span>
                    Mon–Sat · By appointment only
                  </div>
                </div>
              </div>

              {/* Appointment Request Form */}
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 rounded-3xl bg-mist p-5 sm:grid-cols-2 sm:p-8">
                {formSubmitted ? (
                  <div className="sm:col-span-2 flex flex-col items-center justify-center py-12 text-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-teal-soft text-teal mb-4 animate-bounce">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-medium text-ink">Bespoke Request Received</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                      Our concierge is reviewing your request. We will reach out to you within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs tracking-wide text-muted-foreground uppercase">First name</label>
                      <input 
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Camille" 
                        className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-ink outline-none transition focus:ring-2 focus:ring-teal/50" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wide text-muted-foreground uppercase">Last name</label>
                      <input 
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Reyes" 
                        className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-ink outline-none transition focus:ring-2 focus:ring-teal/50" 
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs tracking-wide text-muted-foreground uppercase">Email</label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="camille@example.com" 
                        className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-ink outline-none transition focus:ring-2 focus:ring-teal/50" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wide text-muted-foreground uppercase">Phone</label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 415 000 0000" 
                        className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-ink outline-none transition focus:ring-2 focus:ring-teal/50" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wide text-muted-foreground uppercase">Interest</label>
                      <select 
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-ink outline-none focus:ring-2 focus:ring-teal/50"
                      >
                        <option value="Cosmetic consultation">Cosmetic consultation</option>
                        <option value="Invisalign">Invisalign</option>
                        <option value="Implants">Implants</option>
                        <option value="Preventive care">Preventive care</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs tracking-wide text-muted-foreground uppercase">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4} 
                        placeholder="Tell us a little about your smile goals…" 
                        className="mt-2 w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-teal/50"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-primary sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium cursor-pointer">
                      Request appointment 
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
