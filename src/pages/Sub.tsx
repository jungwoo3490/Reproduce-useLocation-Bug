import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Sub() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickSubButton = () => {
    navigate("/");
  };

  return (
    <SubWrapper>
      <SubText>{`Current state value is ${location.state}`}</SubText>
      <SubButton onClick={handleClickSubButton}>Go to Main</SubButton>
    </SubWrapper>
  );
}

export default Sub;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100dvh;
`;

const SubText = styled.p`
  font-size: 2rem;
`;

const SubButton = styled.button`
  width: 10rem;
  height: 3rem;
`;
