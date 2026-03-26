import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/40 bg-card/50">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="font-heading text-lg font-extrabold tracking-tight uppercase text-foreground mb-6">
            Two Virtual Media
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Cross-border marketing between the UK and China. Two directions, one team.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-6">Navigation</h4>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/insights", label: "Insights" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-6">Connect</h4>
          <p className="text-sm text-muted-foreground mb-4">hello@twovirtualmedia.com</p>
          <div className="flex gap-6 mt-4">
            {["LinkedIn", "Instagram", "X"].map((s) => (
              <span key={s} className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium uppercase tracking-wider">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-border/30">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Two Virtual Media. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
