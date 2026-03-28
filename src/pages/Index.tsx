import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.png";
import statsBg from "@/assets/stats-bg.png";

const stats = [
  { value: "10+", label: "Years across UK-China corridors" },
  { value: "150+", label: "Campaigns on WeChat, Xiaohongshu, Instagram, TikTok" },
  { value: "500+", label: "Influencers activated in both markets" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "156%", label: "Average Client ROI" },
];

const Index = () => (
  <Layout>
    {/* Hero — Full Screen */}
    <section className="relative h-[100vh] -mt-16 md:-mt-20 overflow-hidden">
      <img src={heroBg} alt="Two Virtual Media" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
              <span className="text-white">Two Markets</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-primary to-accent italic">One Language.</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
              We work with British brands entering China, and Chinese brands establishing themselves in the UK. Cross-border marketing without the translation loss.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white hover:bg-white/90 text-black font-semibold px-10 py-6 text-base tracking-widest uppercase">
              <Link to="/case-studies">View Work</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* The Bridge — Value Proposition */}
    <section className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-cyan-400 tracking-[0.3em] uppercase mb-3">The Bridge</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-white">
            We don't just move brands across borders.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-primary to-accent italic">We translate culture.</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 space-y-5 text-white/70 leading-relaxed text-base md:text-lg">
            <p>
              Too often, brands treat international expansion as a logistical exercise. A website here, a social account there. But entering China—or the UK—demands something more nuanced: fluency in behaviour, humour, context, and trust.
            </p>
            <p>
              Based in London, Two Virtual Media exists to bridge that gap. We work with British brands navigating China's distinct digital ecosystem, and Chinese brands building recognition and credibility in the UK. Two directions, one team, and a shared belief that great marketing should never feel foreign.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* By the Numbers */}
    <section className="py-24 md:py-32 bg-[#0d0d14] relative overflow-hidden">
      <img src={statsBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-cyan-400 tracking-[0.3em] uppercase mb-3">By the Numbers</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Proven Results</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:border-cyan-400/30 transition-all duration-500">
                <p className="font-heading text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-primary mb-2">{s.value}</p>
                <p className="text-xs md:text-sm text-white/60 leading-snug">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-cyan-400 tracking-[0.3em] uppercase mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Two Directions, One Team</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-10 h-full hover:border-cyan-400/30 transition-all duration-500">
              <h3 className="font-heading text-xl font-semibold text-white mb-4">For UK Brands Entering China</h3>
              <p className="text-white/60 leading-relaxed">
                We help you build presence across WeChat, Xiaohongshu, Douyin, and beyond. From strategy to content to KOL partnerships, we ensure your brand connects with Chinese consumers—without losing your identity.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-10 h-full hover:border-primary/30 transition-all duration-500">
              <h3 className="font-heading text-xl font-semibold text-white mb-4">For Chinese Brands Entering the UK</h3>
              <p className="text-white/60 leading-relaxed">
                We help you tell your story for a British audience. Through Western social platforms, PR, influencer campaigns, and brand positioning, we build the credibility and visibility you need to grow.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-primary/5 to-accent/5" />
      <div className="container relative z-10 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
            Let's create something{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-primary to-accent italic">extraordinary.</span>
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Ready to bridge the gap between UK and China?
          </p>
          <Button asChild size="lg" className="rounded-full bg-white hover:bg-white/90 text-black font-semibold px-10 py-6 text-base tracking-widest uppercase">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
