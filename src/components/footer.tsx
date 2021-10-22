import styled from "styled-components";
import { FlexContainer } from "./WrapperElements";

function Footer() {
  return (
    <StyledFooter>
      <FlexContainer
        fullWidth
        style={{
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginBottom: "0" }}>
          Kontakts oss <br />{" "}
          <StyledA href="mailto:lotta@vonbraunutbildning.se">
            lotta@vonbraunutbildning.se
          </StyledA>
          <br />
          <StyledA href="tel:+46731519360">+46 (0)73-151 93 60</StyledA>
        </p>

        <p>
          I samarbete med: <br />
          Berrys Truck AB, <br />
          Greger Utbildningskonsult <br />
          Bonnington mf.
        </p>
      </FlexContainer>
      <p style={{ margin: "0" }}>
        ©2020 von Braun Utbildning AB |{" "}
        <StyledA
          href="https://feliciavonbraun.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Felicia von Braun
        </StyledA>
      </p>
    </StyledFooter>
  );
}
export default Footer;

const StyledFooter = styled.footer`
  background-color: var(--bg-clr);
  padding: 1rem;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledA = styled.a`
  color: black;

  :visited {
    color: black;
  }

  :hover {
    color: var(--primary-crl);
  }
`;
