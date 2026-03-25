import CaseStudyLayout from "@/components/CaseStudyLayout";
import industryFood from "@/assets/industry-food.jpg";

const CaseFood = () => (
  <CaseStudyLayout
    industry="Food & Beverage"
    headline="Hutong: Bringing a British-Chinese Restaurant Story to Both Sides"
    image={industryFood}
    sections={[
      {
        title: "Challenge",
        content:
          "Hutong, a restaurant with locations in London and Hong Kong, wanted to strengthen its identity as a bridge between British and Chinese dining cultures—appealing to local Londoners and Chinese visitors alike.",
      },
      {
        title: "Approach",
        content:
          "We ran a dual-market campaign: for UK audiences, we used Instagram and UK food media to tell the story of culinary craftsmanship and the restaurant's London heritage. For Chinese audiences, we activated on Xiaohongshu and WeChat, focusing on the authenticity of the experience and its appeal to Chinese travellers seeking elevated dining in London.",
      },
      {
        title: "Outcome",
        content:
          "Increased reservations from both segments. The campaign generated coverage in Evening Standard, Time Out London, and a 200% rise in user-generated content on Xiaohongshu.",
      },
    ]}
  />
);

export default CaseFood;
