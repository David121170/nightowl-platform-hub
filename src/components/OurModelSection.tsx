import { motion } from "framer-motion";

const steps = [
  { label: "Find", description: "Scout proven global concepts with strong guest appeal." },
  { label: "Partner", description: "Structure founder‑friendly partnership terms." },
  { label: "Invest", description: "Deploy NightOwl and co‑investor capital." },
  { label: "Localise", description: "Adapt the brand for Australian markets." },
  { label: "Scale", description: "Roll out across premium sites nationally." },
  { label: "Deliver", description: "Generate returns through operational excellence." },
];

const OurModelSection = () => {
  return (
    <section id="our-model" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            Our Model
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
            A Repeatable Path from Concept to Returns
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            International founders partner with NightOwl for Australian market
            entry. Investors participate through structured co‑investment
            opportunities. NightOwl provides the central operations, data and
            reporting layer that ties everything together.
          </p>
        </motion.div>

        {/* Flow steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="relative mx-auto w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <span className="font-display text-lg font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  {step.label}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurModelSection;
