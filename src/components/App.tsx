import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}
export default App;
