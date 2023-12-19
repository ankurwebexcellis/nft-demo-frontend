import React, { useEffect, useState } from "react";

//  API
import { loadNftByWallet } from "../lib/api";

//  Components
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import CardLoading from "../components/cardLoading";
import CardListing from "../components/cardListing";

function ListByWallet() {
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState("");

  const [wallet, setWallet] = useState("");

  const connectWallet = async (e) => {
    if (e) e.preventDefault();
    try {
      let ethereum = window.ethereum;
      if (!ethereum)
        return window.open(
          "https://metamask.app.link/dapp/" + process.env.REACT_APP_SITE_URL,
          "_blank"
        );

      // Check if we are authorized to access the user's wallet
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // localStorage.setItem('wallet',accounts[0])
      setWallet(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNfts = async () => {
    setLoading(true);
    try {
      const response = await loadNftByWallet(
        "0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7"
      );
      setNftList(response?.nfts);
      setNext(response?.next);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchNfts();
  }, [wallet]);

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
              <ul className="grid-card-list d-flex flex-wrap">
                <CardListing loading={loading} nftList={nftList} />
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
            <div className="fwc-wrapper">
              <div className="fwc-body">
                <div className="no-record-found-container">
                  <div className="nfr-box">
                    <div className="nrf-text">
                      <a
                        href="#!"
                        class="btn btn-primary btn-sm"
                        onClick={(e) => connectWallet(e)}
                      >
                        Connect{" "}
                      </a>
                      <h5>No Wallet Found!</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListByWallet;
