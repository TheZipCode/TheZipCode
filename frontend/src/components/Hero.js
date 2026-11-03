import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="home" className="hero-scene relative flex min-h-[min(900px,100svh)] items-center overflow-hidden pt-[72px]">
      <video
        className="hero-scene__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster="/og-image.jpg"
      >
        <source src="/mountain-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-scene__shade" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 pt-20 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="max-w-5xl"
        >
          <p className="hero-scene__eyebrow mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#C7F464] shadow-[0_0_16px_#C7F464]" />
            TheZipCode · Creative technology studio
          </p>
          <h1 className="hero-scene__title font-display text-[clamp(3.25rem,9.4vw,9rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.075em]">
            <span className="block">We make</span>
            <span className="block text-[#C7F464]">digital things</span>
            <span className="block"><span className="text-[#FF784F]">happen.</span></span>
          </h1>
          <p className="hero-scene__copy mt-8 max-w-xl text-base leading-relaxed sm:mt-10 sm:text-xl">
            We design, develop and build digital experiences that help ambitious businesses grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <button onClick={() => scrollToId("contact")} className="hero-action hero-action--lime">
              Start a Project <ArrowUpRight size={17} />
            </button>
            <button onClick={() => scrollToId("portfolio")} className="hero-action hero-action--outline">
              Explore Our Work <ArrowDown size={16} />
            </button>
          </div>
        </motion.div>
      </div>
      <button className="hero-scene__scroll" onClick={() => scrollToId("services")} aria-label="Scroll to services">
        <span className="hero-scene__scroll-line" /> Scroll to explore
      </button>
      <span className="hero-scene__caption">Built for what&apos;s next · 26° 57&apos; N</span>
    </section>
  );
}
