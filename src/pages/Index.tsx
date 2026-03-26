import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp, Users, Award, BarChart3 } from "lucide-react";
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
    {/* Hero */}
    {/* Hero Image */}
    <section className="relative overflow-hidden">
      <div className="w-full">
        <img src={heroBg} alt="Two Virtual Media" className="w-full h-[60vh] md:h-[75vh] object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>

    {/* Hero Text */}
    <section className="relative -mt-20 md:-mt-28 z-10 pb-12 md:pb-16">
      <div className="container">
        <AnimatedSection className="max-w-2xl mx-auto text-center bg-background/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.2] mb-4 text-foreground">
            Two Markets.{" "}
            <span className="gradient-text">One Language.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-3 leading-relaxed">
            We work with British brands entering China, and Chinese brands establishing themselves in the UK.
          </p>
          <p className="text-xs md:text-sm text-accent font-medium mb-8">
            Cross-border marketing without the translation loss.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="default" className="rounded-full bg-primary hover:bg-primary/80 text-primary-foreground px-6 gap-2 text-sm">
              <Link to="/contact">Start a Project <ArrowRight size={14} /></Link>
            </Button>
            <Button asChild size="default" variant="outline" className="rounded-full border-border/50 hover:bg-muted px-6 text-sm">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* The Bridge — Value Proposition */}
    <section className="py-24 md:py-32">
      <div className="container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">The Bridge</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            We don't just move brands across borders.{" "}
            <span className="gradient-text">We translate culture.</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
          <div className="glass rounded-xl p-8 md:p-12 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
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
    <section className="py-24 md:py-32 bg-card/30 relative overflow-hidden">
      <img src={statsBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">By the Numbers</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Proven Results</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <div className="glass rounded-xl p-6 text-center hover:glow-blue transition-shadow duration-500">
                <p className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">{s.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* What We Do — Two Columns */}
    <section className="py-24 md:py-32">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Two Directions, One Team</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-xl p-8 md:p-10 h-full hover:glow-blue transition-shadow duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">For UK Brands Entering China</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We help you build presence across WeChat, Xiaohongshu, Douyin, and beyond. From strategy to content to KOL partnerships, we ensure your brand connects with Chinese consumers—without losing your identity.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-xl p-8 md:p-10 h-full hover:glow-purple transition-shadow duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">For Chinese Brands Entering the UK</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We help you tell your story for a British audience. Through Western social platforms, PR, influencer campaigns, and brand positioning, we build the credibility and visibility you need to grow.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      <div className="container relative z-10 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Let's create something{" "}
            <span className="gradient-text">extraordinary.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Ready to bridge the gap between UK and China?
          </p>
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/80 text-primary-foreground px-10 gap-2">
            <Link to="/contact">Get in Touch <ArrowRight size={16} /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
