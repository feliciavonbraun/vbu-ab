import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}
export default App;
