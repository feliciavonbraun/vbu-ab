import styled from "styled-components";
import Email from "../../assets/email.svg";
import Phone from "../../assets/phone.svg";
import { Container, FlexContainer } from "../WrapperElements";

function Greeting() {
  return (
    <Container mainPadding>
      <StyledAboutUs>
        <h2>KONTAKTA OSS</h2>
        <p>
          “Vi arbetar för att alla ska få en säker arbetsplats & att alla ska få
          möjligheten att komma hem oskadda”
        </p>
        <FlexContainer centeredAlign centeredJusitify>
          <StyledA href="mailto:lotta@vonbraunutbildning.se">
            <img src={Email} alt="" width="50%" />
          </StyledA>
          <StyledA href="tel:+46739519360">
            <img src={Phone} alt="" width="50%" />
          </StyledA>
        </FlexContainer>
      </StyledAboutUs>
    </Container>
  );
}
export default Greeting;

const StyledAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledA = styled.a`
  :hover {
    transform: scale(1.1);
  }
`;
