import { NavLink } from 'react-router-dom';
import { Gem } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="border-t border-border/60 py-14 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Branding Column */}
        <div className="lg:col-span-2">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-primary)] text-primary-foreground">
              <Gem className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              Lumière<span className="text-teal">.</span>
            </span>
          </NavLink>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A private dental atelier crafting timeless smiles with equal parts science, art, and hospitality.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-xs font-semibold tracking-wider text-ink uppercase">Practice</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <NavLink className="text-sm text-muted-foreground transition-colors hover:text-ink" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="text-sm text-muted-foreground transition-colors hover:text-ink" to="/team">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink className="text-sm text-muted-foreground transition-colors hover:text-ink" to="/about#technology">
                Technology
              </NavLink>
            </li>
            <li>
              <a className="text-sm text-muted-foreground transition-colors hover:text-ink" href="#">
                Journal
              </a>
            </li>
          </ul>
        </div>

        {/* Patients Column */}
        <div>
          <h4 className="text-xs font-semibold tracking-wider text-ink uppercase">Patients</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <NavLink className="text-sm text-muted-foreground transition-colors hover:text-ink" to="/contact">
                Book online
              </NavLink>
            </li>
            <li>
              <NavLink className="text-sm text-muted-foreground transition-colors hover:text-ink" to="/faqs">
                FAQs
              </NavLink>
            </li>
            <li>
              <a className="text-sm text-muted-foreground transition-colors hover:text-ink" href="#">
                Concierge
              </a>
            </li>
            <li>
              <a className="text-sm text-muted-foreground transition-colors hover:text-ink" href="#">
                Insurance
              </a>
            </li>
            <li>
              <a className="text-sm text-muted-foreground transition-colors hover:text-ink" href="#">
                Financing
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border/60 px-6 pt-8 text-xs text-muted-foreground sm:flex-row">
        <div>© 2026 Lumière Dental. All rights reserved.</div>
        <div className="flex gap-6">
          <a className="hover:text-ink transition-colors" href="#">Privacy</a>
          <a className="hover:text-ink transition-colors" href="#">Terms</a>
          <a className="hover:text-ink transition-colors" href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
