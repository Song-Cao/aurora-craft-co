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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-lg md:text-xl font-bold tracking-tight text-white">
          Two Virtual Media
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-cyan-400",
                location.pathname === l.to ? "text-white" : "text-white/70"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 text-xs tracking-[0.15em] uppercase">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 pb-6 px-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={cn(
                "block text-sm font-medium py-2 tracking-[0.15em] uppercase transition-colors",
                location.pathname === l.to ? "text-white" : "text-white/60"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="w-full rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
