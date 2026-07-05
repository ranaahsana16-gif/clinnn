import React, { useState } from 'react';
import { Phone, MapPin, Clock, Check, ArrowRight, Star } from 'lucide-react';

export default function Contact() {
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
    <div className="min-h-screen bg-background pt-32 pb-20 sm:pt-44 sm:pb-32">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pb-12">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-teal-soft/60 blur-3xl animate-float"></div>
        <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl animate-float-slow"></div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="reveal max-w-3xl" style={{ transitionDelay: '0ms' }}>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-ink">
              Reserve a consultation
            </div>
            <h1 className="mt-6 text-4xl leading-[1.05] font-medium text-ink sm:text-6xl lg:text-7xl">
              Begin your <span className="italic text-gradient">Lumière</span> journey.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
              Share a few details about your smile goals and our dedicated patient concierge will confirm your first consultation within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-10 rounded-[2.5rem] border border-border bg-card p-6 shadow-lux sm:p-12 lg:grid-cols-2">
            
            {/* Contact Details Column */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-xs tracking-[0.25em] text-teal uppercase">Get in touch</div>
                <h3 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">Practice Atelier</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
                  We look forward to welcoming you into our calm, single-suite dental atelier. Please reach out to arrange custom travel options or PPO insurance estimates.
                </p>
                
                <div className="mt-8 space-y-4 text-sm sm:mt-10">
                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/40 hover:shadow-soft transition-all">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-soft/60 text-teal">
                      <Phone className="h-4 w-5" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Phone Support</div>
                      <div className="text-base text-ink font-medium mt-0.5">+1 (415) 555-0180</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/40 hover:shadow-soft transition-all">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-soft/60 text-teal">
                      <MapPin className="h-4 w-5" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Our Location</div>
                      <div className="text-base text-ink font-medium mt-0.5">214 Marina Boulevard, San Francisco</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/40 hover:shadow-soft transition-all">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-soft/60 text-teal">
                      <Clock className="h-4 w-5" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Opening Hours</div>
                      <div className="text-base text-ink font-medium mt-0.5">Mon–Sat · By appointment only</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating review block */}
              <div className="hidden lg:flex items-center gap-4 border-t border-border/60 pt-8 mt-8">
                <div className="flex items-center gap-0.5 text-teal">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  Approved 4.98/5 score based on 2,400+ patient reviews.
                </div>
              </div>
            </div>

            {/* Form Column */}
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
      </section>
    </div>
  );
}
