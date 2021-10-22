import Greeting from "./main/greeting";
import ImageCarousel from "./main/imageCarousel";
import Schema from "./main/schema";
import Services from "./main/services";
// import PhotoGallery from "./main/photoGallery";

function Main() {
  return (
    <main>
      <Greeting />
      {/* <PhotoGallery/> */}
      <Services />
      <ImageCarousel />
      <Schema />
    </main>
  );
}
export default Main;