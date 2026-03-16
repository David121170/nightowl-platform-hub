import { motion } from "framer-motion";
import {
  Globe2,
  MapPinned,
  PaintBucket,
  ClipboardList,
  BarChart3,
  Megaphone,
  Cpu,
} from "lucide-react";

const capabilities = [
  { icon: Globe2, label: "Brand Localisation", description: "Adapting global identity for Australian culture and regulation." },
  { icon: MapPinned, label: "Site Selection & Leasing", description: "Identifying premium locations and negotiating landlord agreements." },
  { icon: PaintBucket, label: "Design & Fit‑Out", description: "Managing concept design, construction and handover on time and budget." },
  { icon: ClipboardList, label: "Operations & Playbooks", description: "Standardised SOPs, training programs and quality systems across every venue." },
  { icon: BarChart3, label: "Finance & Reporting", description: "Transparent P&L reporting, investor dashboards and performance analytics." },
  { icon: Megaphone, label: "Marketing, CRM & Loyalty", description: "Brand campaigns, guest databases and loyalty programs that drive repeat visits." },
  { icon: Cpu, label: "Tech & Data", description: "Integrated POS, reservations, inventory and real‑time data to drive decisions — not opinions." },
];

const mantras = [
  "Think big.",
  "Challenge the status quo.",
  "Data over opinions.",
  "Constant and transparent feedback.",
  "Celebrate input.",
  "We make the impossible possible.",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const PlatformCapabilitiesSection = () => {
  return (
    <section id="platform" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide mb-6">
            The NightOwl Platform
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Everything a world‑class venue needs — under one roof. Our
            centralised platform makes the impossible possible for every brand
            in the portfolio.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.label}
              variants={item}
              className="platform-card rounded-lg p-6 group cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <cap.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base font-normal tracking-wide text-foreground mb-1">
                {cap.label}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed font-light">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mantras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-light tracking-wide mb-8">
            NightOwl Mantras
          </h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {mantras.map((mantra) => (
              <p key={mantra} className="text-primary text-sm font-light tracking-wide">
                {mantra}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformCapabilitiesSection;
