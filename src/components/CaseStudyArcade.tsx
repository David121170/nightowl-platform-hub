import { motion } from "framer-motion";
import { Gamepad2, Maximize2, Joystick, Armchair, UsersRound } from "lucide-react";
import venueArcade from "@/assets/venue-arcade.jpg";

const stats = [
  { icon: Maximize2, label: "Total floor area", value: "2,800 sqm" },
  { icon: Joystick, label: "Games & attractions", value: "120+" },
  { icon: Armchair, label: "Restaurant seats", value: "180" },
  { icon: UsersRound, label: "Annual guests", value: "340,000+" },
];

const highlights = [
  "62% of guests book as groups of 6 or more",
  "Late‑night Friday and Saturday sessions sell out within 48 hours of release",
  "Corporate function enquiries up 40% year‑on‑year since launch",
];

const CaseStudyArcade = () => {
  return (
    <section className="case-study case-study--arcade">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="platform-card rounded-lg overflow-hidden"
      >
        <div className="grid lg:grid-cols-2">
          {/* Content — left on this card for visual variety */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col order-2 lg:order-1">
            <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-3">
              Eatertainment
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.03em] leading-[0.95] text-foreground mb-2">
              Arcade Eatertainment Hub
            </h3>
            <p className="text-primary/80 font-body text-sm italic mb-6">
              Food, games and sport under one roof.
            </p>

            <div className="space-y-4 text-muted-foreground text-sm leading-[1.8] mb-8">
              <p>
                A large‑format destination venue that brings together a
                full‑service restaurant, a lively cocktail bar and a curated
                gaming floor — all designed for adults who want more than a
                standard night out. Big‑screen sports viewing areas sit
                alongside rows of classic arcade cabinets, modern VR pods and
                competitive group attractions, creating an atmosphere that keeps
                guests moving, eating and playing late into the night.
              </p>
              <p>
                Purpose‑built group packages make it easy for birthday parties,
                corporate teams and social clubs to book a complete evening in
                one venue. The kitchen delivers shareable, crave‑worthy food that
                holds its own against standalone restaurants, while the
                late‑night programming — DJs, themed nights and tournaments —
                ensures the energy never dips. It's the antidote to the
                traditional pub: louder, brighter and built from the ground up
                for shared experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card/60 rounded-xl p-4 border border-primary/10"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                    <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <p className="font-display text-lg font-bold text-primary">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary mb-3">
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
            <blockquote className="border-l-2 border-primary/40 pl-5 mt-auto">
              <p className="text-muted-foreground text-sm italic leading-relaxed mb-2">
                "We'd been looking for the right partner to bring our format to
                Australia for years. NightOwl's local knowledge — from site
                selection to liquor licensing to supplier networks — turned what
                could have been a two‑year process into a seamless launch."
              </p>
              <cite className="text-primary text-xs font-semibold not-italic">
                — International Partner, Arcade Eatertainment Concept
              </cite>
            </blockquote>
          </div>

          {/* Image */}
          <div className="case-study__image relative min-h-[280px] lg:min-h-[480px] overflow-hidden order-1 lg:order-2">
            <img src={venueArcade} alt="Arcade eatertainment venue with guests playing games" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-bl from-background/20 via-transparent to-background/40" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudyArcade;
