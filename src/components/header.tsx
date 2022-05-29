import styled from "styled-components";
import Scaffolding from "../assets/scaffolding.jpg";
import LogoWeb from "../assets/logos/Logo_TRYCK.svg";
import { Container } from "./WrapperElements";

function Header() {
  return (
    <Container id="header">
      <StyledHeader>
        <LogoContainer>
          <img src={LogoWeb} alt="Logo" width="100%" />
        </LogoContainer>
      </StyledHeader>
    </Container>
  );
}
export default Header;

const StyledHeader = styled.header`
  background-image: url(${Scaffolding});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
  width: 100%;
  height: 100vh;

  position: fixed;
  z-index: -1;
  /* display: flex; */
  /* justify-content: end; */
`;

const LogoContainer = styled.div`
  background: rgba(255, 255, 255, 0.351);
  display: flex;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
