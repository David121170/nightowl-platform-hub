import { motion } from "framer-motion";
import { Globe, Building2, Briefcase } from "lucide-react";
import venueRooftop from "@/assets/venue-rooftop.jpg";

const partners = [
  {
    icon: Globe,
    title: "International Founders & Brand Owners",
    description:
      "We provide full Australian market entry — from capital and site selection to operations and local brand building — so you can focus on your concept while we build its home.",
  },
  {
    icon: Building2,
    title: "Landlords & Developers",
    description:
      "We bring high‑quality, globally proven experiential tenants to your assets, driving foot traffic, dwell time and precinct value with brands that create genuine destination appeal.",
  },
  {
    icon: Briefcase,
    title: "Investors & Family Offices",
    description:
      "We offer structured co‑investment opportunities in premium hospitality assets, backed by NightOwl's own capital commitment, operational control and transparent performance reporting.",
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

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 md:py-32 section-venue-bg">
      <img src={venueRooftop} alt="" className="venue-bg-img" />
      <div className="venue-bg-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide mb-6 text-primary">
            Who We Partner With
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.title}
              variants={item}
              className="platform-card rounded-lg p-8 group cursor-default text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/25 transition-colors duration-300">
                <partner.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-normal tracking-wide mb-3 text-primary">
                {partner.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.8] font-light">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
