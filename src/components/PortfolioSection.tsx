import { motion } from "framer-motion";
import { Gamepad2, Flag } from "lucide-react";
import CaseStudySocialDarts from "@/components/CaseStudySocialDarts";

const otherConcepts = [
  {
    icon: Gamepad2,
    title: "Arcade Eatertainment Venue",
    category: "Eatertainment",
    description:
      "A large‑format venue blending retro and modern arcade games with a chef‑driven dining menu and full bar. Guests move between gaming floors, bowling lanes and karaoke suites — all linked by a single RFID wristband for seamless play and pay.",
    highlights: ["100+ arcade & redemption games", "Chef‑led kitchen with shareable plates", "RFID cashless experience"],
  },
  {
    icon: Flag,
    title: "Immersive Racing Lounge",
    category: "Simulation Entertainment",
    description:
      "A premium sim‑racing lounge featuring full‑motion race simulators, lap‑time leaderboards and a motorsport‑themed bar and lounge. Positioned as the social alternative to karting — no helmets, no overalls, just high‑fidelity racing in a sophisticated setting.",
    highlights: ["Full‑motion hydraulic simulators", "Real‑time leaderboards & leagues", "Motorsport‑inspired cocktail bar"],
  },
];

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

        {/* Full case study: Social Darts */}
        <div className="mb-8">
          <CaseStudySocialDarts />
        </div>

        {/* Remaining concept cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherConcepts.map((concept) => (
            <motion.div
              key={concept.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="platform-card rounded-2xl p-8 md:p-10 group cursor-default flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <concept.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-primary font-body text-xs tracking-[0.15em] uppercase mb-2">
                {concept.category}
              </p>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {concept.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {concept.description}
              </p>
              <ul className="space-y-2 border-t border-foreground/5 pt-5">
                {concept.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
