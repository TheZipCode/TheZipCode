import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="about-scene relative overflow-hidden bg-[#dcd6ff] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: EASE }}>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#3457eb]">A little about us</p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[.98] tracking-[-.055em] sm:text-6xl">
            Good ideas deserve <span className="text-[#3457eb]">great</span> execution.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#42404a]">
            TheZipCode is a creative technology agency helping businesses build powerful digital experiences, from fast marketing sites to full-stack web applications and dashboards.
          </p>
        </motion.div>
        <motion.div className="about-scene__art" initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8, ease: EASE }} aria-hidden="true">
          <span className="about-scene__shape about-scene__shape--blue" />
          <span className="about-scene__shape about-scene__shape--orange" />
          <span className="about-scene__shape about-scene__shape--lime" />
          <span className="about-scene__shape about-scene__shape--paper" />
        </motion.div>
      </div>
    </section>
  );
}
