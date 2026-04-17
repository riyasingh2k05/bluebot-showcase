import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl glass p-10 md:p-14 shadow-[var(--shadow-soft)]"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary">// ABOUT</h2>
          <h3 className="mt-3 text-4xl md:text-5xl font-bold">
            Building the <span className="text-gradient">future</span>, one circuit at a time.
          </h3>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {portfolio.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
