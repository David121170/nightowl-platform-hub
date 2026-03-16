import { motion } from "framer-motion";
import { Flag } from "lucide-react";
import CaseStudySocialDarts from "@/components/CaseStudySocialDarts";
import CaseStudyArcade from "@/components/CaseStudyArcade";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
            Example Portfolio Concepts
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Here are examples of the kind of experiential brands we back and
            operate in Australia.
          </p>
        </motion.div>

        {/* Full case studies */}
        <div className="space-y-8 mb-8">
          <CaseStudySocialDarts />
          <CaseStudyArcade />
        </div>

        {/* Remaining concept card */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="platform-card rounded-2xl p-8 md:p-10 group cursor-default flex flex-col max-w-xl"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            <Flag className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <p className="text-primary font-body text-xs tracking-[0.15em] uppercase mb-2">
            Simulation Entertainment
          </p>
          <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
            Immersive Racing Lounge
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
            A premium sim‑racing lounge featuring full‑motion race simulators,
            lap‑time leaderboards and a motorsport‑themed bar and lounge.
            Positioned as the social alternative to karting — no helmets, no
            overalls, just high‑fidelity racing in a sophisticated setting.
          </p>
          <ul className="space-y-2 border-t border-foreground/5 pt-5">
            {["Full‑motion hydraulic simulators", "Real‑time leaderboards & leagues", "Motorsport‑inspired cocktail bar"].map((h) => (
              <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
