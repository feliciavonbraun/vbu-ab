import styled from "styled-components";
import Email from "../../assets/email.svg";
import Phone from "../../assets/phone.svg";
import Person from "../../assets/person.svg";
import { Container } from "../WrapperElements";

function Contact() {
  return (
    <Container mainPadding>
      <h2 id="contact">KONTAKTA OSS</h2>
      <StyledContactArea>
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
              <span style={{ verticalAlign: "middle" }}>
                <img src={Person} alt="Symbol of person" width="5%" />
              </span>{" "}
              Säljare/Samordnare Lotta von Braun
            </StyledA>
          </p>

          <StyledP>
            <StyledA href="tel:+46739519360">
              <span style={{ verticalAlign: "middle" }}>
                <img src={Phone} alt="Symbol of phone" width="5%" />
              </span>{" "}
              +46 073-951 93 60
            </StyledA>
          </StyledP>

          <StyledP>
            <StyledA href="mailto:lotta@vonbraunutbildning.se">
              <span style={{ verticalAlign: "middle" }}>
                <img src={Email} alt="Symbol of email" width="5%" />
              </span>{" "}
              lotta@vonbraunutbildning.se
            </StyledA>
          </StyledP>
        </StyledContactDetails>
      </StyledContactArea>
    </Container>
  );
}
export default Contact;

const StyledContactArea = styled.div`
  display: grid;
  grid-template-columns: 16.6% 33.3% 50%;

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSlogan = styled.div`
  padding-right: 30px;
  text-align: justify;
  line-height: 190%;
  font-size: medium;
`;

const StyledContactDetails = styled.div`
  padding-left: 30px;
  border-left: solid black 0.25px;
  font-size: medium;
  line-height: 190%;

  @media screen and (max-width: 950px) {
    border-left: none;
    padding-left: 0;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;

const StyledP = styled.p`
  margin: 10px 0;

  :hover {
    transform: scale(1.06) translate(2%);
    cursor: pointer;
    ${StyledA} {
      color: var(--focus-clr);
    }
  }
`;
