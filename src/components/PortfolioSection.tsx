import { motion } from "framer-motion";
import CaseStudySocialDarts from "@/components/CaseStudySocialDarts";
import CaseStudyArcade from "@/components/CaseStudyArcade";
import CaseStudyRacing from "@/components/CaseStudyRacing";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide mb-6">
            Example Portfolio Concepts
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Here are examples of the kind of experiential brands we back and
            operate in Australia.
          </p>
        </motion.div>

        <div className="space-y-8">
          <CaseStudySocialDarts />
          <CaseStudyArcade />
          <CaseStudyRacing />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
