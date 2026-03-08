import { Brain, Megaphone, Clapperboard, Sparkles, MonitorPlay } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Brain,
    title: "AI Content & Creative Strategy",
    desc: "We leverage artificial intelligence to develop content strategies that are data-informed yet creatively bold. From AI-generated visual concepts to intelligent copywriting, we help brands speak with precision and personality in the age of machine learning.",
  },
  {
    icon: Megaphone,
    title: "Digital Campaign Development",
    desc: "Our campaigns are engineered for impact. We design multi-platform digital campaigns that combine compelling storytelling with smart targeting, ensuring your message reaches the right audience at the right moment with maximum resonance.",
  },
  {
    icon: Clapperboard,
    title: "Visual & Media Production",
    desc: "From cinematic brand films to dynamic social content, our production team creates visual media that captures attention and communicates with clarity. We blend traditional craft with cutting-edge tools for a distinctive visual signature.",
  },
  {
    icon: Sparkles,
    title: "Brand Communication & Storytelling",
    desc: "Great brands are built on great stories. We help companies define their narrative identity and communicate it consistently across every touchpoint — from brand positioning to editorial content and thought leadership.",
  },
  {
    icon: MonitorPlay,
    title: "Interactive Media Experiences",
    desc: "We design immersive digital experiences that go beyond the screen — interactive installations, AR/VR experiences, and web-based interactive narratives that engage audiences in entirely new ways.",
  },
];

const Services = () => (
  <Layout>
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[150px]" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-2xl mb-20">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Our Services</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            How we help brands <span className="gradient-text">thrive.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a full spectrum of creative and communication services, all unified by a commitment to innovation, quality, and cultural relevance.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="glass rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start hover:glow-blue transition-shadow duration-500">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
