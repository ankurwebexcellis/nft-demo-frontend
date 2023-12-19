import React, { useEffect, useRef, useState } from "react";

//  API
import { loadNftByContract } from "../lib/api";

//  Components
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import CardLoading from "../components/cardLoading";
import CardListing from "../components/cardListing";

function NftListings() {
  const scrollRef = useRef(null);
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [next, setNext] = useState("");
  const [address, setAddress] = useState(
    "0x5Af0D9827E0c53E4799BB226655A1de152A425a5"
  );

  const fetchNfts = async () => {
    try {
      const params = { address };
      const response = await loadNftByContract(params);
      setNftList(response?.nfts);
      setNext(response?.next);
      document.addEventListener("scroll", trackScrolling, true);
    } catch (err) {}
    setLoading(false);
    setLoadingMore(false);
  };

  const fetchMoreNfts = async () => {
    try {
      const params = { address };
      if (next) params.next = next;
      const response = await loadNftByContract(params);
      setNftList((prev) => [...prev, ...response?.nfts]);
      setNext(response?.next);
      if (response?.nfts?.length > 0) {
        document.addEventListener("scroll", trackScrolling, true);
      }
    } catch (err) {}
    setLoading(false);
    setLoadingMore(false);
  };

  useEffect(() => {
    setNext("");
    setLoading(true);
    fetchNfts();
  }, [address]);

  // useEffect(() => {
  //    document.addEventListener("scroll", trackScrolling, true);
  // }, [nftList?.length]);

  const trackScrolling = () => {
    if (
      scrollRef.current?.getBoundingClientRect().bottom - 1000 <=
      window.innerHeight
    ) {
      setLoadingMore(true);

      fetchMoreNfts();
      document.removeEventListener("scroll", trackScrolling, true);
    }
  };
  console.log(address, next);
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Sidebar page="contract" />
        <div className="main-content-wrapper position-relative">
          <div className="mcw-header d-flex align-items-center">
            <h1>NFTs by Contract</h1>
          </div>
          <div className="fwc-wrapper" ref={scrollRef}>
            <div className="fwc-head ">
              <div className="fwc-inner">
                <ul className="filter-mode-list d-flex flex-wrap align-items-center">
                  <li className="flex-fill">
                    <div className="fml-box">
                      <label className="form-label">NFT Collection </label>
                      <select
                        className="form-select"
                        onChange={(e) => {
                          setNext("");
                          setAddress(e.target.value);
                        }}
                        value={address}
                      >
                        <option value="0x5Af0D9827E0c53E4799BB226655A1de152A425a5">
                          Token Milady (MIL)
                        </option>
                        <option value="0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7">
                          Token Loot (LOOT)
                        </option>
                        <option value="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB">
                          Token CRYPTOPUNKS
                        </option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <CardListing loading={loading} nftList={nftList} />
            {loadingMore && (
              <ul className="grid-card-list d-flex flex-wrap">
                <CardLoading />
                <CardLoading />
                <CardLoading />
                <CardLoading />
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NftListings;
