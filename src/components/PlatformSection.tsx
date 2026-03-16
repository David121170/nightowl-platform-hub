import { motion } from "framer-motion";
import { Globe, MapPin, Wallet, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Discover Global Concepts",
    description:
      "Our dedicated scouting team identifies proven experiential brands across the UK, US, Europe and Asia. We evaluate track record, guest appeal and Australian market fit, then structure partnership terms that work for founders and investors alike.",
  },
  {
    icon: MapPin,
    title: "Localise & Launch",
    description:
      "We adapt every concept for Australian guests, sites and regulations — from menu engineering and licensing to design language and staffing. The result is a flagship venue that feels both authentically global and unmistakably local.",
  },
  {
    icon: Wallet,
    title: "Invest & Co‑Invest",
    description:
      "NightOwl commits its own capital to every brand we bring to market. Alongside that, we offer structured co‑investment opportunities for investors who want exposure to premium experiential hospitality assets.",
  },
  {
    icon: TrendingUp,
    title: "Scale & Manage",
    description:
      "Once a flagship proves itself, we execute the roll‑out strategy: additional sites, landlord negotiations, supply‑chain optimisation and ongoing performance reporting — all powered by our central operating platform.",
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

const PlatformSection = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide mb-6">
            What We Do
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Every brand in our portfolio follows a disciplined journey — from
            first handshake to opening night and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={item}
              className="platform-card rounded-lg p-8 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <pillar.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-normal tracking-wide mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
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
