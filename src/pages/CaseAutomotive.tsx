import CaseStudyLayout from "@/components/CaseStudyLayout";
import industryAutomotive from "@/assets/industry-automotive.jpg";

const CaseAutomotive = () => (
  <CaseStudyLayout
    industry="Automotive"
    headline="BYD: Building UK Credibility for a Chinese Automotive Leader"
    image={industryAutomotive}
    sections={[
      {
        title: "Challenge",
        content:
          "BYD had established itself as a global leader in electric vehicles but was relatively unknown to UK consumers. The perception of Chinese automotive brands in the UK remained an obstacle.",
      },
      {
        title: "Approach",
        content:
          'We focused on shifting the conversation from "where the car is from" to "what the car offers." Through a combination of targeted UK press outreach, influencer test drives, and a content series highlighting BYD\'s technology heritage and sustainability credentials, we reframed the brand.',
      },
      {
        title: "Outcome",
        content:
          "Coverage in key automotive and business titles including Autocar, The Times, and TechRadar. Brand consideration among UK target audiences increased by 36% within six months. BYD's UK launch was supported by a sustained lift in positive sentiment across social channels.",
      },
    ]}
  />
);

export default CaseAutomotive;
