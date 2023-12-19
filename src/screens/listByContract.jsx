import React, { useEffect, useRef, useState } from "react";

//  API
import { loadNftByContract } from "../lib/api";

//  Components
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import CardLoading from "../components/cardLoading";
import CardListing from "../components/cardListing";

function NftListings() {
  //  Ref for scroll,
  const scrollRef = useRef(null);

  //  Component States
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [next, setNext] = useState("");
  const [address, setAddress] = useState(
    "0x5Af0D9827E0c53E4799BB226655A1de152A425a5"
  );

  //  GET Api method for NFT by contract address
  const fetchNfts = async () => {
    try {
      const params = { address };

      const response = await loadNftByContract(params);

      //  Update States
      setNftList(response?.nfts);
      setNext(response?.next);
    } catch (err) {}

    //  Disable loading states
    setLoading(false);
    setLoadingMore(false);
  };

  //  GET Api method for infinite scroll
  const fetchMoreNfts = async () => {
    try {
      const params = { address };
      if (next) params.next = next; //  next "key" to get the data of next page

      const response = await loadNftByContract(params);

      //  Update States
      setNftList((prev) => [...prev, ...response?.nfts]); //  Append the new list to the current list in the view
      setNext(response?.next);
    } catch (err) {}

    //  Disable loading states
    setLoading(false);
    setLoadingMore(false);
  };

  useEffect(() => {
    setLoading(true);

    //  Remove scroll event listener for infinite scroll
    document.removeEventListener("scroll", trackScrolling, true);

    setNext("");
    fetchNfts();
  }, [address]);

  useEffect(() => {
    if (next) {
      //  Add scroll event listener for infinite scroll
      document.addEventListener("scroll", trackScrolling, true);
    }
  }, [next]);

  //  Scroll tracking method for infinite scroll
  const trackScrolling = () => {
    if (
      scrollRef.current?.getBoundingClientRect().bottom - 1000 <=
      window.innerHeight
    ) {
      setLoadingMore(true);

      //  Fetch more NFTs
      fetchMoreNfts();

      //  Remove scroll event listener for infinite scroll
      document.removeEventListener("scroll", trackScrolling, true);
    }
  };

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
                          document.removeEventListener(
                            "scroll",
                            trackScrolling,
                            true
                          );
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
