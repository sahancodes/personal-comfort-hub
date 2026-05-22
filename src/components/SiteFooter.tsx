import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src="/brand/ace-logo-horizontal.svg?v=9"
            alt="Adaptive Climate Engine"
            className="h-auto w-full max-w-[340px] object-contain"
          />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Edge-based human-centric BMS middleware for legacy buildings. Personal comfort,
            smarter buildings and lower HVAC energy waste.
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
            <li><a href="mailto:hello@adaptiveclimate.nl" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adaptive Climate Engine. All rights reserved.
      </div>
    </footer>
  );
}
