import { type ComponentPropsWithRef } from "react";
import { css } from "@emotion/react";
import { EducationSection } from "./subcomponents/Resume/EducationSection";
import { SkillsSection } from "./subcomponents/Resume/SkillsSection";
import { ExperienceSection } from "./subcomponents/Resume/ExperienceSection";

export function Resume(props: ComponentPropsWithRef<"div">) {
  return (
    <div {...props}>
      <main
        css={css({
          fontSize: "1.5rem",
        })}
      >
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
