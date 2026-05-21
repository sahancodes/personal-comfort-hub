import { Link } from "react-router-dom";
import { Wind } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-cool text-primary-foreground">
              <Wind className="h-5 w-5" />
            </span>
            ACE
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Adaptive Climate Engine: personal comfort for buildings with a brain.
            Plug into any BMS, delight every occupant, cut HVAC energy.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/technology" className="hover:text-foreground">Technology</Link></li>
            <li><Link to="/buildings" className="hover:text-foreground">For Buildings</Link></li>
            <li><Link to="/deck" className="hover:text-foreground">Pitch Deck</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/investors" className="hover:text-foreground">Investors</Link></li>
            <li><a href="mailto:hello@ace.energy" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adaptive Climate Engine. All rights reserved.
      </div>
    </footer>
  );
}
