import { motion } from "framer-motion";
import robot from "@/assets/robot-hero.jpg";
import { portfolio } from "@/content/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-grid pt-24 pb-16">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-mono tracking-wider text-primary">
            ◉ {portfolio.role.toUpperCase()}
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">{portfolio.name}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            {portfolio.tagline}
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full blur-3xl bg-[var(--gradient-primary)] opacity-50" />
          <motion.img
            src={robot}
            alt="Robot avatar"
            width={1024}
            height={1024}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl shadow-[var(--shadow-soft)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
