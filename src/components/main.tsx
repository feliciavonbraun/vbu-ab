import styled from "styled-components";
import Contact from "./main/contact";
import ImageCarousel from "./main/imageCarousel";
import Schedule from "./main/schedule";
import Services from "./main/services";

const MainPage = () => (
  <>
    <Contact />
    <Services />
    <TemporarilyRemovedInMobile>
      <ImageCarousel />
      <Schedule />
    </TemporarilyRemovedInMobile>
  </>
);

export default MainPage;

const TemporarilyRemovedInMobile = styled.div`
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
