import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = '923085121676'; // Pakistani format: country code 92, number 3085121676
  const message = 'Hello! I would like to inquire about booking a consultation at Lumière Dental.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group cursor-pointer"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Tooltip */}
      <span 
        className={`bg-ink/90 text-white text-xs font-medium px-3.5 py-2 rounded-full border border-white/10 shadow-lux backdrop-blur-sm transition-all duration-300 transform origin-right ${
          hovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95 pointer-events-none'
        }`}
      >
        Chat with us
      </span>

      {/* Button Wrapper with pulsing shadows */}
      <div 
        className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-lux transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 hover:brightness-105 active:scale-95"
        style={{
          backgroundColor: '#25D366',
          boxShadow: hovered 
            ? '0 20px 40px -10px rgba(37, 211, 102, 0.4), 0 0 0 4px rgba(37, 211, 102, 0.15)' 
            : '0 10px 30px -10px rgba(37, 211, 102, 0.35)',
        }}
      >
        {/* Pulsing ring */}
        <span 
          className="absolute inset-0 rounded-full animate-ping opacity-30" 
          style={{ 
            animationDuration: '2s', 
            border: '2px solid #25D366',
            backgroundColor: '#25D366'
          }}
        ></span>

        {/* WhatsApp SVG Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor" 
          className="relative transition-transform duration-300 group-hover:rotate-6"
        >
          <path d="M12.004 2C6.482 2 2 6.482 2 12.004c0 1.848.502 3.58 1.378 5.084L2 22l5.088-1.336a9.96 9.96 0 0 0 4.916 1.34c5.522 0 10.004-4.482 10.004-10.004C22.008 6.482 17.526 2 12.004 2zm0 1.662c4.606 0 8.342 3.738 8.342 8.342 0 4.606-3.736 8.342-8.342 8.342a8.3 8.3 0 0 1-4.262-1.17l-.306-.182-3.176.834.848-3.1-.2-.318a8.3 8.3 0 0 1-1.246-4.408c0-4.604 3.738-8.342 8.342-8.342zm-3.6 3.65c-.2 0-.328.026-.474.076-.148.048-.48.232-.594.464-.112.23-.232.556-.232 1.096s.398 1.064.454 1.138c.056.076.776 1.222 1.896 2.052 1.12.83 1.542.922 1.824.93.284.006.61-.06.744-.196.136-.134.198-.38.29-.516.09-.136.184-.114.33-.06.148.056.942.444 1.104.524.162.082.272.122.312.188.04.068.04.394-.122.852-.162.458-.816.742-1.128.776-.312.036-.61.054-.922-.046s-1.848-.52-3.088-1.63c-1.24-1.11-1.922-2.358-2.072-2.614-.15-.256-.016-.396.112-.524.116-.114.256-.3.384-.448.128-.148.172-.252.256-.42.084-.168.042-.316-.02-.452-.064-.136-.576-1.398-.79-1.902-.214-.504-.448-.426-.61-.432h-.474z" />
        </svg>
      </div>
    </a>
  );
}
