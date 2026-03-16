import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-venue.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-[12vh] md:pb-[16vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium hospitality venue with warm amber lighting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full"
      >
        <motion.p
          variants={item}
          className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-6"
        >
          Investment & Operations Platform
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] max-w-4xl mb-8"
        >
          Investing in the{" "}
          <span className="text-gradient-amber">Social Fabric</span>{" "}
          of Australia
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
        >
          NightOwl Platform discovers, co-invests in, and operates the world's
          most compelling experiential hospitality brands — building their
          Australian home.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="amber" size="lg" className="rounded-full px-8 text-base">
              Request Access
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="ghost-light" size="lg" className="rounded-full px-8 text-base">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
