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
    <section id="platform" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            The NightOwl Platform
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
            Everything a World‑Class Venue Needs — Under One Roof
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We think big, challenge the status quo and let data — not opinions —
            drive every decision. Our centralised platform makes the impossible
            possible for every brand in the portfolio.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.label}
              variants={item}
              className="platform-card rounded-2xl p-6 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <cap.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                {cap.label}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformCapabilitiesSection;
