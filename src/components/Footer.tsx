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

          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
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
