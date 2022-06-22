import styled from "styled-components";
import Helmet from "../assets/logos/helmet.svg";
import { Container, FlexContainer } from "./WrapperElements";
import { Link } from "react-router-dom";

function Header() {
  const srollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container id="header">
      <Nav>
        <Link to="/" onClick={srollToTop}>
          <a href="#header">
            <img src={Helmet} alt="Logo" style={{ width: "20%" }} />
          </a>
        </Link>

        <StyledFlexContainer>
          <UL>
            <StyledA href="./#contact">Kontaka oss</StyledA>
          </UL>
          <UL>
            <StyledA href="./#services">Utbildningar</StyledA>
          </UL>
          <UL>
            <StyledLink to="./gallery">Galleri</StyledLink>
          </UL>
          <UL>
            <StyledA href="./#schedule" style={{ padding: 0 }}>
              Kommande utbildningar
            </StyledA>
          </UL>
        </StyledFlexContainer>
      </Nav>
    </Container>
  );
}
export default Header;

const Nav = styled.nav`
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
    background-color: transparent;
    padding: 0 10px;
  }
`;

const StyledFlexContainer = styled(FlexContainer)`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
  padding-right: 20px;

  :hover {
    color: var(--focus-clr);
  }
`;
