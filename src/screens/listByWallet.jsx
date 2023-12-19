import React, { useEffect, useState } from "react";

//  API
import { loadNftByContract } from "../lib/api";

//  Components
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import CardLoading from "../components/cardLoading";

function ListByWallet() {
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState("");

  const [wallet, setWallet] = useState("");

  const connectWallet = async () => {
    try {
      let ethereum = window.ethereum;
      if (!ethereum) return window.open("https://metamask.app.link/dapp/" + process.env.REACT_APP_SITE_URL, "_blank");

      // Check if we are authorized to access the user's wallet
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setWallet(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNfts = async () => {
    setLoading(true);
    try {
      // const response = await loadNftByContract(
      //   "0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7"
      // );
      // setNftList(response?.nfts);
      // setNext(response?.next);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchNfts();
  }, []);

  return (
    <>
      <Header />
      {wallet ? (
        <div className="page-wrapper">
          <Sidebar page="wallet" />
          <div className="main-content-wrapper position-relative">
            <div className="mcw-header d-flex align-items-center">
              <h1>Contests</h1>
            </div>
            <div className="fwc-wrapper">
              <div class="fwc-head ">
                <div class="fwc-inner">
                  <ul class="filter-mode-list d-flex flex-wrap align-items-center">
                    <li class="flex-fill">
                      <div class="fml-box">
                        <label class="form-label">Keyword</label>
                        <input type="text" class="form-control" />
                      </div>
                    </li>
                    <li class="flex-fill">
                      <div class="fml-box">
                        <label class="form-label">Entry Fee</label>
                        <select class="form-select">
                          <option selected></option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <div class="fwc-btn d-flex align-items-center justify-content-end">
                    <a href="#!" class="btn-text">
                      Reset
                    </a>
                    <a href="#!" class="btn btn-primary btn-sm">
                      Search
                    </a>
                  </div>
                </div>
              </div>
              <ul className="grid-card-list d-flex flex-wrap">
                {loading ? (
                  <>
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                  </>
                ) : (
                  <Card />
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="page-wrapper">
          <Sidebar page="wallet" />
          <div className="main-content-wrapper position-relative">
            <div className="mcw-header d-flex align-items-center">
              <h1>Contests</h1>
            </div>
            <div className="fwc-wrapper"></div>
            <a href="#!" class="btn btn-primary btn-sm" onClick={() => connectWallet()}>
              {" "}
              Connect Wallet{" "}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default ListByWallet;
