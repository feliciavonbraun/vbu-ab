import styled from "styled-components";
import Email from "../../assets/email.svg";
import Phone from "../../assets/phone.svg";
import Person from "../../assets/person.svg";
import { Container } from "../WrapperElements";

function Greeting() {
  return (
    <Container mainPadding>
      <h2>KONTAKTA OSS</h2>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "16.6% 33.3% 50%",
        }}
      >
        <div></div>
        <StyledSlogan>
          <p>
            “Vi arbetar för att alla ska få en säker arbetsplats & att alla ska
            få möjligheten att komma hem oskadda”
          </p>
        </StyledSlogan>

        <StyledContactDetails>
          <p style={{ margin: "20px 0 10px 0" }}>
            <StyledA>
              <img src={Person} alt="" width="5%" />
            </StyledA>{" "}
            Säljare/Samordnare Lotta von Braun
          </p>

          <p style={{ margin: "10px 0" }}>
            <StyledA href="tel:+46739519360">
              <img src={Phone} alt="" width="5%" />
            </StyledA>{" "}
            +46 073-951 93 60
          </p>

          <p style={{ margin: "10px 0" }}>
            <StyledA href="mailto:lotta@vonbraunutbildning.se">
              <img src={Email} alt="" width="5%" />
            </StyledA>{" "}
            lotta@vonbraunutbildning.se
          </p>
        </StyledContactDetails>
      </Container>
    </Container>
  );
}
export default Greeting;

const StyledSlogan = styled.div`
  padding-right: 30px;
  text-align: justify;
  line-height: 30px;
`;

const StyledContactDetails = styled.div`
  padding-left: 30px;
  border-left: solid black 0.25px;
`;

const StyledA = styled.a`
  vertical-align: middle;

  :hover {
    transform: scale(1.3); // scale needs a display property
  }
`;
