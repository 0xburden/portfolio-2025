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

      <div
        css={css`
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          justify-content: center;
          padding: 1rem;

          @media (min-width: 768px) {
            flex-direction: row;
          }
        `}
      >
        <a
          href="mailto:unburdened.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            color: inherit;
            text-decoration: none;
            &:hover,
            &:active {
              text-decoration: underline;
            }
            &:visited {
              color: inherit;
            }
          `}
        >
          ✍️ Email
        </a>
        <a
          href="https://github.com/0xburden"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            color: inherit;
            text-decoration: none;
            &:visited {
              color: inherit;
            }
            &:hover,
            &:active {
              text-decoration: underline;
            }
          `}
        >
          💾 Github
        </a>
        <a
          href="https://discord.com/users/852412410257211423"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            color: inherit;
            text-decoration: none;
            &:visited {
              color: inherit;
            }
            &:hover,
            &:active {
              text-decoration: underline;
            }
          `}
        >
          💬 Discord
        </a>
      </div>

      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
