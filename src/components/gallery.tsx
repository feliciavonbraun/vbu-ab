import styled from "styled-components";
import gallerys from "./interfaces/galleryArray";
import { Container } from "./WrapperElements";

function Gallery() {
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
`;

const GalleryContainer = styled.div`
  columns: 3;
  column-gap: 70px;

  /* display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 300px); */
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
`;

const ImageWrapper = styled.div`
  margin-bottom: 70px;
`;
