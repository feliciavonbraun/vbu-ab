import Greeting from "./main/greeting";
import ImageCarousel from "./main/imageCarousel";
import Schema from "./main/schema";
import Services from "./main/services";

function Main() {
  return (
    <main>
      <Greeting />
      <Services />
      <ImageCarousel />
      <Schema />
    </main>
  );
}
export default Main;

// FOR CONTACT FORM WITHOUT DATABASE/SERVER
// https://medium.com/@patienceadajah/how-to-send-emails-from-a-react-application-without-a-backend-server-1dd8718ceedd
// https://blog.jakoblind.no/react-forms-hooks/
// https://www.webtips.dev/react-contact-form-without-backend

// FOR ENTER USER BASED CONTENT WITHOUT DATABASED/SERVER
// https://www.freecodecamp.org/news/how-to-add-a-serverless-database-to-react-projects-and-web-apps/
