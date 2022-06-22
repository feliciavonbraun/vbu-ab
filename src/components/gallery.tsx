import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import gallerys from "./interfaces/galleryArray";
import { Container } from "./WrapperElements";

function Gallery() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container mainPadding>
      <Root>
        <h2>GALLERI</h2>
        <GalleryContainer>
          {gallerys.map((gallery) => (
            <ImageWrapper key={gallery.image}>
              <img src={gallery.image} alt="" width="100%" />
            </ImageWrapper>
          ))}
        </GalleryContainer>
      </Root>
    </Container>
  );
}
export default Gallery;

const Root = styled.div`
  background-color: var(--color-white);
  margin-top: 70px;

  @media screen and (max-width: 950px) {
    margin-top: 30px;
  }
`;

const GalleryContainer = styled.div`
  columns: 3;
  column-gap: 70px;

  @media screen and (max-width: 950px) {
    columns: 2;
    column-gap: 20px;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 70px;
`;
