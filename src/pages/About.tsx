import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  { name: "Alex Mercer", role: "Founder & Creative Director" },
  { name: "Sophia Chen", role: "Head of AI Strategy" },
  { name: "Marcus Rivera", role: "Lead Visual Director" },
  { name: "Elena Vasquez", role: "Head of Digital Campaigns" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">About Us</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.1] mb-8">
            Shaping the future of <span className="gradient-text">creative communication.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Two Virtual Media is a forward-thinking creative agency exploring the intersection of artificial intelligence, digital media, and contemporary aesthetics. Our mission is to help brands communicate with clarity, imagination, and cultural relevance in an increasingly intelligent digital world.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="glass rounded-xl p-10">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower brands with intelligent, beautiful, and culturally resonant communication that bridges the gap between technology and human emotion. We believe the most powerful stories are told at the intersection of data and creativity.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass rounded-xl p-10">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every brand has access to the creative power of AI — where technology amplifies human imagination rather than replacing it, and where communication is as intelligent as it is inspiring.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <AnimatedSection>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Creative Philosophy</p>
          <blockquote className="font-heading text-2xl md:text-3xl font-semibold leading-relaxed text-foreground mb-6">
            "We don't just create content — we craft intelligent narratives that move people and markets."
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            Our approach blends analytical rigor with artistic intuition. Every project begins with deep understanding — of the audience, the market, and the cultural moment — and evolves into work that feels both purposeful and unexpected.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">The Team</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Creative Minds Behind the Work</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <span className="font-heading text-xl font-bold text-foreground">{t.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h4 className="font-heading text-sm font-semibold text-foreground">{t.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
