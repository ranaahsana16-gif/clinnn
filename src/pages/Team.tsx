import { GraduationCap, Award, Calendar } from 'lucide-react';
import dentistImg from '../assets/dentist-qrqZnThk.jpg';
import smilePatientImg from '../assets/smile-patient-CQjEV75t.jpg';

export default function Team() {
  const teamMembers = [
    {
      img: dentistImg,
      name: 'Dr. Élise Moreau',
      role: 'Founder & Chief Prosthodontist',
      bio: 'Dr. Moreau has over 17 years of private clinical experience. She completed her dental training at Lyon University, followed by an MSc in Prosthodontics in San Francisco. Her clinical focus is hand-crafted porcelain veneers and complex aesthetic restorations.',
      credential: 'DDS, MSc Prosthodontics',
      spec: 'Cosmetic Dentistry & Smile Design',
      delay: '0ms'
    },
    {
      img: smilePatientImg, // Reusing existing assets for layout consistency
      name: 'Dr. Marc Laurent',
      role: 'Restorative & Implant Specialist',
      bio: 'Dr. Laurent specializes in surgical implant placements and computer-guided restorative dentistry. He leverages advanced 3D scanning and computer-aided milling to deliver same-day temporary restorations with surgical precision.',
      credential: 'DDS, Board Certified Implantologist',
      spec: 'Guided Implantology & Oral Surgery',
      delay: '100ms'
    },
    {
      img: dentistImg, // Reusing dentist image for layout consistency
      name: 'Camille Reyes',
      role: 'Concierge Patient Coordinator',
      bio: 'Camille manages patient visits, financing plans, and bespoke hospitality services. With a background in luxury hotel management, she ensures that every patient receives unhurried, comfortable, and boutique-style care.',
      credential: 'BSc Hospitality Management',
      spec: 'Patient Relations & Financing',
      delay: '200ms'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 sm:pt-44 sm:pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-12">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-teal-soft/60 blur-3xl animate-float"></div>
        <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl animate-float-slow"></div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="reveal max-w-3xl" style={{ transitionDelay: '0ms' }}>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-ink">
              Our specialists
            </div>
            <h1 className="mt-6 text-4xl leading-[1.05] font-medium text-ink sm:text-6xl lg:text-7xl">
              Meet our quiet{' '}
              <span className="italic text-gradient">artisans.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
              We are an intentionally small, highly specialized team dedicated to delivering clinical perfection in a peaceful, single-suite environment.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="reveal h-full" style={{ transitionDelay: member.delay }}>
                <article className="group h-full flex flex-col rounded-[2.5rem] border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lux">
                  {/* Portrait */}
                  <div className="overflow-hidden rounded-3xl aspect-[4/5] relative">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 glass rounded-xl px-3 py-1.5 text-[10px] tracking-wide text-ink font-semibold uppercase">
                      {member.credential}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-6 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl text-ink font-medium">{member.name}</h3>
                    <p className="text-xs text-teal font-medium tracking-wide uppercase mt-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed flex-1">{member.bio}</p>
                    
                    <div className="mt-6 pt-6 border-t border-border/60 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-ink/80">
                        <GraduationCap className="h-4 w-4 text-teal shrink-0" />
                        <span>{member.spec}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-ink/80">
                        <Award className="h-4 w-4 text-teal shrink-0" />
                        <span>Concierge Excellence Award</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="relative py-12">
        <div className="mx-auto max-w-4xl text-center px-5 reveal" style={{ transitionDelay: '0ms' }}>
          <h2 className="font-display text-3xl text-ink font-medium sm:text-4xl">
            Want to discuss your <span className="italic text-gradient">smile goals?</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Book a private, one-on-one session with Dr. Élise Moreau to design a bespoke treatment plan.
          </p>
          <a href="/contact" className="btn-primary mt-8 group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium">
            Book consultation
            <Calendar className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  );
}
