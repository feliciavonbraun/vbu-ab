import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./layout";

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
