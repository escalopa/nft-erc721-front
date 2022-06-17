import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContractContextWrapper } from "./global/contractConteaxtWrapper";
import HomePage from "./pages/home";
import MintPage from "./pages/mint";

function App() {
  return (
    <ContractContextWrapper>
      <Router>
        <Routes>
          <Route path={"/mint"} element={<MintPage />} />
          <Route path={""} element={<HomePage />} />
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </Router>
    </ContractContextWrapper>
  );
}

export default App;
