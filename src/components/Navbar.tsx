import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Work" },
  { to: "/insights", label: "Insights" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/30">
      <div className="container flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="font-heading text-sm md:text-base font-bold tracking-tight text-foreground">
          Two Virtual Media
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-xs font-medium tracking-wide uppercase transition-colors hover:text-primary",
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-full px-5 text-xs">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-border/30 pb-6 px-6 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={cn(
                "block text-xs font-medium tracking-wide uppercase py-2 transition-colors",
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground rounded-full text-xs">
            <Link to="/contact" onClick={() => setOpen(false)}>Get in Touch</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
