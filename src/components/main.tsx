import Contact from "./main/contact";
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
        <section id="contact">
          <Contact />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="imageCarousel">
          <ImageCarousel />
        </section>
        <section id="schedule">
          <Schedule />
        </section>
      </Container>
    </main>
  );
}
export default Main;



