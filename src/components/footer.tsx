import styled from "styled-components";
import { Container } from "./WrapperElements";

function Footer() {
  return (
    <StyledFooter>
      <Container mainPadding>
        <StyledMainContent>
          <p style={{ marginBottom: "0" }}>
            Kontakta oss <br /> von Braun Utbildning AB <br />
            <StyledA href="mailto:lotta@vonbraunutbildning.se">
              lotta@vonbraunutbildning.se
            </StyledA>
            <br />
            <StyledA href="tel:+46739519360">+46 (0)73-951 93 60</StyledA>
          </p>

          <p>
            I samarbete med: <br />
            Berrys Truck AB, <br />
            Greger Utbildningskonsult, <br />
            Bonnington mf utbildningföretag.
          </p>
        </StyledMainContent>
        <StyledP>
          ©2022 von Braun Utbildning AB |<span>&nbsp;</span>
          <StyledA
            href="https://feliciavonbraun.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Felicia von Braun
          </StyledA>
        </StyledP>
      </Container>
    </StyledFooter>
  );
}
export default Footer;

const StyledFooter = styled.footer`
  background-color: var(--bg-clr);
`;

const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const StyledA = styled.a`
  color: black;
  text-decoration: none;

  :visited {
    color: black;
  }

  :hover {
    color: var(--focus-clr);
  }
`;

const StyledP = styled.p`
  margin: 0;
  font-size: xx-small;
  display: flex;
  justify-content: center;
`;
