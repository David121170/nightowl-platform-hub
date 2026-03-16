import { motion } from "framer-motion";
import { Search, Handshake, Settings } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We scour the globe for proven experiential hospitality concepts — from Tokyo's immersive dining to London's underground cocktail bars — and evaluate their potential for the Australian market.",
  },
  {
    icon: Handshake,
    title: "Co‑Invest",
    description:
      "We structure co‑investment alongside our partners for each portfolio brand, aligning incentives and sharing upside in every venue we bring to life.",
  },
  {
    icon: Settings,
    title: "Operate",
    description:
      "Our world‑class operational engine handles everything from fit‑out and licensing to staffing and supply chain — so concepts launch flawlessly.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const PlatformSection = () => {
  return (
    <section id="platform" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            The Platform
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[0.95] max-w-3xl">
            The Architecture of Experience
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed">
            We bridge the gap between global concept and local culture. Through
            disciplined co‑investment and a world‑class operational engine, we
            scale the venues that define cities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
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

export default PlatformSection;
