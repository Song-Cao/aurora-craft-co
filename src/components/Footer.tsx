import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/case-studies", label: "Case Studies" },
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
          <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
          <p className="text-sm text-muted-foreground mb-2">hello@twovirtualmedia.com</p>
          <div className="flex gap-4 mt-4">
            {["LinkedIn", "Instagram", "X"].map((s) => (
              <span key={s} className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Two Virtual Media. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
