import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import DetailsLoading from "../components/detailsLoading";

function NftDetails() {
  return (
    <>
      <Header />
      <div class="page-wrapper">
        <Sidebar page="contract" />
        <div class="fwc-wrapper">
          {/* User this for laoding */}
          <DetailsLoading />
          {/* User this for laoding */}

          {/* Normal Content */}
          <div class="grid-card-details-row d-flex flex-wrap">
            <div class="gcdr-img-box">
              <div class="gcdr-img-outer text-white">
                <div class="gcdr-image">
                  <img src="include/images/grid-img-1.jpg" alt="" />
                </div>
                <div class="gcdr-group d-flex flex-wrap">
                  <div class="gcdr-item flex-grow-1 w-auto">
                    <h6 class="orange-text">$5</h6>
                    <p class="opacity-50 orange-text">
                      <strong>ENTRY</strong>
                    </p>
                  </div>
                  <div class="gcdr-item flex-grow-1 w-auto">
                    <h6>$25,000</h6>
                    <p>
                      <strong>Type</strong>
                    </p>
                  </div>
                  <div class="gcdr-item flex-grow-1 w-auto">
                    <h6>250/300</h6>
                    <p>
                      <strong>Value</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="gcdr-text-box">
              <div class="gcdr-heading-filter d-flex align-items-center justify-content-between">
                <div class="gcdr-heading-date d-flex align-items-center">
                  <div class="gcdr-heading-text">
                    <span>Starts on :</span> 27/06/22
                  </div>
                  <div class="dash-line">-</div>
                  <div class="gcdr-heading-text">
                    <span>Ends on :</span> 10/07/22
                  </div>
                </div>
                <div class="dropdown custom-dropdown">
                  <a
                    class="dropdown-toggle"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="include/images/more-horizontal.svg" alt="" />
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#!">
                        Publish
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete" href="#!">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="gcdr-heading">
                <h2>BORED APE YACHT CLUB</h2>
              </div>
              <p class="grey-text">#1234</p>
              <p>
                Vel turpis commodo vitae libero at et. Et donec sit ac
                scelerisque lorem. Dolor, a sagittis praesent enim lobortis
                viverra. Tristique felis semper lacinia turpis vitae aliquam
                pretium leo nibh. Urna, ultrices sit at ut velit condimentum.
                Sed praesent lectus justo, mauris.
              </p>
              <div class="gcdr-widget-wrapper">
                <div class="gcdr-widget-box">
                  <h4>Contest closure conditions</h4>
                  <div class="gcdr-details-box d-flex flex-wrap">
                    <div class="gcdr-details-left">
                      <ul class="check-square-list">
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
                    <div class="gcdr-details-right">
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

              <div class="gcdr-widget-wrapper">
                <div class="gcdr-widget-box">
                  <h4>
                    How it works{" "}
                    <img src="include/images/help-circle.svg" alt="" />
                  </h4>
                  <div class="gcdr-details-box">
                    <ul class="gcdr-text-list">
                      <li>
                        <div class="number-list-box">
                          <div class="number-list-numerical">1</div>
                          <div class="number-list-content">
                            <p>
                              Vel turpis commodo vitae libero at et. Et donec
                              sit ac scelerisque lorem
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="number-list-box">
                          <div class="number-list-numerical">2</div>
                          <div class="number-list-content">
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
                        <div class="number-list-box">
                          <div class="number-list-numerical">3</div>
                          <div class="number-list-content">
                            <p>
                              Commodo sit in mauris lorem. Maecenas vitae tortor
                              nisl, volutpat elit pharetra.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="number-list-box">
                          <div class="number-list-numerical">4</div>
                          <div class="number-list-content">
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
