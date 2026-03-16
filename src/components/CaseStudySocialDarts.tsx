import { motion } from "framer-motion";
import { Target, Clock, DollarSign, Users, CalendarCheck } from "lucide-react";
import venueDarts from "@/assets/venue-darts.jpg";

const stats = [
  { icon: Clock, label: "Average dwell time", value: "2.4 hours" },
  { icon: DollarSign, label: "Spend per head", value: "$78" },
  { icon: Target, label: "Private oches", value: "18" },
  { icon: CalendarCheck, label: "Corporate & event mix", value: "35% of revenue" },
];

const highlights = [
  "Weeknight corporate events calendar booked 6 weeks ahead",
  "Weekend walk‑in conversion rate above 90% during peak hours",
  "Guest return rate averaging 3.2 visits per quarter",
];

const CaseStudySocialDarts = () => {
  return (
    <section className="case-study case-study--social-darts">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="platform-card rounded-lg overflow-hidden"
      >
        <div className="grid lg:grid-cols-[1fr_1fr]">
          {/* Image — 50% width */}
          <div className="case-study__image relative min-h-[280px] lg:min-h-[480px] overflow-hidden">
            <img src={venueDarts} alt="Flight Club social darts venue" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/40" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col">
            <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-3">
              Competitive Socialising
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.03em] leading-[0.95] text-foreground mb-2">
              Flight Club
            </h3>
            <p className="text-primary/80 font-body text-sm italic mb-6">
              Tech‑driven social darts in a buzzing heritage space.
            </p>

            <div className="space-y-4 text-muted-foreground text-sm leading-[1.8] mb-8">
              <p>
                Set inside a beautifully restored heritage building in a major
                Australian CBD, this next‑generation social darts venue
                reimagines a classic pastime for a new audience. Warm timber
                panelling, exposed brick and moody down‑lighting create an
                atmosphere that feels equal parts neighbourhood pub and
                contemporary cocktail bar — inviting groups to settle in for the
                entire evening.
              </p>
              <p>
                Semi‑private oches fitted with automated scoring technology let
                guests jump straight into competitive games without keeping score
                themselves. A curated cocktail list and a menu of chef‑designed
                share plates keep the energy high and the per‑head spend strong.
                The venue has become a magnet for corporate team events, birthday
                groups and midweek date nights — delivering high dwell times and
                repeat visitation that few traditional bar formats can match.
              </p>
            </div>

            {/* Stats row */}
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
                "NightOwl understood our vision from day one. They handled the
                site, the licensing and the fit‑out while we focused on
                perfecting the guest experience. We couldn't have launched in
                Australia without them."
              </p>
              <cite className="text-primary text-xs font-semibold not-italic">
                — Founding Partner, Flight Club
              </cite>
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudySocialDarts;
