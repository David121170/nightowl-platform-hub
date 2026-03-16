import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
              About NightOwl
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.95] mb-8">
              We Don't Just Find Concepts — We Build Their Australian Home
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                NightOwl Platform is the investment and operating arm behind
                Australia's most exciting experiential hospitality venues. We
                partner with world‑class concept creators to bring proven
                international brands to the Australian market.
              </p>
              <p>
                Our model is built on alignment: we co‑invest alongside our
                partners in every brand, ensuring that everyone's success is
                shared. From discovery to operations, we handle the complexity so
                concepts can focus on what they do best — creating unforgettable
                experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {[
              {
                title: "Global Scouting",
                desc: "Dedicated team identifying concepts across 20+ global markets with proven track records.",
              },
              {
                title: "Aligned Capital",
                desc: "We invest alongside our partners in every deal — our skin is always in the game.",
              },
              {
                title: "Operational Excellence",
                desc: "End‑to‑end management from site selection and fit‑out through to launch and scaling.",
              },
              {
                title: "Cultural Adaptation",
                desc: "Deep understanding of Australian markets ensures global concepts resonate locally.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="platform-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-primary font-display text-sm font-semibold mt-0.5">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
