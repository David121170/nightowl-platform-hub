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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const PlatformSection = () => {
  return (
    <section id="what-we-do" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[0.95] max-w-3xl">
            From Discovery to Delivery
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed">
            Every brand in our portfolio follows a disciplined journey — from
            first handshake to opening night and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
