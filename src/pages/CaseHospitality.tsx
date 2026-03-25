import CaseStudyLayout from "@/components/CaseStudyLayout";
import industryHospitality from "@/assets/industry-hospitality.jpg";

const CaseHospitality = () => (
  <CaseStudyLayout
    industry="Hospitality"
    headline="STAY Camden: A London Hotel, Curated for Chinese Travellers"
    image={industryHospitality}
    sections={[
      {
        title: "Challenge",
        content:
          "STAY Camden offered a distinctive boutique experience in London but lacked visibility among high-value Chinese tourists and students, who increasingly prioritise independent hotels with local character.",
      },
      {
        title: "Approach",
        content:
          "We developed a Xiaohongshu-first strategy, creating visual narratives that positioned STAY Camden as a design-forward, culturally immersive base. Collaborations with UK-based Chinese lifestyle KOLs drove authentic, location‑focused content. We also optimised their WeChat presence with practical travel information and direct booking pathways.",
      },
      {
        title: "Outcome",
        content:
          "Xiaohongshu engagement tripled over the campaign period. Direct booking inquiries from Chinese travellers increased by 47%, with the hotel seeing a measurable rise in Chinese guest stays during peak travel seasons.",
      },
    ]}
  />
);

export default CaseHospitality;
