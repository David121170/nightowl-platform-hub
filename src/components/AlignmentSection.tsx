import { motion } from "framer-motion";
import { ShieldCheck, Eye, Heart } from "lucide-react";

const AlignmentSection = () => {
  return (
    <section id="alignment" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="platform-card rounded-3xl p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
                Co‑Investment & Alignment
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
                Our Capital Is on the Line — Right Alongside Yours
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
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
              className="grid sm:grid-cols-3 gap-6"
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
                <div
                  key={item.title}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
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
