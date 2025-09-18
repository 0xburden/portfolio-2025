import styled from "@emotion/styled";

interface Experience {
  from: string;
  to: string;
  summary: string;
  company: string;
  title: string;
}

const EXPERIENCE: Experience[] = [
  {
    from: "July 2018",
    to: "Current",
    company: "Freelance (LLC)",
    title: "Web Developer",
    summary:
      "Contract design and development using technologies such as React/Next.js, Node.js and GCP/Firebase, nginx, linux servers, Figma, Adboe Photoshop/Illustrator and others for customers that have been recommended to me via word-of-mouth or through seeing my other work. This is my personal LLC.",
  },
  {
    from: "March 2024",
    to: "August 2025",
    company: "Marigold Labs",
    summary:
      "Maintenance and new feature development on legacy Next.js application, planning and development of new Vite/React application that will supercede the legacy application. Consultation and collaboration with UI/UX designer and other stakeholders to improve user experience and brand image.",
    title: "Front End Engineer",
  },
  {
    from: "April 2023",
    to: "October 2023",
    company: "GMBL Computer",
    summary:
      "Improving/updating legacy Next.js and TypeScript codebase, implementing and ideating new design and features utilizing Chakra UI/RainbowKit/WAGMI in the context of a real-time socket/REST API and smart contract interaction driven gaming platform.",
    title: "Front End Developer",
  },
  {
    from: "August 2022",
    to: "January 2023",
    company: "ZORA",
    summary:
      "Maintenance and development in Next.js/TypeScript for tooling used to create/administrate DAOs in the style of the NounsDAO project. Largely team-based development with emphasis on collaboration with other teams to ship new features and improve existing UI/UX.",
    title: "Front End Engineer (Contract)",
  },
  {
    from: "November 2019",
    to: "October 2021",
    title: "Front End Developer",
    company: "HUM Nutrition",
    summary:
      "Maintenance and feature development of administrative dashboard applications and landing pages for a global e-commerce health and wellness brand, primarily utilizing React (Next.js/TypeScript) as well as Vue.",
  },
  {
    from: "February 2018",
    to: "November 2019",
    title: "Web Engineer",
    company: "Trucking Unlimited",
    summary:
      "Maintenance and feature development on front and back end of a network of job board websites and marketing service for the trucking space. Technologies used included: PHP, JavaScript, MySQL, Linux server provision/administration, and HTML/CSS.",
  },
];

const Section = styled.section`
  border-top: 2px dashed rgba(255, 255, 255, 0.666);
  margin-top: 1rem;
  padding: 2rem;
  width: 100%;
  text-align: left;
`;

const SectionTitle = styled.div`
  font-size: 1.75rem;
`;

const ExperienceItem = styled.div`
  margin-top: 2rem;
  font-size: 1.25rem;
`;

const CompanyName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ExperienceDetails = styled.div`
  padding: 1rem;
`;

const DetailLabel = styled.span`
  color: rgba(255, 255, 255, 0.666);
`;

export function ExperienceSection() {
  return (
    <Section>
      <SectionTitle>Selected Experience</SectionTitle>

      {EXPERIENCE.map((exp) => (
        <ExperienceItem key={exp.company}>
          <CompanyName>{exp.company}</CompanyName>
          <ExperienceDetails>
            <div>
              <DetailLabel>From:</DetailLabel> {exp.from}
            </div>
            <div>
              <DetailLabel>To:</DetailLabel> {exp.to}
            </div>
            <div>
              <DetailLabel>Title:</DetailLabel> {exp.title}
            </div>
            <div>
              <DetailLabel>Summary:</DetailLabel> {exp.summary}
            </div>
          </ExperienceDetails>
        </ExperienceItem>
      ))}
    </Section>
  );
}
