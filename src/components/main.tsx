import styled from "styled-components";
import Contact from "./main/contact";
import ImageCarousel from "./main/imageCarousel";
import Schedule from "./main/schedule";
import Services from "./main/services";
import { Container } from "./WrapperElements";

function Main() {
  return (
    <StyledMain>
      <Container style={{ maxWidth: "2500px" }}>
        <Contact />
        <Services />
        <TemporarilyRemovedInMobile>
          <ImageCarousel />
          <Schedule />
        </TemporarilyRemovedInMobile>
      </Container>
    </StyledMain>
  );
}
export default Main;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TemporarilyRemovedInMobile = styled.section`
  @media screen and (max-width: 950px) {
    display: none;
  }
`;


