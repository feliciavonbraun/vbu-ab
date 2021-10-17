import styled from "styled-components";
import PexelsStallning from "../assets/pexelsStallning.jpg";

function Header() {
  return (
    <header>
      <StyledContainer>
        <StyledTextContainer>von Braun Utbildning</StyledTextContainer>
      </StyledContainer>
    </header>
  );
}
export default Header;

const StyledContainer = styled.div`
  background-image: url(${PexelsStallning});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: end;
`;

const StyledTextContainer = styled.div`
  background: rgba(255, 255, 255, 0.6);
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
