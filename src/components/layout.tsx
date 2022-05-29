import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Footer from "./footer";
import Gallery from "./gallery";
import Header from "./header";
import MainPage from "./main";
import Nav from "./nav";
import { Container } from "./WrapperElements";

function Layout() {
  return (
    <>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Header />
          <Content>
            <Container style={{ maxWidth: "2500px" }}>
              <MainPage />
              <Footer />
            </Container>
          </Content>
        </Route>

        <Route path="/gallery/">
          <Container style={{ maxWidth: "2500px" }}>
            <Gallery />
            <Footer />
          </Container>
        </Route>
      </Switch>
    </>
  );
}
export default Layout;

const Content = styled.div`
  position: relative;
  top: 100vh;
  background: white;
`;
