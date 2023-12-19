import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//  Screens
import ListByContract from "./screens/listByContract";
import NftDetails from "./screens/nftDetails";
import ListByWallet from "./screens/listByWallet";

function App() {
  return (
    <>
      {/* React Toastify Container */}
      <ToastContainer position={"bottom-right"} />

      {/*  Routes */}
      <Routes>
        <Route path="/" element={<ListByContract />} />
        <Route path="/wallet" element={<ListByWallet />} />
        <Route path="/wallet/:address" element={<ListByWallet />} />
        <Route path="/nft/:address/:id" element={<NftDetails />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
