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
    <section id="our-model" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide mb-6">
            Our Model
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            International founders partner with NightOwl for Australian market
            entry. Investors participate through structured co‑investment
            opportunities. NightOwl provides the central operations, data and
            reporting layer that ties everything together.
          </p>
        </motion.div>

        {/* Flow steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="relative mx-auto w-16 h-16 rounded-full border border-primary/25 flex items-center justify-center mb-4 bg-background/50">
                  <span className="font-display text-lg text-primary font-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-base font-normal tracking-wide text-foreground mb-1">
                  {step.label}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurModelSection;
