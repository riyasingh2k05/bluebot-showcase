import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-mono tracking-widest text-primary"
        >
          // SKILLS
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mt-3 text-4xl md:text-5xl font-bold"
        >
          My <span className="text-gradient">Toolkit</span>
        </motion.h3>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {portfolio.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.6, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-2xl glass p-6 text-center shadow-[var(--shadow-soft)] cursor-default"
            >
              <div className="text-4xl">{skill.icon}</div>
              <div className="mt-3 font-semibold text-foreground">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
