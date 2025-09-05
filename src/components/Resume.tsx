import { css } from "@emotion/react";

function EducationSection() {
  return (
    <section
      css={css`
        border-top: 2px dashed rgba(255, 255, 255, 0.666);
        margin-top: 4rem;
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
        Education
      </div>
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        California State University, Northridge - Northridge, CA, USA
      </div>
      <div
        css={css`
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.666);
        `}
      >
        <div>B.S. Computer Information Technology</div>
        <div>2013 - 2018</div>
      </div>

      <div
        css={css`
          padding: 0 1rem;
          font-size: 1.25rem;
        `}
      >
        <span
          css={css`
            font-weight: 700;
          `}
        >
          Relevant Coursework
        </span>
        &nbsp;Algorithms & Data Structures, Deployment & Management of Operating
        Systems, Integrative Programming, Web Development & Hosting, Human
        Computer Interaction, Database Management Systems, System Analysis &
        Design, System Design & Implementation
      </div>

      <div
        css={css`
          margin-top: 1rem;
          padding: 0 1rem;
          font-size: 1.25rem;
        `}
      >
        <span
          css={css`
            font-weight: 700;
          `}
        >
          Minor in Art
        </span>
        &nbsp;Focus in Web &amp; Graphic Design, UI/UX Design
      </div>
    </section>
  );
}

function SkillsSection() {
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
          margin-top: 2rem;
          gap: 1rem;
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
        `}
      >
        Web Developer
      </h3>

      <EducationSection />
      <SkillsSection />
    </main>
  );
}
