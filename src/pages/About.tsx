import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Languages, BarChart3 } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import logoByd from "@/assets/logo-byd.png";
import logoAliexpress from "@/assets/logo-aliexpress.png";
import logoStayCamden from "@/assets/logo-stay-camden.png";
import logoHutong from "@/assets/logo-hutong.png";
import logoFashion from "@/assets/logo-fashion-luxury.png";

const approaches = [
  {
    icon: Target,
    title: "Strategy before platforms.",
    desc: "We start with research, audience insight, and competitive mapping—then build the channel plan around it.",
  },
  {
    icon: Languages,
    title: "Cultural fluency over translation.",
    desc: "Localisation isn't a final step; it's embedded in how we write, design, and plan campaigns from day one.",
  },
  {
    icon: BarChart3,
    title: "Measurable outcomes, not vanity metrics.",
    desc: "We focus on what matters to your business: brand lift, engagement quality, conversion, and long-term equity.",
  },
];

const clients = [
  { name: "BYD", industry: "Automotive", logo: logoByd },
  { name: "AliExpress", industry: "E-commerce & Tech", logo: logoAliexpress },
  { name: "STAY Camden", industry: "Hospitality", logo: logoStayCamden },
  { name: "Hutong", industry: "Food & Beverage", logo: logoHutong },
  { name: "Fashion, Lifestyle & Luxury", industry: "Fashion, lifestyle, and luxury goods", logo: logoFashion },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutTeam} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <AnimatedSection className="lg:col-span-5">
            <div className="accent-bar mb-6" />
            <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">Who We Are</p>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-[1.0] tracking-tight">
              The hardest gap to close isn't geographical—
              <span className="gradient-text">it's cultural.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg border-l-2 border-border pl-8 mt-4">
              <p>
                Two Virtual Media was born from a simple observation: in cross-border marketing, the hardest gap to close isn't geographical—it's cultural.
              </p>
              <p>
                We've seen British brands invest heavily in China, only to find their messaging flattened by poor translation. We've seen Chinese brands arrive in the UK with impressive products, yet struggle to earn trust because the tone or format didn't resonate.
              </p>
              <p>
                Our team is based in London and fluent in both markets—not just linguistically, but behaviourally. We understand the nuances of British understatement and the rhythm of Chinese social commerce.
              </p>
              <p className="text-foreground font-semibold text-lg md:text-xl">
                We don't claim to be the biggest agency. We aim to be the sharpest.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Our Approach */}
    <section className="py-24 md:py-32 bg-card/40 border-y border-border/30">
      <div className="container">
        <AnimatedSection className="mb-16">
          <div className="accent-bar mb-6" />
          <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">Our Approach</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">How We Work</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approaches.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.1}>
              <div className="card-bold rounded-sm p-8 md:p-10 h-full">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                  <a.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{a.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Who We Work With */}
    <section className="py-24 md:py-32">
      <div className="container">
        <AnimatedSection className="max-w-3xl mb-16">
          <div className="accent-bar mb-6" />
          <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">Who We Work With</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Our team brings together British strategic rigour and Chinese digital fluency — grounded in both the UK and China.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.08}>
              <div className="card-bold rounded-sm p-6 text-center h-full flex flex-col items-center justify-center min-h-[140px]">
                <img src={c.logo} alt={c.name} loading="lazy" className="h-16 w-auto object-contain mb-3" />
                <p className="text-xs text-muted-foreground">{c.industry}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
