import { Routes, Route, useLocation } from "react-router-dom";

//  Screens
import NftListings from "./screens/nftListings";
import NftDetails from "./screens/nftDetails";

//  Components
import Header from "./components/header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NftListings />} />
      <Route path="/:id" element={<NftDetails />} />
    </Routes>
  );
}

export default App;
