import { Globe, TrendingUp, Map, MessageSquare, Users, ShoppingCart, Megaphone, Compass, Share2, Newspaper, PenTool, Target } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const ukToChina = [
  {
    icon: Map,
    title: "Market Entry & Strategy",
    desc: "A roadmap grounded in consumer research, competitor positioning, and channel prioritisation. We identify where your brand fits, what resonates, and how to launch with impact.",
  },
  {
    icon: MessageSquare,
    title: "Chinese Social Media Management",
    desc: "Native-language content, community engagement, and campaign management across WeChat, Weibo, Xiaohongshu, Douyin, and Bilibili.",
  },
  {
    icon: Users,
    title: "KOL & KOC Partnerships",
    desc: "Access to a curated network of Chinese influencers—from top-tier celebrities to niche lifestyle creators. We handle casting, negotiation, content alignment, and performance tracking.",
  },
  {
    icon: ShoppingCart,
    title: "E‑commerce & Mini Program Development",
    desc: "From WeChat Mini Programs to Tmall and JD.com integrations, we help you sell where Chinese consumers already shop.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising (PPC) — China",
    desc: "Organic reach on Chinese platforms is limited. To scale your presence, you need a strategic paid media approach that puts your brand in front of the right people at the right moment.",
  },
];

const chinaToUk = [
  {
    icon: Compass,
    title: "UK Market Entry & Positioning",
    desc: "Understanding British consumer behaviour, category landscapes, and cultural nuances. We help you define a brand narrative that feels native to the UK.",
  },
  {
    icon: Share2,
    title: "Western Social Media Management",
    desc: "Full-service content, community, and campaign execution on Instagram, TikTok, LinkedIn and Facebook tailored to UK sensibilities.",
  },
  {
    icon: Newspaper,
    title: "UK Influencer & PR Outreach",
    desc: "Relationships with British journalists, editors, and influencers across lifestyle, tech, food, and business media. We build credibility, not just visibility.",
  },
  {
    icon: PenTool,
    title: "Creative & Storytelling",
    desc: "We don't translate your existing materials. We reinterpret your story for a British audience—adjusting tone, format, and visual language while preserving your brand essence.",
  },
  {
    icon: Target,
    title: "Paid Advertising (PPC) — UK",
    desc: "Organic reach on Western social platforms has declined significantly in recent years. To build momentum and scale your presence in the UK, a strategic paid media approach is essential.",
  },
];

const ServiceList = ({ services, delay = 0 }: { services: typeof ukToChina; delay?: number }) => (
  <div className="space-y-6">
    {services.map((s, i) => (
      <AnimatedSection key={s.title} delay={delay + i * 0.08}>
        <div className="glass rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start hover:glow-blue transition-shadow duration-500">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <s.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-lg md:text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </div>
      </AnimatedSection>
    ))}
  </div>
);

const Services = () => (
  <Layout>
    {/* For UK Brands Entering China */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase">Services</p>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            For UK Brands <span className="gradient-text">Entering China</span>
          </h1>
        </AnimatedSection>
        <ServiceList services={ukToChina} />
      </div>
    </section>

    {/* For Chinese Brands Entering the UK */}
    <section className="py-24 md:py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[150px]" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-sm font-medium text-secondary tracking-widest uppercase">Services</p>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-[1.1] mb-6">
            For Chinese Brands <span className="gradient-text">Entering the UK</span>
          </h1>
        </AnimatedSection>
        <ServiceList services={chinaToUk} delay={0.3} />
      </div>
    </section>
  </Layout>
);

export default Services;
