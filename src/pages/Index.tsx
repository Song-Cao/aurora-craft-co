import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

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
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimatedSection className="lg:col-span-8">
            <div className="accent-bar mb-8" />
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8">
              Two Markets.
              <br />
              <span className="gradient-text">One Language.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              We work with British brands entering China, and Chinese brands establishing themselves in the UK.
            </p>
            <p className="text-base md:text-lg text-primary font-medium mb-12">
              Cross-border marketing without the translation loss.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary hover:bg-primary/80 text-primary-foreground px-10 gap-2 text-base font-semibold h-14">
                <Link to="/contact">Start a Project <ArrowRight size={18} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-foreground/20 hover:border-primary hover:text-primary px-10 text-base h-14">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </AnimatedSection>
          <div className="hidden lg:block lg:col-span-4">
            <AnimatedSection delay={0.3}>
              <div className="text-right space-y-4">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="border-r-2 border-primary pr-6">
                    <p className="font-heading text-3xl font-extrabold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* The Bridge */}
    <section className="py-28 md:py-36 border-t border-border/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <AnimatedSection className="lg:col-span-5">
            <div className="accent-bar mb-6" />
            <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">The Bridge</p>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight">
              We don't just move brands across borders.{" "}
              <span className="gradient-text">We translate culture.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-7">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg border-l-2 border-border pl-8">
              <p>
                Too often, brands treat international expansion as a logistical exercise. A website here, a social account there. But entering China—or the UK—demands something more nuanced: fluency in behaviour, humour, context, and trust.
              </p>
              <p>
                Based in London, Two Virtual Media exists to bridge that gap. We work with British brands navigating China's distinct digital ecosystem, and Chinese brands building recognition and credibility in the UK. Two directions, one team, and a shared belief that great marketing should never feel foreign.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* By the Numbers — mobile + full */}
    <section className="py-24 md:py-32 bg-card/60 border-y border-border/30">
      <div className="container">
        <AnimatedSection className="mb-16">
          <div className="accent-bar mb-6" />
          <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">By the Numbers</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">Proven Results</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border/40">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <div className="bg-background p-8 text-center h-full hover:bg-card transition-colors duration-300">
                <p className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-2">{s.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-28 md:py-36">
      <div className="container">
        <AnimatedSection className="mb-16">
          <div className="accent-bar mb-6" />
          <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">Two Directions, One Team</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="card-bold rounded-sm p-10 md:p-12 h-full group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">For UK Brands Entering China</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                We help you build presence across WeChat, Xiaohongshu, Douyin, and beyond. From strategy to content to KOL partnerships, we ensure your brand connects with Chinese consumers—without losing your identity.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="card-bold rounded-sm p-10 md:p-12 h-full group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-sm bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">For Chinese Brands Entering the UK</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                We help you tell your story for a British audience. Through Western social platforms, PR, influencer campaigns, and brand positioning, we build the credibility and visibility you need to grow.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-28 md:py-36 border-t border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            Let's create something{" "}
            <span className="gradient-text">extraordinary.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Ready to bridge the gap between UK and China?
          </p>
          <Button asChild size="lg" className="rounded-none bg-primary hover:bg-primary/80 text-primary-foreground px-12 gap-2 text-base font-semibold h-14">
            <Link to="/contact">Get in Touch <ArrowRight size={18} /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
