import styled from "styled-components";
import Scaffolding from "../assets/scaffolding.jpg";
// import LogoWeb from "../assets/logos/figma_logo.svg";
// import LogoWeb from "../assets/logos/Logo_WEB.svg";
import LogoWeb from "../assets/logos/Logo_TRYCK.svg";
import Helmet from "../assets/logos/helmet.svg";
import { Container, FlexContainer } from "./WrapperElements";

function Header() {
  return (
    <Container>
      <StyledNav>
        <a href="#header">
          <img src={Helmet} alt="Logo" style={{ width: "20%" }} />
        </a>

        <FlexContainer>
          <StyledUL>
            <StyledA href="#contact">Kontaka oss</StyledA>
          </StyledUL>
          <StyledUL>
            <StyledA href="#services">Utbildningar</StyledA>
          </StyledUL>
          <StyledUL>
            <StyledA href="#imageCarousel">Galleri</StyledA>
          </StyledUL>
          <StyledUL>
            <StyledA href="#schedule" style={{ padding: 0 }}>
              Kommande utbildningar
            </StyledA>
          </StyledUL>
        </FlexContainer>
      </StyledNav>
      <StyledContainer id="back-to-top-anchor">
        <StyledLogoContainer>
          <img src={LogoWeb} alt="Logo" />
        </StyledLogoContainer>
      </StyledContainer>
    </Container>
  );
}
export default Header;

const StyledNav = styled.nav`
  background: var(--color-gray);
  position: fixed;
  /* display: grid; */
  /* grid-template-columns: 3fr 1fr 1fr 1fr 1fr; */
  display: flex;

  width: 100%;
  height: 70px;
  align-items: center;
  padding: 0 40px;
  z-index: 1;

  justify-content: space-between;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const StyledUL = styled.ul`
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

const StyledContainer = styled.header`
  background-image: url(${Scaffolding});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
  width: 100%;
  height: 100vh;

  /* display: flex; */
  /* justify-content: end; */
`;

const StyledLogoContainer = styled.div`
  background: rgba(255, 255, 255, 0.351);
  display: flex;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
