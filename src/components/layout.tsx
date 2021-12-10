import Footer from "./footer";
import Header from "./header";
import Main from "./main";

function Layout() {
  return (
    <div>
      <section id="header">
        <Header />
      </section>
      <Main />
      <Footer />
    </div>
  );
}
export default Layout;
