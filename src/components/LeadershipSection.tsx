import { motion } from "framer-motion";
import { User } from "lucide-react";

const leaders = [
  {
    name: "David Heaton",
    title: "CEO",
    bio: "20+ years in hospitality and growth capital.",
  },
  {
    name: "Jamie Rhodes",
    title: "COO",
    bio: "Former multi-site operator across the UK and Australia.",
  },
  {
    name: "Ben Rasheed",
    title: "Head of Investments",
    bio: "15+ years in real estate and structured finance.",
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

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 md:py-32 section-alt">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide mb-6 text-primary">
            Leadership
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              variants={item}
              className="platform-card rounded-lg p-8 text-center group cursor-default"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-secondary/80 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:border-primary/40 transition-colors duration-300">
                <User className="w-10 h-10 text-primary/40" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-normal tracking-wide text-foreground mb-1">
                {leader.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {leader.title}
              </p>
              <p className="text-muted-foreground text-sm leading-[1.8] font-light">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
