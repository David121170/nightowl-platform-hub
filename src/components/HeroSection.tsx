import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-venue.jpg";
import owlLogo from "@/assets/nightowl-logo.svg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

const scrollToContact = (tab: "brand" | "investor") => {
  const contactEl = document.getElementById("contact");
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: "smooth" });
    // Dispatch a custom event so ContactSection can pick up the tab
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("nightowl:contact-tab", { detail: tab }));
    }, 600);
  }
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium hospitality venue"
          className="w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12"
      >
        <motion.div variants={item} className="flex justify-center mb-10">
          <img
            src={owlLogo}
            alt="NightOwl"
            className="w-40 md:w-56 h-auto opacity-70"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-[1.15] mb-8"
        >
          Bringing the world's best experiential entertainment brands{" "}
          <em className="text-primary font-normal">to life in Australia.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.8] mb-12 font-light"
        >
          NightOwl partners with proven global concepts, adapts them for
          Australian guests and scales them through a shared operating platform
          and aligned investment structures.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          <Button
            variant="amber"
            size="lg"
            className="rounded-sm px-8 text-xs tracking-[0.15em] uppercase glow-button"
            onClick={() => scrollToContact("brand")}
          >
            Talk to Us About Your Brand
          </Button>
          <Button
            variant="ghost-light"
            size="lg"
            className="rounded-sm px-8 text-xs tracking-[0.15em] uppercase"
            onClick={() => scrollToContact("investor")}
          >
            Speak to Our Investment Team
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
