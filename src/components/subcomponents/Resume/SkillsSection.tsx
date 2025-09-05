import { css } from "@emotion/react";

export function SkillsSection() {
  return (
    <section
      css={css`
        border-top: 2px dashed rgba(255, 255, 255, 0.666);
        margin-top: 1rem;
        padding: 2rem;
        width: 100%;
        text-align: left;
      `}
    >
      <div
        css={css`
          font-size: 1.75rem;
        `}
      >
        Skills
      </div>

      <div
        css={css`
          font-size: 1.25rem;
          display: flex;
          flex-direction: row;
          margin-top: 2rem;
          gap: 1rem;

          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            font-weight: 700;
          `}
        >
          Languages
        </div>
        <div>
          JavaScript/TypeScript (React.js, Next.js, Node.js), PHP (WordPress,
          Laravel), HTML/HTML5, CSS/CSS3/SCSS, SQL (MySQL, PostgreSQL), GraphQL
        </div>
      </div>

      <div
        css={css`
          font-size: 1.25rem;
          display: flex;
          margin-top: 2rem;
          gap: 1rem;

          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            font-weight: 700;
          `}
        >
          Software
        </div>
        <div>
          Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma,
          Microsoft Office (Word, Excel, PowerPoint)
        </div>
      </div>

      <div
        css={css`
          font-size: 1.25rem;
          display: flex;
          margin-top: 2rem;
          gap: 1rem;

          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            font-weight: 700;
          `}
        >
          Miscellaneous
        </div>
        <div>
          Linux (Ubuntu, CentOS, Fedora/RHEL, Arch) Operating System
          Administration, Shell Scripting, Git, Apache, NGINX, NoSQL (MongoDB,
          Google Cloud Firestore)
        </div>
      </div>
    </section>
  );
}
