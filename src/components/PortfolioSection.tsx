import { motion } from "framer-motion";
import venueDining from "@/assets/venue-dining.jpg";
import venueRooftop from "@/assets/venue-rooftop.jpg";
import venueLounge from "@/assets/venue-lounge.jpg";

const venues = [
  {
    image: venueDining,
    name: "Fine Dining Concepts",
    category: "Dining",
    alt: "Premium restaurant with candlelit dining atmosphere",
  },
  {
    image: venueRooftop,
    name: "Rooftop Experiences",
    category: "Bars & Lounges",
    alt: "Rooftop bar with city skyline views at night",
  },
  {
    image: venueLounge,
    name: "Cocktail Lounges",
    category: "Nightlife",
    alt: "Stylish cocktail lounge with neon ambient lighting",
  },
];

const stats = [
  { value: "34%", label: "YoY Growth" },
  { value: "4", label: "Global Partners" },
  { value: "12", label: "Venues Managed" },
  { value: "$180M+", label: "Capital Deployed" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[0.95] max-w-3xl">
            Venues That Define Cities
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="platform-card rounded-2xl p-6 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-amber">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Venue grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={venue.image}
                alt={venue.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-xs tracking-[0.15em] uppercase mb-1">
                  {venue.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {venue.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
