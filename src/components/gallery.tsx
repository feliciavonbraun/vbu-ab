import styled from "styled-components";
import gallerys from "./interfaces/galleryArray";

function Gallery() {
  return (
    <Root>
      <h2>GALLERI</h2>
      <GalleryContainer>
        {gallerys.map((gallery) => (
          <div key={gallery.image}>
            <img src={gallery.image} alt="" width="100%" />
          </div>
        ))}
      </GalleryContainer>
    </Root>
  );
}
export default Gallery;

const Root = styled.div`
  background-color: var(--color-white);
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 300px);
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
`;
