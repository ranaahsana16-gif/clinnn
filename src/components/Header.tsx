import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Gem, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 left-1/2 z-50 w-[min(1180px,calc(100%-1.5rem))] -translate-x-1/2 sm:top-4">
      <div className="glass flex items-center justify-between rounded-full px-4 py-2.5 sm:px-6 sm:py-3">
        {/* Logo */}
        <NavLink 
          to="/" 
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--gradient-primary)] text-primary-foreground shadow-lux">
            <Gem className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Lumière<span className="text-teal">.</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm transition-colors ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-sm transition-colors ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-sm transition-colors ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/team" 
            className={({ isActive }) => 
              `text-sm transition-colors ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            Team
          </NavLink>
          <NavLink 
            to="/faqs" 
            className={({ isActive }) => 
              `text-sm transition-colors ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            FAQs
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-sm transition-colors ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Book Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <NavLink 
            to="/contact" 
            className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-medium sm:inline-flex"
          >
            Book a visit
          </NavLink>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu" 
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border md:hidden text-ink hover:bg-muted/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-16 left-0 right-0 z-40 rounded-3xl border border-border bg-card/95 backdrop-blur-md p-6 shadow-lux md:hidden transition-all duration-300 ease-out origin-top ${
          mobileMenuOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-4">
          <NavLink 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `text-base py-3 border-b border-border/50 transition-colors flex items-center justify-between ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            <span>Home</span>
            <ArrowRight className="h-4 w-4 opacity-45" />
          </NavLink>
          <NavLink 
            to="/services" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `text-base py-3 border-b border-border/50 transition-colors flex items-center justify-between ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            <span>Services</span>
            <ArrowRight className="h-4 w-4 opacity-45" />
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `text-base py-3 border-b border-border/50 transition-colors flex items-center justify-between ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            <span>About</span>
            <ArrowRight className="h-4 w-4 opacity-45" />
          </NavLink>
          <NavLink 
            to="/team" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `text-base py-3 border-b border-border/50 transition-colors flex items-center justify-between ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            <span>Team</span>
            <ArrowRight className="h-4 w-4 opacity-45" />
          </NavLink>
          <NavLink 
            to="/faqs" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `text-base py-3 border-b border-border/50 transition-colors flex items-center justify-between ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            <span>FAQs</span>
            <ArrowRight className="h-4 w-4 opacity-45" />
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `text-base py-3 border-b border-border/50 transition-colors flex items-center justify-between ${isActive ? 'text-ink font-medium' : 'text-muted-foreground hover:text-ink'}`
            }
          >
            <span>Contact</span>
            <ArrowRight className="h-4 w-4 opacity-45" />
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full rounded-full py-3 mt-2 text-center text-sm font-medium flex items-center justify-center gap-2"
          >
            <span>Book a visit</span>
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
