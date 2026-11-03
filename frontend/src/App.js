import { useEffect, Component } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Admin from "@/components/Admin";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#111110] text-white">
          Something went wrong. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

function Home() {
  return (
    <div className="home-page relative min-h-screen overflow-x-clip bg-[#fff5e9] text-[#202020]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <TechStack />
        <Portfolio />
        <Process />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function WhyChooseUs() {
  const reasons = [
    "Creative thinking, not templates",
    "Modern technology",
    "Business-focused solutions",
    "Responsive development",
    "Scalable applications",
    "Quality-focused delivery",
  ];
  return (
    <section className="why-scene py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#3457eb]">Our difference</p>
        <h2 className="mb-12 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[.98] tracking-[-.055em] sm:text-6xl">
          Why <span className="text-[#ff6b35]">choose</span> us.
        </h2>
        <div className="grid gap-x-12 sm:grid-cols-2">
          {reasons.map((reason) => <div key={reason} className="why-scene__item">{reason}</div>)}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.14,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="bottom-left" />
    </ErrorBoundary>
  );
}
