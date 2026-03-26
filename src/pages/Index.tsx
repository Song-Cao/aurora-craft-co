import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "10+", label: "Years across UK-China corridors" },
  { value: "150+", label: "Campaigns delivered" },
  { value: "500+", label: "Influencers activated" },
  { value: "98%", label: "Client Retention" },
  { value: "156%", label: "Average ROI" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <AnimatedSection className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-medium">Cross-Border Marketing Agency</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] mb-5">
            Two Markets.{" "}
            <span className="gradient-text">One Language.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Bridging UK & China through culturally fluent digital marketing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="default" className="rounded-full bg-primary hover:bg-primary/80 text-primary-foreground px-6 gap-2 text-sm">
              <Link to="/contact">Start a Project <ArrowRight size={14} /></Link>
            </Button>
            <Button asChild size="default" variant="outline" className="rounded-full border-primary/30 hover:bg-primary/10 hover:text-primary px-6 text-sm">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      {/* Neon scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" />
      </div>
    </section>

    {/* Divider */}
    <div className="neon-line" />

    {/* The Bridge */}
    <section className="py-20 md:py-28">
      <div className="container">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-medium">The Bridge</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            We don't just move brands across borders.{" "}
            <span className="gradient-text">We translate culture.</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
          <div className="glass rounded-xl p-6 md:p-10 space-y-4 text-muted-foreground leading-relaxed text-sm gradient-border">
            <p>
              Too often, brands treat international expansion as a logistical exercise. But entering China—or the UK—demands fluency in behaviour, humour, context, and trust.
            </p>
            <p>
              Based in London, Two Virtual Media bridges that gap. We work with British brands navigating China's digital ecosystem, and Chinese brands building credibility in the UK.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="neon-line" />

    {/* By the Numbers */}
    <section className="py-20 md:py-28">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-medium">By the Numbers</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Proven Results</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.06}>
              <div className="glass rounded-xl p-5 text-center hover:glow-cyan transition-all duration-500 gradient-border">
                <p className="font-heading text-2xl md:text-3xl font-bold gradient-text mb-1">{s.value}</p>
                <p className="text-[11px] md:text-xs text-muted-foreground leading-snug">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <div className="neon-line" />

    {/* What We Do */}
    <section className="py-20 md:py-28">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-medium">What We Do</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Two Directions, One Team</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-xl p-6 md:p-8 h-full hover:glow-cyan transition-all duration-500 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">UK Brands → China</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build presence across WeChat, Xiaohongshu, Douyin with strategy, content, and KOL partnerships that connect without losing your identity.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-xl p-6 md:p-8 h-full hover:glow-magenta transition-all duration-500 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">Chinese Brands → UK</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tell your story for a British audience through Western social platforms, PR, influencer campaigns, and brand positioning.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <div className="neon-line" />

    {/* CTA */}
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
      <div className="container relative z-10 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
            Let's create something{" "}
            <span className="gradient-text">extraordinary.</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            Ready to bridge the gap between UK and China?
          </p>
          <Button asChild size="default" className="rounded-full bg-primary hover:bg-primary/80 text-primary-foreground px-8 gap-2 text-sm">
            <Link to="/contact">Get in Touch <ArrowRight size={14} /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
