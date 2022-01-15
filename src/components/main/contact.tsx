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
              <img src={Person} alt="Symbol of person" width="5%" />
            </StyledA>{" "}
            Säljare/Samordnare Lotta von Braun
          </p>

          <StyledP>
            <StyledA href="tel:+46739519360">
              <img src={Phone} alt="Symbol of phone" width="5%" />
            </StyledA>{" "}
            +46 073-951 93 60
          </StyledP>

          <StyledP>
            <StyledA href="mailto:lotta@vonbraunutbildning.se">
              <img src={Email} alt="Symbol of email" width="5%" />
            </StyledA>{" "}
            lotta@vonbraunutbildning.se
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
    display: flex;
    flex-direction: column;
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
`;

const StyledP = styled.p`
  margin: 10px 0;

  :hover {
    transform: scale(1.06) translate(2%);
    color: var(--focus-clr);
    cursor: pointer;
  }
`;

const StyledA = styled.a`
  vertical-align: middle;
`;
