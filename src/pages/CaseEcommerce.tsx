import CaseStudyLayout from "@/components/CaseStudyLayout";
import industryEcommerce from "@/assets/industry-ecommerce.jpg";

const CaseEcommerce = () => (
  <CaseStudyLayout
    industry="E‑commerce"
    headline="AliExpress: Engaging UK Shoppers Beyond the Transaction"
    image={industryEcommerce}
    sections={[
      {
        title: "Challenge",
        content:
          "AliExpress had strong awareness among UK consumers but was often perceived primarily as a low‑price marketplace. The goal was to build engagement around product discovery and brand storytelling.",
      },
      {
        title: "Approach",
        content:
          "We shifted content strategy on Instagram and TikTok from promotional to inspirational—highlighting niche products, seller stories, and seasonal trends in a format that felt native to British social media habits. Influencer partnerships focused on unboxing, styling, and creative use of products.",
      },
      {
        title: "Outcome",
        content:
          "Engagement rates on social content increased by 82% year‑on‑year. TikTok follower growth exceeded targets by 150%, with a measurable uptick in traffic to category pages.",
      },
    ]}
  />
);

export default CaseEcommerce;
