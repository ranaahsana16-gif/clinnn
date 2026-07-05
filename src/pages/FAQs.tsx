import { useState } from 'react';
import { HelpCircle, ChevronDown, PhoneCall } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border border-border bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-lux">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left text-ink hover:text-teal font-display font-medium text-lg sm:text-xl transition-colors cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown 
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-teal' : ''
          }`} 
        />
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-60 border-t border-border/40' : 'max-h-0'
        }`}
      >
        <p className="p-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsList = [
    {
      question: 'What makes Lumière different from a standard clinic?',
      answer: 'Lumière operates as a private dental atelier. We treat only one patient at a time, eliminating waiting times, rushed appointments, and lobbies crowded with overlapping bookings. Our suites are designed with soft lighting, premium acoustics, and comforting amenities to feel closer to a luxury boutique spa than a clinical space.'
    },
    {
      question: 'Do you accept dental insurance?',
      answer: "While we do not participate directly as an in-network provider, we work with most major PPO insurance plans. Our concierge team handles all of your insurance paperwork, submitting claims on your behalf and assisting you to maximize your out-of-network reimbursement benefits. We believe in complete transparency and will provide a detailed estimate before any treatment begins."
    },
    {
      question: 'What is your pricing and do you offer financing?',
      answer: "Lumière is dedicated to meticulous, bespoke craftsmanship using the finest dental ceramics and biocompatible implants. Our starting prices are displayed transparently in our services section. Following your initial consultation, you will receive a fixed written plan with no hidden charges. We offer flexible, interest-free financing plans (via CareCredit and customized in-house payment schedules) designed around your cashflow."
    },
    {
      question: 'What comfort options do you offer for anxious patients?',
      answer: "Overcoming dental anxiety is a core pillar of our concierge philosophy. Every room features aromatherapy diffuse oils, noise-canceling Bose headphones, and overhead streaming screens. For physical comfort, we provide oral sedation, nitrous oxide, and biocompatible local anesthetics delivered gently. Every procedure is performed at your own pace, with scheduled pause signals."
    },
    {
      question: 'What is a Prestige Smile Makeover?',
      answer: "The Prestige Smile Makeover is our signature smile reconstruction program. Over three curated visits, you work directly with Dr. Élise Moreau and a dedicated patient coordinator. We design and preview your smile in 3D digital simulation, prepare the teeth using minimally invasive techniques, and place custom, hand-layered porcelain veneers. The program includes concierge travel arrangements and follow-up styling sessions."
    },
    {
      question: 'How many visits do porcelain veneers require?',
      answer: "Typically, veneers require 2 to 3 visits. The first visit is a comprehensive 3D scan and smile design mockup where you preview the proposed design. The second visit is preparation and placing beautiful temporary restorations. The final visit is placing and styling your hand-crafted, hand-layered porcelain veneers."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 sm:pt-44 sm:pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-12">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-teal-soft/60 blur-3xl animate-float"></div>
        <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl animate-float-slow"></div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="reveal max-w-3xl" style={{ transitionDelay: '0ms' }}>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-ink">
              Common questions
            </div>
            <h1 className="mt-6 text-4xl leading-[1.05] font-medium text-ink sm:text-6xl lg:text-7xl">
              Your questions,{' '}
              <span className="italic text-gradient">answered.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
              Find detailed explanations regarding our treatment philosophies, insurance handling, comfort amenities, and cosmetic procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion List Section */}
      <section className="relative py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="flex flex-col gap-4 reveal" style={{ transitionDelay: '100ms' }}>
            {faqsList.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Contact Block */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 reveal" style={{ transitionDelay: '0ms' }}>
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lux sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 text-teal">
                  <HelpCircle className="h-6 w-6" />
                  <span className="text-xs font-semibold tracking-wider uppercase">Still have questions?</span>
                </div>
                <h3 className="font-display text-2xl text-ink font-medium mt-3 sm:text-3xl">
                  Talk to our patient concierge.
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  We are happy to jump on a brief call or chat via WhatsApp to answer any specific questions about veneer options, finance terms, or schedules.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <a 
                  href="/contact" 
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium"
                >
                  <PhoneCall className="h-4 w-4" />
                  Contact concierge
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
