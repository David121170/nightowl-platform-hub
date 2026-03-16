import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Why We Exist",
    description:
      "The world is full of extraordinary hospitality concepts that haven't yet reached Australian shores. We exist to close that gap — connecting global creators with local opportunity and capital.",
  },
  {
    icon: Target,
    title: "How We Do It",
    description:
      "We combine deep operational expertise with structured investment models. Every brand we bring to market is backed by aligned capital, a centralised operating engine and a team obsessed with guest experience.",
  },
  {
    icon: Rocket,
    title: "What We Do",
    description:
      "We scout, partner with and launch proven experiential brands in Australia. From first conversation to opening night and beyond, NightOwl Platform manages the full journey.",
  },
  {
    icon: Users,
    title: "Our People",
    description:
      "Operators, investors and brand‑builders who've spent decades in hospitality, real estate and growth capital. We think big, challenge the status quo and celebrate the people who make it all happen.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
            The Engine Behind Australia's Most Exciting Venues
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            NightOwl Platform is the investment and operating arm of the NightOwl
            Entertainment group. We identify world‑class experiential concepts,
            structure partnerships with their founders, deploy aligned capital
            and deliver venues that become the places people talk about.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={item}
              className="platform-card rounded-2xl p-8 md:p-10 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <pillar.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
