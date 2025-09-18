import "./App.css";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";

const StyledFooter = styled.footer`
  margin-top: 4rem;
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.666);
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 64rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

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
    <StyledApp className="inconsolata-variable">
      <Header />
      <StyledLayoutContainer>
        <Resume />
        <StyledFooter>
          Built by {import.meta.env.VITE_DISPLAY_NAME} &copy; {currentYear}
        </StyledFooter>
      </StyledLayoutContainer>
    </StyledApp>
  );
}

export default App;
