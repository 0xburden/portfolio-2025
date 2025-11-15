import { css } from "@emotion/react";
import { type ComponentPropsWithRef } from "react";
import personalLogo from "../assets/personal-logo.svg";
import burden from "../assets/0xburden.jpg";

const headerContainerStyles = css({
  display: "flex",
  justifyContent: "center",
  height: "100%",
});

const fakeWindowStyles = css({
  backgroundColor: "#1a1a1a",
  borderRadius: "0.5rem",
  border: "1px solid #212124",
  borderTop: "1.5rem solid #212124",
  boxShadow: "1px 10px 21px rgba(0, 0, 0, 0.333)",
  padding: "0.5rem",
  maxHeight: "500px",
  marginTop: "2rem",
  position: "relative",
  maxWidth: "36rem",
  width: "100%",
});

const fakeWindowButtonContainerStyles = css({
  position: "absolute",
  top: "-18px",
  left: "8px",
  display: "flex",
  gap: "0.333rem",
  width: "100%",
});

const getFakeButtonStyles = (color: "red" | "green" | "yellow") =>
  css({
    backgroundColor: color,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    height: "0.666rem",
    width: "0.666rem",
    borderRadius: "100%",
  });

function FakeWindowButtons() {
  const currentYear = new Date().getFullYear();
  const displayName = import.meta.env.VITE_DISPLAY_NAME;

  return (
    <div css={fakeWindowButtonContainerStyles}>
      <div css={getFakeButtonStyles("red")} />
      <div css={getFakeButtonStyles("yellow")} />
      <div css={getFakeButtonStyles("green")} />
      <div
        css={css`
          font-family: sans-serif;
          font-size: 0.666rem;
          text-align: center;
          transform: translateX(-1.666rem);
          width: 100%;
        `}
      >
        📂 {displayName ? `${displayName} -` : ""} Portfolio {currentYear}
      </div>
    </div>
  );
}

export function Header(props: ComponentPropsWithRef<"div">) {
  return (
    <div {...props}>
      <div css={headerContainerStyles}>
        <div css={fakeWindowStyles} id="window">
          <FakeWindowButtons />
          <div>$ show info</div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 1rem;
            `}
          >
            {import.meta.env.VITE_DISPLAY_TYPE === "personal" ? (
              <img
                css={css`
                  display: block;
                  height: 12rem;
                  width: auto;
                `}
                src={personalLogo}
                alt=""
              />
            ) : (
              <img
                css={css`
                  display: block;
                  height: 10rem;
                  width: auto;
                  border-radius: 100%;
                `}
                src={burden}
                alt=""
              />
            )}
          </div>

          <h1
            css={css({
              fontSize: "4rem",
              textAlign: "center",
              margin: 0,
              padding: 0,
            })}
          >
            {import.meta.env.VITE_DISPLAY_NAME}
          </h1>
          <h3
            css={css({
              margin: 0,
              marginTop: "1rem",
              padding: 0,
              fontWeight: 500,
              fontSize: "2rem",
              textAlign: "center",
            })}
          >
            Web Developer
          </h3>

          <div
            css={css({
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              justifyContent: "center",
              padding: "1rem",
              "@media (min-width: 768px)": {
                flexDirection: "row",
              },
            })}
          >
            <a
              href="mailto:unburdened.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              css={{
                color: "inherit",
                textDecoration: "none",
                "&:hover, &:active": {
                  textDecoration: "underline",
                },
                "&:visited": {
                  color: "inherit",
                },
              }}
            >
              ✍️ Email
            </a>
            <a
              href="https://github.com/0xburden"
              target="_blank"
              rel="noopener noreferrer"
              css={css({
                color: "inherit",
                textDecoration: "none",
                "&:visited": {
                  color: "inherit",
                },
                "&:hover, &:active": {
                  textDecoration: "underline",
                },
              })}
            >
              💾 Github
            </a>
            <a
              href="https://discord.com/users/852412410257211423"
              target="_blank"
              rel="noopener noreferrer"
              css={css({
                color: "inherit",
                textDecoration: "none",
                "&:visited": {
                  color: "inherit",
                },
                "&:hover, &:active": {
                  textDecoration: "underline",
                },
              })}
            >
              💬 Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
