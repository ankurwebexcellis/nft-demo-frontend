import React, { useEffect, useState } from "react";

//  API
import { loadNftByContract } from "../lib/api";

//  Components
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import CardLoading from "../components/cardLoading";

function NftListings() {
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState("");

  const fetchNfts = async () => {
    setLoading(true);
    try {
      const response = await loadNftByContract(
        "0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7"
      );
      setNftList(response?.nfts);
      setNext(response?.next);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchNfts();
  }, []);

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Sidebar page="contract" />
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
    </>
  );
}

export default NftListings;
