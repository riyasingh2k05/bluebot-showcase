import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function Contact() {
  const links = [
    { icon: Mail, label: portfolio.contact.email, href: `mailto:${portfolio.contact.email}` },
    { icon: Linkedin, label: "LinkedIn", href: portfolio.contact.linkedin },
    { icon: Instagram, label: "Instagram", href: portfolio.contact.instagram },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl rounded-3xl glass p-10 md:p-14 text-center shadow-[var(--shadow-soft)]"
      >
        <h2 className="text-sm font-mono tracking-widest text-primary">// CONTACT</h2>
        <h3 className="mt-3 text-4xl md:text-5xl font-bold">
          Let's <span className="text-gradient">Connect</span>
        </h3>
        <p className="mt-4 text-muted-foreground">
          Got a robot idea? Let's build something amazing together.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {links.map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <Icon className="h-4 w-4" />
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {portfolio.name} · Built with ⚡ and ❤️
      </footer>
    </section>
  );
}
