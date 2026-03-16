import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="platform-card rounded-3xl p-10 md:p-16 lg:p-20 relative overflow-hidden">
          {/* Ambient glow */}
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
                Ready to Explore a Partnership?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Whether you're an investor seeking access to premium hospitality
                assets or a concept creator looking to enter the Australian
                market — we'd love to hear from you.
              </p>

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
                  placeholder="I'm interested in..."
                  className="w-full bg-secondary/50 border border-foreground/10 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="amber" size="lg" className="rounded-full px-10 w-full md:w-auto text-base mt-2">
                    Request Access
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
