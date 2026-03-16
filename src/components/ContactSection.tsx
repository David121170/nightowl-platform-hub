import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type ContactPath = "brand" | "investor";

const ContactSection = () => {
  const [path, setPath] = useState<ContactPath>("brand");

  return (
    <section id="contact" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="platform-card rounded-3xl p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
                Get Started
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
                Let's Explore What's Possible
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're a brand founder exploring Australian market entry
                or an investor looking for structured hospitality opportunities —
                we'd love to start a conversation.
              </p>

              {/* Path toggle */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setPath("brand")}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    path === "brand"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground border border-foreground/10"
                  }`}
                >
                  I'm a Brand or Founder
                </button>
                <button
                  onClick={() => setPath("investor")}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    path === "investor"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground border border-foreground/10"
                  }`}
                >
                  I'm an Investor or Landlord
                </button>
              </div>

              <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-secondary/50 border border-foreground/10 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-secondary/50 border border-foreground/10 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Organisation"
                  className="w-full bg-secondary/50 border border-foreground/10 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder={
                    path === "brand"
                      ? "Your role (e.g. Founder, CEO, Brand Director)"
                      : "Your role (e.g. Director, Fund Manager, Developer)"
                  }
                  className="w-full bg-secondary/50 border border-foreground/10 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <textarea
                  placeholder={
                    path === "brand"
                      ? "Tell us about your concept and what Australian market entry looks like for you…"
                      : "Tell us about your investment interests and what you're looking for…"
                  }
                  rows={4}
                  className="w-full bg-secondary/50 border border-foreground/10 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="amber" size="lg" className="rounded-full px-10 w-full md:w-auto text-base mt-2">
                    {path === "brand" ? "Talk to Us About Your Brand" : "Speak to Our Investment Team"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
