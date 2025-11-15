import "./App.css";
import { css, keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";

const disappearLeft = keyframes({
  to: {
    transform: "translate(-100%, -25%)",
    opacity: "0",
  },
});

const disappearDown = keyframes({
  to: {
    transform: "translateY(100%)",
    opacity: 0,
  },
});

const appearFromRight = keyframes({
  from: {
    transform: "translate(100%, 25%)",
    opacity: 0,
  },
  to: {
    transform: "translateX(0)",
    opacity: 1,
  },
});

const footerStyles = css({
  marginTop: "4rem",
  fontSize: "1rem",
  textAlign: "center",
  padding: "1rem",
  color: "rgba(255, 255, 255, 0.666)",
});

const appStyles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem",
  ".disappear-left": {
    animation: disappearLeft,
    animationDuration: "0.8s",
    animationFillMode: "forwards",
    animationTimingFunction: "linear",
  },
  ".hide-right": {
    transform: "translateX(100%)",
    opacity: 0,
  },
  ".appear-from-right": {
    animation: appearFromRight,
    animationDuration: "0.8s",
    animationFillMode: "forwards",
    animationTimingFunction: "linear",
  },
  ".disappear-down": {
    animation: disappearDown,
    animationDuration: "0.8s",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-in",
  },
});

const layoutContainerStyles = css({
  boxShadow: "0px 0px 6rem rgba(0, 0, 0, 0.9)",
  borderRadius: "2.5rem",
  display: "grid",
  overflowY: "scroll",
  overflowX: "hidden",
  padding: "1rem",
  height: "calc(100vh - 4rem)",
});

const toggleStyles = css({
  background: "linear-gradient(120deg, #d53369 0%, #daae51 100%)",
  padding: "0.5rem 2rem",
  borderRadius: "2rem",
  border: "2px solid rgba(0, 0, 0, 0.5)",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1rem",
});

function App() {
  const [isTitleSet, setTitleSet] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!isTitleSet) {
      document.title = `${
        import.meta.env.VITE_DISPLAY_NAME
      } Portfolio ${currentYear}`;
      setTitleSet(true);
    }
  }, [isTitleSet]);

  return (
    <div css={appStyles} className="inconsolata-variable">
      <div css={layoutContainerStyles}>
        <Resume
          id="resume"
          className="hide-right"
          style={{ gridRow: "1 / 1", gridColumn: "1 / 1" }}
        />
        <Header id="header" style={{ gridRow: "1 / 1", gridColumn: "1 / 1" }} />
        <div
          css={css({
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            padding: "1rem",
            maxHeight: "calc(100vh - 5rem)",
          })}
          style={{ gridRow: "1 / 1", gridColumn: "1 / 1" }}
        >
          <button
            id="toggle"
            css={toggleStyles}
            onClick={() => {
              document
                .querySelector("#header")
                ?.classList.add("disappear-left");
              document
                .querySelector("#resume")
                ?.classList.add("appear-from-right");
              document
                .querySelector("#toggle")
                ?.classList.add("disappear-down");
            }}
          >
            <span css={css({ fontWeight: "bold" })}>MORE</span>
            <span css={css({ fontSize: "1.5rem" })}> 🔎 </span>
          </button>
        </div>
      </div>
      <footer css={footerStyles}>
        Built by {import.meta.env.VITE_DISPLAY_NAME} &copy; {currentYear}
      </footer>
    </div>
  );
}

export default App;
