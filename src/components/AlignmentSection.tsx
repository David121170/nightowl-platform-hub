import { motion } from "framer-motion";
import { ShieldCheck, Eye, Heart } from "lucide-react";

const AlignmentSection = () => {
  return (
    <section id="alignment" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="platform-card rounded-lg p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6 text-primary">
                Co‑Investment & Alignment
              </h2>
              <p className="text-muted-foreground text-base leading-[1.8] mb-12 font-light">
                NightOwl invests its own capital into every brand we bring to
                market. That means our incentives are fully aligned with our
                co‑investors: we succeed together through long‑term brand value,
                exceptional guest experiences and disciplined operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="grid sm:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Skin in the Game",
                  desc: "NightOwl commits meaningful capital to every deal, ensuring alignment from day one.",
                },
                {
                  icon: Heart,
                  title: "Guest‑First Incentives",
                  desc: "Returns are built on repeat visits and brand love — not short‑term cost‑cutting.",
                },
                {
                  icon: Eye,
                  title: "Transparent Reporting",
                  desc: "Real‑time dashboards, quarterly reviews and full P&L visibility for every investor.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-sm font-normal tracking-wide text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-[1.7] font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlignmentSection;
