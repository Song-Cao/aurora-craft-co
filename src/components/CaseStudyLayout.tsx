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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>
      <div className="container relative z-10">
        <AnimatedSection>
          <Button asChild variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
            <Link to="/case-studies"><ArrowLeft size={16} /> Back to Case Studies</Link>
          </Button>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">{industry}</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-[1.1] max-w-4xl">{headline}</h1>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl space-y-16">
        {sections.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{s.content}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </Layout>
);

export default CaseStudyLayout;
