import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import DetailsLoading from "../components/detailsLoading";

function NftDetails() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Sidebar page="contract" />
        <div className="fwc-wrapper">
          {/* User this for laoding */}
          <DetailsLoading />
          {/* User this for laoding */}

          {/* Normal Content */}
          <div className="grid-card-details-row d-flex flex-wrap">
            <div className="gcdr-img-box">
              <div className="gcdr-img-outer text-white">
                <div className="gcdr-image">
                  <img src="include/images/grid-img-1.jpg" alt="" />
                </div>
                <div className="gcdr-group d-flex flex-wrap">
                  <div className="gcdr-item flex-grow-1 w-auto">
                    <h6 className="orange-text">$5</h6>
                    <p className="opacity-50 orange-text">
                      <strong>ENTRY</strong>
                    </p>
                  </div>
                  <div className="gcdr-item flex-grow-1 w-auto">
                    <h6>$25,000</h6>
                    <p>
                      <strong>Type</strong>
                    </p>
                  </div>
                  <div className="gcdr-item flex-grow-1 w-auto">
                    <h6>250/300</h6>
                    <p>
                      <strong>Value</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gcdr-text-box">
              <div className="gcdr-heading-filter d-flex align-items-center justify-content-between">
                <div className="gcdr-heading-date d-flex align-items-center">
                  <div className="gcdr-heading-text">
                    <span>Starts on :</span> 27/06/22
                  </div>
                  <div className="dash-line">-</div>
                  <div className="gcdr-heading-text">
                    <span>Ends on :</span> 10/07/22
                  </div>
                </div>
                <div className="dropdown custom-dropdown">
                  <a
                    className="dropdown-toggle"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="include/images/more-horizontal.svg" alt="" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Publish
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item delete" href="#!">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="gcdr-heading">
                <h2>BORED APE YACHT CLUB</h2>
              </div>
              <p className="grey-text">#1234</p>
              <p>
                Vel turpis commodo vitae libero at et. Et donec sit ac
                scelerisque lorem. Dolor, a sagittis praesent enim lobortis
                viverra. Tristique felis semper lacinia turpis vitae aliquam
                pretium leo nibh. Urna, ultrices sit at ut velit condimentum.
                Sed praesent lectus justo, mauris.
              </p>
              <div className="gcdr-widget-wrapper">
                <div className="gcdr-widget-box">
                  <h4>Contest closure conditions</h4>
                  <div className="gcdr-details-box d-flex flex-wrap">
                    <div className="gcdr-details-left">
                      <ul className="check-square-list">
                        <li>
                          <img src="include/images/check-square.svg" alt="" />
                          <span>Total Number of Entries</span>
                        </li>
                        <li>
                          <img src="include/images/check-square.svg" alt="" />
                          <span>End Date & Time</span>
                        </li>
                        <li>
                          <img src="include/images/check-square.svg" alt="" />
                          <span>Reserve </span>
                        </li>
                        <li>
                          <img src="include/images/check-square.svg" alt="" />
                          <span>Min Number of Entries</span>
                        </li>
                      </ul>
                    </div>
                    <div className="gcdr-details-right">
                      <p>
                        Vel turpis commodo vitae libero at et. Et donec sit ac
                        scelerisque lorem. Dolor, a sagittis praesent enim
                        lobortis viverra.
                      </p>
                      <p>
                        Tristique felis semper lacinia turpis vitae aliquam
                        pretium leo nibh. Urna, ultrices sit at ut velit
                        condimentum. Sed praesent lectus justo, mauris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gcdr-widget-wrapper">
                <div className="gcdr-widget-box">
                  <h4>
                    How it works{" "}
                    <img src="include/images/help-circle.svg" alt="" />
                  </h4>
                  <div className="gcdr-details-box">
                    <ul className="gcdr-text-list">
                      <li>
                        <div className="number-list-box">
                          <div className="number-list-numerical">1</div>
                          <div className="number-list-content">
                            <p>
                              Vel turpis commodo vitae libero at et. Et donec
                              sit ac scelerisque lorem
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="number-list-box">
                          <div className="number-list-numerical">2</div>
                          <div className="number-list-content">
                            <p>
                              Non imperdiet tortor integer in molestie iaculis
                              egestas urna, ut. Nunc lorem porttitor erat leo
                              lacus, nonravida morbi donec interdum lectus
                              neque.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="number-list-box">
                          <div className="number-list-numerical">3</div>
                          <div className="number-list-content">
                            <p>
                              Commodo sit in mauris lorem. Maecenas vitae tortor
                              nisl, volutpat elit pharetra.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="number-list-box">
                          <div className="number-list-numerical">4</div>
                          <div className="number-list-content">
                            <p>
                              Elit eget orci, sagittis, non fames. Ullamcorper
                              rutrum quam aliquet ultrices. Vitae.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Normal Content */}
        </div>
      </div>
    </>
  );
}

export default NftDetails;
