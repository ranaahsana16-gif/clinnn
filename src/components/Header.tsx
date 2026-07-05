import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Gem, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    // If it's a hash link
    if (target.startsWith('#')) {
      setMobileMenuOpen(false);
      // If we are not on the homepage, go to homepage with hash
      if (location.pathname !== '/') {
        // Let React Router handle navigation first
        return;
      }
      e.preventDefault();
      const element = document.getElementById(target.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

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
        <nav className="hidden items-center gap-8 md:flex">
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
          <a 
            href={location.pathname === '/' ? '#about' : '/#about'}
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-sm text-muted-foreground transition-colors hover:text-ink"
          >
            About
          </a>
          <a 
            href={location.pathname === '/' ? '#contact' : '/#contact'}
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-sm text-muted-foreground transition-colors hover:text-ink"
          >
            Contact
          </a>
        </nav>

        {/* Book Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a 
            href={location.pathname === '/' ? '#contact' : '/#contact'}
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-medium sm:inline-flex"
          >
            Book a visit
          </a>
          
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
          <a 
            href={location.pathname === '/' ? '#about' : '/#about'}
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-base py-3 border-b border-border/50 text-muted-foreground transition-colors hover:text-ink flex items-center justify-between"
          >
            <span>About</span>
            <ArrowRight className="h-4 w-4 opacity-45" />
          </a>
          <a 
            href={location.pathname === '/' ? '#contact' : '/#contact'}
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-base py-3 border-b border-border/50 text-muted-foreground transition-colors hover:text-ink flex items-center justify-between"
          >
            <span>Contact</span>
            <ArrowRight className="h-4 w-4 opacity-45" />
          </a>
          <a 
            href={location.pathname === '/' ? '#contact' : '/#contact'}
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary w-full rounded-full py-3 mt-2 text-center text-sm font-medium flex items-center justify-center gap-2"
          >
            Book a visit
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
