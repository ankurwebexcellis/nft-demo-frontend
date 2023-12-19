import { Routes, Route, useLocation } from "react-router-dom";

//  Screens
import ListByContract from "./screens/listByContract";
import NftDetails from "./screens/nftDetails";
import ListByWallet from "./screens/listByWallet";

//  Components
import Header from "./components/header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListByContract />} />
      <Route path="/wallet" element={<ListByWallet />} />
      <Route path="/:id" element={<NftDetails />} />
    </Routes>
  );
}

export default App;
