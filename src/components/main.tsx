import Greeting from "./main/contact";
import ImageCarousel from "./main/imageCarousel";
import Schedule from "./main/schedule";
import Services from "./main/services";
import { Container } from "./WrapperElements";

function Main() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container style={{ maxWidth: "2500px" }}>
        <Greeting />
        <Services />
        <ImageCarousel />
        <Schedule />
      </Container>
    </main>
  );
}
export default Main;



