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
    {/* Hero — Who We Are */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutTeam} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Who We Are</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.1] mb-8">
            The hardest gap to close isn't geographical—<span className="gradient-text">it's cultural.</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="max-w-3xl">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Two Virtual Media was born from a simple observation: in cross-border marketing, the hardest gap to close isn't geographical—it's cultural.
            </p>
            <p>
              We've seen British brands invest heavily in China, only to find their messaging flattened by poor translation. We've seen Chinese brands arrive in the UK with impressive products, yet struggle to earn trust because the tone or format didn't resonate.
            </p>
            <p>
              Our team is based in London and fluent in both markets—not just linguistically, but behaviourally. We understand the nuances of British understatement and the rhythm of Chinese social commerce. That duality allows us to work fluidly in both directions.
            </p>
            <p className="text-foreground font-medium text-lg md:text-xl">
              We don't claim to be the biggest agency. We aim to be the sharpest.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Our Approach */}
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Approach</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">How We Work</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-8 md:p-10 h-full hover:glow-blue transition-shadow duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <a.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{a.title}</h3>
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
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Who We Work With</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Our team brings together British strategic rigour and Chinese digital fluency — grounded in both the UK and China. We partner with established brands and ambitious challengers across:
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.08}>
              <div className="glass rounded-xl p-6 text-center hover:glow-blue transition-shadow duration-500 h-full flex flex-col items-center justify-center min-h-[140px]">
                <img src={c.logo} alt={c.name} loading="lazy" className="h-16 w-auto object-contain mb-3" />
                <p className="text-xs md:text-sm text-muted-foreground">{c.industry}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
