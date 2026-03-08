import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import caseNeural from "@/assets/case-neural.jpg";
import caseHeritage from "@/assets/case-heritage.jpg";
import caseLumiere from "@/assets/case-lumiere.jpg";

const cases = [
  {
    title: "Neural Labs — AI Brand Launch",
    category: "AI Technology",
    desc: "We partnered with Neural Labs, a cutting-edge AI research company, to build their brand from the ground up. From visual identity to a multi-channel launch campaign, we positioned them as a leader in the AI space with a human-centered approach to communication.",
    outcomes: ["3x brand awareness in 90 days", "50+ media placements", "Award-winning visual identity"],
    image: caseNeural,
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Heritage Routes — Immersive Cultural Tourism",
    category: "Cultural Tourism",
    desc: "Heritage Routes is a consortium of European cultural tourism organizations. We created an immersive digital platform and interactive media campaign that brought historical destinations to life through AR experiences, documentary content, and interactive storytelling.",
    outcomes: ["200k+ digital interactions", "35% increase in bookings", "Featured in Design Week"],
    image: caseHeritage,
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    title: "Lumière Beauty — Digital Storytelling",
    category: "Beauty & FMCG",
    desc: "For Lumière Beauty, we developed a multi-platform content strategy that merged beauty culture with technology narratives. Through AI-generated visual art, influencer collaborations, and editorial storytelling, we redefined how the brand connects with a new generation.",
    outcomes: ["150% increase in engagement", "2M+ content views", "Expanded to 3 new markets"],
    image: caseLumiere,
    gradient: "from-accent/20 to-secondary/20",
  },
];

const CaseStudies = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <AnimatedSection className="max-w-2xl mb-20">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Case Studies</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            Work that <span className="gradient-text">speaks.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of projects where creativity, technology, and strategy came together to deliver measurable impact.
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {cases.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <div className="glass rounded-2xl overflow-hidden">
                <div className={`h-64 md:h-80 bg-gradient-to-br ${c.gradient} flex items-center justify-center`}>
                  <span className="text-6xl opacity-20">✦</span>
                </div>
                <div className="p-8 md:p-12">
                  <span className="text-xs font-medium text-primary tracking-widest uppercase">{c.category}</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4 text-foreground">{c.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">{c.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {c.outcomes.map((o) => (
                      <span key={o} className="text-xs font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
