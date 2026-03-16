import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type ContactPath = "brand" | "investor";

const ContactSection = () => {
  const [path, setPath] = useState<ContactPath>("brand");

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="platform-card rounded-lg p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-4 text-primary">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-sm leading-[1.8] mb-8 font-light">
                Whether you're a brand founder exploring Australian market entry
                or an investor looking for structured hospitality opportunities —
                we'd love to start a conversation.
              </p>

              {/* Path toggle */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={() => setPath("brand")}
                  className={`px-4 py-2 rounded-sm text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                    path === "brand"
                      ? "bg-primary text-primary-foreground"
                      : "border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40"
                  }`}
                >
                  I'm a Brand or Founder
                </button>
                <button
                  onClick={() => setPath("investor")}
                  className={`px-4 py-2 rounded-sm text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                    path === "investor"
                      ? "bg-primary text-primary-foreground"
                      : "border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40"
                  }`}
                >
                  I'm an Investor or Landlord
                </button>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-card/60 border border-primary/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-card/60 border border-primary/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Organisation"
                  className="w-full bg-card/60 border border-primary/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder={
                    path === "brand"
                      ? "Your role (e.g. Founder, CEO, Brand Director)"
                      : "Your role (e.g. Director, Fund Manager, Developer)"
                  }
                  className="w-full bg-card/60 border border-primary/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <textarea
                  placeholder={
                    path === "brand"
                      ? "Tell us about your concept and what Australian market entry looks like for you…"
                      : "Tell us about your investment interests and what you're looking for…"
                  }
                  rows={4}
                  className="w-full bg-card/60 border border-primary/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <Button variant="amber" size="lg" className="rounded-sm px-8 text-xs tracking-[0.15em] uppercase w-full md:w-auto mt-2">
                  {path === "brand" ? "Talk to Us About Your Brand" : "Speak to Our Investment Team"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
