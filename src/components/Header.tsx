import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ubbenLogo from "../assets/ubben-logo.svg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  background: linear-gradient(120deg, #d53369 0%, #daae51 100%);
  padding: 1rem;
`;

const FakeWindow = styled.div`
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  border: 1px solid #212124;
  border-top: 1.5rem solid #212124;
  box-shadow: 1px 10px 21px rgba(0, 0, 0, 0.333);
  height: 300px;
  padding: 0.5rem;
  position: relative;
  max-width: 36rem;
  width: 100%;
`;

const FakeWindowButtonContainer = styled.div`
  position: absolute;
  top: -18px;
  left: 8px;
  display: flex;
  gap: 0.333rem;
  width: 100%;
`;

const FakeButton = styled.div<{ color: "red" | "green" | "yellow" }>`
  background-color: ${(props) => props.color};
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 0.666rem;
  width: 0.666rem;
  border-radius: 100%;
`;

function FakeWindowButtons() {
  const currentYear = new Date().getFullYear();
  const displayName = import.meta.env.VITE_DISPLAY_NAME;

  return (
    <FakeWindowButtonContainer>
      <FakeButton color="red" />
      <FakeButton color="yellow" />
      <FakeButton color="green" />
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
    </FakeWindowButtonContainer>
  );
}

export function Header() {
  return (
    <HeaderContainer>
      <FakeWindow>
        <FakeWindowButtons />
        <div>$ show logo</div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
          `}
        >
          <img
            css={css`
              height: 12rem;
              width: auto;
            `}
            src={ubbenLogo}
            alt=""
          />
        </div>
      </FakeWindow>
    </HeaderContainer>
  );
}
