import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-mono tracking-widest text-primary"
        >
          // PROJECTS
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mt-3 text-4xl md:text-5xl font-bold"
        >
          Things I've <span className="text-gradient">Built</span>
        </motion.h3>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {portfolio.projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl glass p-8 shadow-[var(--shadow-soft)] overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gradient-primary)] opacity-30 blur-2xl group-hover:opacity-60 transition-opacity" />
              <div className="relative">
                <div className="font-mono text-xs text-primary">PROJECT 0{i + 1}</div>
                <h4 className="mt-2 text-2xl font-bold">{p.title}</h4>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
