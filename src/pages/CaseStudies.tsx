import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import industryAutomotive from "@/assets/industry-automotive.jpg";
import industryHospitality from "@/assets/industry-hospitality.jpg";
import industryFood from "@/assets/industry-food.jpg";
import industryEcommerce from "@/assets/industry-ecommerce.jpg";
import industryFashion from "@/assets/industry-fashion.jpg";
import industryTechnology from "@/assets/industry-technology.jpg";
import industryEducation from "@/assets/industry-education.jpg";
import industryRealestate from "@/assets/industry-realestate.jpg";

const industries = [
  { name: "Automotive", image: industryAutomotive, slug: "automotive" },
  { name: "Hospitality", image: industryHospitality, slug: "hospitality" },
  { name: "Food & Beverage", image: industryFood, slug: "food-beverage" },
  { name: "E‑commerce", image: industryEcommerce, slug: "ecommerce" },
  { name: "Fashion", image: industryFashion, slug: null },
  { name: "Technology", image: industryTechnology, slug: null },
  { name: "Education", image: industryEducation, slug: null },
  { name: "Real Estate", image: industryRealestate, slug: null },
];

const CaseStudies = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <AnimatedSection className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Case Studies</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            Industries We <span className="gradient-text">Serve</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cross-border marketing expertise across diverse sectors.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const card = (
              <div className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer">
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">{ind.name}</h3>
                  {ind.slug && (
                    <p className="text-xs text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View case study →
                    </p>
                  )}
                </div>
              </div>
            );

            return (
              <AnimatedSection key={ind.name} delay={i * 0.08}>
                {ind.slug ? (
                  <Link to={`/case-studies/${ind.slug}`}>{card}</Link>
                ) : (
                  card
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
