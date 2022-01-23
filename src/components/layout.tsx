import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

function Layout() {
  return (
    <div>
      <Header />
      <Content>
        <Main />
        <Footer />
      </Content>
    </div>
  );
}
export default Layout;

const Content = styled.div`
  position: relative;
  top: 100vh;
  background: white;
`;
