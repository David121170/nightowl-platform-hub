import { motion } from "framer-motion";
import { Globe, MapPin, Wallet, TrendingUp } from "lucide-react";
import venueLounge from "@/assets/venue-lounge.jpg";
import venueDining from "@/assets/venue-dining.jpg";

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

const capabilities = [
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

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-24 md:py-32 section-alt section-venue-bg">
      <img src={venueLounge} alt="" className="venue-bg-img" />
      <div className="venue-bg-overlay" style={{ background: 'linear-gradient(180deg, hsl(86 10% 20% / 0.85) 0%, hsl(86 10% 20% / 0.95) 100%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide mb-6 text-primary">
            The Group
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            NightOwl Platform is the investment and operating arm of the NightOwl
            Entertainment group. We identify world‑class experiential concepts,
            structure partnerships with their founders, deploy aligned capital
            and deliver venues that become the places people talk about.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-24">
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
              <p className="text-muted-foreground text-sm leading-[1.8] font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Capability cards (merged from What We Do) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={item}
              className="platform-card rounded-lg p-8 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors duration-300">
                <cap.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-normal tracking-wide mb-3 text-primary">
                {cap.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.8] font-light">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
