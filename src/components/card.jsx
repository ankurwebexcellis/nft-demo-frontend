import React from "react";

function Card() {
  return (
    <a href={`/123`} class="grid-card-item">
      <div class="grid-card-box position-relative text-white ">
        <div class="gc-header d-flex flex-wrap">
          <div class="gc-header-left">
            <h5>Pixel Giraffes</h5>
            <small>Monkey#1234</small>
          </div>
          <div class="gc-header-right ms-auto d-flex flex-column align-items-end justify-content-end">
            <strong>
              <span>Ends :</span> 27/06/22
            </strong>
          </div>
        </div>
        <div class="gc-img-box">
          <div class="pc-image">
            <img src={"../include/images/grid-img-2.jpg"} alt="" />
          </div>

          <div class="badge running">Running</div>
        </div>
        <div class="gc-footer">
          <div class="gc-intro-group d-flex flex-wrap">
            <div class="gc-intro-item flex-grow-1 w-auto">
              <h6 class="orange-text">$5</h6>
              <p class="orange-text opacity-50">
                <strong>ENTRY</strong>
              </p>
            </div>
            <div class="gc-intro-item text-center flex-grow-1 w-auto">
              <h6>$25,000</h6>
              <p>
                <strong>Value</strong>
              </p>
            </div>
            <div class="gc-intro-item flex-grow-1 w-auto">
              <h6>250/300</h6>
              <p>
                <strong>Entries Left</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
