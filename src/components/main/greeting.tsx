import { CSSProperties } from "react";
import Stallning from "../../assets/stallning.jpg";
import styled from "styled-components";
import Email from "../../assets/email.svg";
import Phone from "../../assets/phone.svg";
import { FlexContainer } from "../WrapperElements";

function Greeting() {
  return (
    <div>
      <StyledAboutUs>
        <h2>KONTAKTA OSS</h2>
        <p>
          “Vi arbetar för att alla ska få en säker arbetsplats & att alla får
          möjligheten att komma hem oskadda”
        </p>
        <FlexContainer centered>
          <StyledA href="mailto:lotta@vonbraunutbildning.se">
            <img src={Email} alt="" width="50%" />
          </StyledA>
          <StyledA href="tel:+46731519360">
            <img src={Phone} alt="" width="50%" />
          </StyledA>
        </FlexContainer>
      </StyledAboutUs>
      <div style={middleImg}>
        <img src={Stallning} height="100%" width="100%" alt="" />
      </div>
    </div>
  );
}
export default Greeting;

const StyledAboutUs = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const middleImg: CSSProperties = {
  height: "20rem",
};

const StyledA = styled.a`
  :hover {
    transform: scale(1.1);
  }
`;
