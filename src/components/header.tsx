import styled from "styled-components";
import Scaffolding from "../assets/scaffolding.jpg";
// import LogoWeb from "../assets/logos/figma_logo.svg";
// import LogoWeb from "../assets/logos/Logo_WEB.svg";
import LogoWeb from "../assets/logos/Logo_TRYCK.svg";
import Helmet from "../assets/logos/helmet.svg";
import { Container, FlexContainer } from "./WrapperElements";

function Header() {
  return (
    <Container id="header">
      <Nav>
        <a href="#header">
          <img src={Helmet} alt="Logo" style={{ width: "20%" }} />
        </a>

        <FlexContainer>
          <UL>
            <StyledA href="#contact">Kontaka oss</StyledA>
          </UL>
          <UL>
            <StyledA href="#services">Utbildningar</StyledA>
          </UL>
          <UL>
            <StyledA href="#imageCarousel">Galleri</StyledA>
          </UL>
          <UL>
            <StyledA href="#schedule" style={{ padding: 0 }}>
              Kommande utbildningar
            </StyledA>
          </UL>
        </FlexContainer>
      </Nav>
      <StyledHeader>
        <LogoContainer>
          <img src={LogoWeb} alt="Logo" width="100%" />
        </LogoContainer>
      </StyledHeader>
    </Container>
  );
}
export default Header;

const Nav = styled.nav`
  /* display: grid; */
  /* grid-template-columns: 3fr 1fr 1fr 1fr 1fr; */
  background: var(--color-gray);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
  padding: 0 40px;
  z-index: 1;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const UL = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: var(--color-black);
  padding-right: 20px;

  :hover {
    color: var(--focus-clr);
  }
`;

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
