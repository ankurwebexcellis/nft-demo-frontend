import React, { useEffect, useState } from "react";

//  API
import { loadNftByWallet } from "../lib/api";

//  Components
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import CardLoading from "../components/cardLoading";
import CardListing from "../components/cardListing";
import { useParams } from "react-router-dom";

function ListByWallet() {
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState("");
  const [checked, setChecked] = useState(true);

  const [wallet, setWallet] = useState("");
  const params = useParams();
  useEffect(() => {
    console.log(params);
    if (params.address) {
      setWallet(params.address);
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);

  const connectWallet = async (e) => {
    if (e) e.preventDefault();
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
      console.log("wallet1", wallet);
      const response = await loadNftByWallet(wallet);
      console.log("response", response);
      setNftList(response?.nfts);
      setNext(response?.next);
    } catch (err) {
      console.log("err", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log("wallet", wallet);
    if (wallet) fetchNfts();
  }, [wallet]);

  return (
    <>
      <Header />
      {wallet ? (
        <div className="page-wrapper">
          <Sidebar page="wallet" />
          <div className="main-content-wrapper position-relative">
            <div className="mcw-header d-flex align-items-center">
              <h1>NFTs By Wallet</h1>
            </div>
            <div className="fwc-wrapper">
              {nftList?.length > 0 ? (
                <CardListing loading={loading} nftList={nftList} />
              ) : (
                <div className="fwc-body">
                  <div className="no-record-found-container">
                    {!checked && (
                      <div className="nfr-box">
                        <div className="nrf-text">
                          <h5>Your wallet does not seem to have any NFT</h5>
                          <a href="#!" class="btn btn-primary btn-sm mt-4" onClick={(e) => connectWallet(e)}>
                            Connect Your Wallet
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="page-wrapper">
          <Sidebar page="wallet" />
          <div className="main-content-wrapper position-relative">
            <div className="mcw-header d-flex align-items-center">
              <h1>NFTs By Wallet</h1>
            </div>
            <div className="fwc-wrapper">
              <div className="fwc-body">
                <div className="no-record-found-container">
                  <div className="nfr-box">
                    <div className="nrf-text">
                      <a href="#!" class="btn btn-primary btn-sm" onClick={(e) => connectWallet(e)}>
                        Connect Your Wallet
                      </a>
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
