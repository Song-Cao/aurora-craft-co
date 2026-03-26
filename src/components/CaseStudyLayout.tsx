import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

interface CaseStudySection {
  title: string;
  content: string;
}

interface CaseStudyLayoutProps {
  industry: string;
  headline: string;
  image: string;
  sections: CaseStudySection[];
}

const CaseStudyLayout = ({ industry, headline, image, sections }: CaseStudyLayoutProps) => (
  <Layout>
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>
      <div className="container relative z-10">
        <AnimatedSection>
          <Button asChild variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground rounded-none">
            <Link to="/case-studies"><ArrowLeft size={16} /> Back to Case Studies</Link>
          </Button>
          <div className="accent-bar mb-6" />
          <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">{industry}</p>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight max-w-4xl">{headline}</h1>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl space-y-16">
        {sections.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg border-l-2 border-border pl-6">{s.content}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </Layout>
);

export default CaseStudyLayout;
