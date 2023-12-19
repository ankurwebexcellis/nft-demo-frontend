import React from "react";

//  Components
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import CardLoading from "../components/cardLoading";

function NftListings() {
  return (
    <>
      <Header />
      <div class="page-wrapper">
        <Sidebar page="contract" />
        <div class="main-content-wrapper position-relative">
          <div class="mcw-header d-flex align-items-center">
            <h1>Contests</h1>
          </div>
          <div class="fwc-wrapper">
            <ul class="grid-card-list d-flex flex-wrap">
              <Card />
              <CardLoading />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NftListings;
