import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Main() {
  const navigate = useNavigate();

  const handleClickNavigateButton0 = () => {
    navigate("/sub", { state: 0 });
  };
  const handleClickNavigateButton1 = () => {
    navigate("/sub", { state: 1 });
  };
  const handleClickNavigateButton2 = () => {
    navigate("/sub", { state: 2 });
  };

  return (
    <MainWrapper>
      <NavigateButton onClick={handleClickNavigateButton0}>
        Navigate 0
      </NavigateButton>
      <NavigateButton onClick={handleClickNavigateButton1}>
        Navigate 1
      </NavigateButton>
      <NavigateButton onClick={handleClickNavigateButton2}>
        Navigate 2
      </NavigateButton>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 100dvh;
`;

const NavigateButton = styled.button`
  width: 10rem;
  height: 5rem;
`;
