import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import MintPage from "./pages/mint";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/mint"} element={<MintPage />} />
        <Route path={""} element={<HomePage />} />
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
