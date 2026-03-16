import { motion } from "framer-motion";
import CaseStudySocialDarts from "@/components/CaseStudySocialDarts";
import CaseStudyArcade from "@/components/CaseStudyArcade";
import CaseStudyRacing from "@/components/CaseStudyRacing";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-[16vh] md:py-[20vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
            Example Portfolio Concepts
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
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
