const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-10 md:gap-16">
          <div className="md:col-span-2">
            <p className="font-display text-lg font-bold tracking-tight text-foreground mb-4">
              Night<span className="text-gradient-amber">Owl</span>{" "}
              <span className="text-muted-foreground font-normal text-sm">Platform</span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Discovering, co‑investing in, and operating the world's most
              compelling experiential hospitality brands for the Australian
              market.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">
              Platform
            </h4>
            <ul className="space-y-2">
              {["Discovery", "Co‑Investment", "Operations", "Portfolio"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {["About", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NightOwl Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
