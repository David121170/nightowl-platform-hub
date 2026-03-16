import { Linkedin, Instagram } from "lucide-react";
import owlLogo from "@/assets/nightowl-logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={owlLogo} alt="NightOwl" className="h-6 w-auto opacity-60" />
            <span className="font-display text-sm font-light tracking-wide text-muted-foreground">
              NightOwl Platform
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} NightOwl Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
