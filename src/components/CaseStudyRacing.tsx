import { motion } from "framer-motion";
import { Flag, Gauge, Repeat, Trophy, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Gauge, label: "Racing simulators", value: "24" },
  { icon: Repeat, label: "Average races per guest", value: "3.6" },
  { icon: Trophy, label: "League members", value: "480+" },
  { icon: ThumbsUp, label: "NPS score", value: "82/100" },
];

const highlights = [
  "League nights sell out 4 weeks in advance with a 200‑person waitlist",
  "Corporate packages account for 30% of midweek revenue",
  "Average post‑race bar dwell time exceeds 55 minutes",
];

const CaseStudyRacing = () => {
  return (
    <section className="case-study case-study--racing">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="platform-card rounded-lg overflow-hidden"
      >
        <div className="grid lg:grid-cols-2">
          {/* Image placeholder */}
          <div className="case-study__image relative min-h-[280px] lg:min-h-[480px] bg-secondary/30 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/40" />
            <div className="relative z-10 text-center px-8">
              <Flag className="w-12 h-12 text-primary/40 mx-auto mb-4" strokeWidth={1} />
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                Venue imagery
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col">
            <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-3">
              Simulation Entertainment
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.03em] leading-[0.95] text-foreground mb-2">
              Immersive Racing Lounge
            </h3>
            <p className="text-primary/80 font-body text-sm italic mb-6">
              Full‑motion racing, full‑service bar.
            </p>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-8">
              <p>
                Part motorsport playground, part premium cocktail lounge — this
                venue pairs state‑of‑the‑art full‑motion racing simulators with
                a sophisticated bar and dining offer that would feel at home in
                any top‑tier hospitality precinct. Guests choose between casual
                sprint races for first‑timers and detailed endurance modes for
                sim‑racing enthusiasts, with real‑time leaderboards and
                telemetry screens adding theatre to every session.
              </p>
              <p>
                Weekly league nights have become a cultural fixture, drawing
                dedicated members who compete for season titles before settling
                into the lounge for craft cocktails and a menu built around
                elevated share plates — think wagyu sliders and truffle fries,
                not popcorn and soft drink. Corporate groups hire the floor for
                team‑building events, product launches and client entertainment,
                making the venue a genuine dual‑revenue engine across daytime
                functions and late‑night social sessions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary/30 rounded-xl p-4 border border-foreground/5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                    <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <p className="font-display text-lg font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                Highlights
              </h4>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-primary/30 pl-5 mt-auto">
              <p className="text-muted-foreground text-sm italic leading-relaxed mb-2">
                "Honestly, the Australian launch outperformed every projection
                we had. NightOwl's operations team treated our brand like their
                own — the venue quality, the staffing, the guest feedback loops
                — it all exceeded what we'd achieved in our home market."
              </p>
              <cite className="text-foreground text-xs font-semibold not-italic">
                — Founder, Immersive Racing Concept
              </cite>
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudyRacing;
