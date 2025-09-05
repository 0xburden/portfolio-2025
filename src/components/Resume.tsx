import { css } from "@emotion/react";
import { EducationSection } from "./subcomponents/Resume/EducationSection";
import { SkillsSection } from "./subcomponents/Resume/SkillsSection";
import { ExperienceSection } from "./subcomponents/Resume/ExperienceSection";

export function Resume() {
  return (
    <main
      css={css`
        margin-top: 2rem;
        font-size: 1.5rem;
      `}
    >
      <h1
        css={css`
          font-size: 4rem;
          text-align: center;
          margin: 0;
          padding: 0;
        `}
      >
        {import.meta.env.VITE_DISPLAY_NAME}
      </h1>
      <h3
        css={css`
          margin: 0;
          margin-top: 1rem;
          padding: 0;
          font-weight: 500;
          font-size: 2rem;
          text-align: center;
        `}
      >
        Web Developer
      </h3>

      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
