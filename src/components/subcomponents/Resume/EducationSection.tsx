import { css } from "@emotion/react";

export function EducationSection() {
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
