import { motion } from "framer-motion";

const pillars = [
  {
    title: "Why We Exist",
    description:
      "The world is full of extraordinary hospitality concepts that haven't yet reached Australian shores. We exist to close that gap — connecting global creators with local opportunity and capital.",
  },
  {
    title: "How We Do It",
    description:
      "We combine deep operational expertise with structured investment models. Every brand we bring to market is backed by aligned capital, a centralised operating engine and a team obsessed with guest experience.",
  },
  {
    title: "What We Do",
    description:
      "We scout, partner with and launch proven experiential brands in Australia. From first conversation to opening night and beyond, NightOwl Platform manages the full journey.",
  },
  {
    title: "Our People",
    description:
      "Operators, investors and brand‑builders who've spent decades in hospitality, real estate and growth capital. We think big, challenge the status quo and celebrate the people who make it all happen.",
  },
];

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide mb-6">
            The Group
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            NightOwl Platform is the investment and operating arm of the NightOwl
            Entertainment group. We identify world‑class experiential concepts,
            structure partnerships with their founders, deploy aligned capital
            and deliver venues that become the places people talk about.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h3 className="font-display text-xl md:text-2xl font-normal tracking-wide text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
