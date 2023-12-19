import React from "react";

function Card() {
  return (
    <a href={`/123`} className="grid-card-item">
      <div className="grid-card-box position-relative text-white ">
        <div className="gc-header d-flex flex-wrap">
          <div className="gc-header-left">
            <h5>Pixel Giraffes</h5>
            <small>Monkey#1234</small>
          </div>
          <div className="gc-header-right ms-auto d-flex flex-column align-items-end justify-content-end">
            <strong>
              <span>Ends :</span> 27/06/22
            </strong>
          </div>
        </div>
        <div className="gc-img-box">
          <div className="pc-image">
            <img src={"../include/images/grid-img-2.jpg"} alt="" />
          </div>

          <div className="badge running">Running</div>
        </div>
        <div className="gc-footer">
          <div className="gc-intro-group d-flex flex-wrap">
            <div className="gc-intro-item flex-grow-1 w-auto">
              <h6 className="orange-text">$5</h6>
              <p className="orange-text opacity-50">
                <strong>ENTRY</strong>
              </p>
            </div>
            <div className="gc-intro-item text-center flex-grow-1 w-auto">
              <h6>$25,000</h6>
              <p>
                <strong>Value</strong>
              </p>
            </div>
            <div className="gc-intro-item flex-grow-1 w-auto">
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
