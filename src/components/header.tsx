import styled from "styled-components";
import Scaffolding from "../assets/scaffolding.jpg";

function Header() {
  return (
    <StyledContainer>
      <StyledLogoContainer>von Braun Utbildning</StyledLogoContainer>
    </StyledContainer>
  );
}
export default Header;

const StyledContainer = styled.header`
  background-image: url(${Scaffolding});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: end;
`;

const StyledLogoContainer = styled.div`
  background: rgba(255, 255, 255, 0.6);
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
