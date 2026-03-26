import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/insights", label: "Insights" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-lg md:text-xl font-extrabold tracking-tight text-foreground uppercase">
          Two Virtual Media
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                location.pathname === l.to
                  ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                  : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-none px-6 font-semibold">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border/40 pb-6 px-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={cn(
                "block text-sm font-medium py-2 transition-colors",
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground rounded-none font-semibold">
            <Link to="/contact" onClick={() => setOpen(false)}>Get in Touch</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
