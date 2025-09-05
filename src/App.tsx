import "./App.css";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
`;

const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 64rem;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <StyledApp className="inconsolata-variable">
      <StyledLayoutContainer>
        <div
          css={css`
            font-size: 2rem;
            text-align: center;
          `}
        >
          Hello, World!
        </div>
      </StyledLayoutContainer>
    </StyledApp>
  );
}

export default App;
