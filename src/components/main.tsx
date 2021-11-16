import Greeting from "./main/greeting";
import ImageCarousel from "./main/imageCarousel";
import Schema from "./main/schema";
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
        <Schema />
      </Container>
    </main>
  );
}
export default Main;



