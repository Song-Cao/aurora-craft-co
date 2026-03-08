import { Link } from "react-router-dom";
import { ArrowRight, Brain, Clapperboard, Megaphone, Sparkles, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Brain, title: "AI Content & Creative Strategy", desc: "Intelligent content powered by data and imagination." },
  { icon: Megaphone, title: "Digital Campaign Development", desc: "Campaigns that cut through noise with precision." },
  { icon: Clapperboard, title: "Visual & Media Production", desc: "Cinematic storytelling for the digital age." },
  { icon: Sparkles, title: "Brand Communication", desc: "Narratives that resonate and inspire action." },
  { icon: MonitorPlay, title: "Interactive Media", desc: "Immersive experiences that captivate audiences." },
];

const caseStudies = [
  { title: "Neural Labs — AI Brand Launch", desc: "A complete brand identity and launch campaign for a pioneering AI research company.", outcome: "3x brand awareness in 90 days" },
  { title: "Heritage Routes — Immersive Tourism", desc: "An interactive digital experience for a cultural tourism consortium across Europe.", outcome: "200k+ digital interactions" },
  { title: "Lumière Beauty — Digital Storytelling", desc: "A multi-platform content strategy blending beauty and technology.", outcome: "150% increase in engagement" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">Creative Communication & Media Agency</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Where AI, Creativity and Media{" "}
            <span className="gradient-text">Converge.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Two Virtual Media is a next-generation communication and media agency dedicated to helping brands navigate the evolving landscape of AI-powered storytelling, immersive digital experiences, and modern brand communication.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/80 text-primary-foreground px-8 gap-2">
              <Link to="/contact">Start a Project <ArrowRight size={16} /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border/50 hover:bg-muted px-8">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 md:py-32">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Capabilities</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-8 h-full hover:glow-blue transition-shadow duration-500 group">
                <s.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies Preview */}
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Selected Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Case Studies</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <div className="glass rounded-xl overflow-hidden group hover:glow-purple transition-shadow duration-500">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-3xl opacity-30">✦</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
                  <span className="text-xs font-medium text-accent">{c.outcome}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full border-border/50 hover:bg-muted px-8 gap-2">
            <Link to="/case-studies">View All Projects <ArrowRight size={16} /></Link>
          </Button>
        </AnimatedSection>
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
            Ready to transform your brand's story with AI-driven creativity?
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
