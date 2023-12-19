import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import DetailsLoading from "../components/detailsLoading";
import { loadNftDetails } from "../lib/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function NftDetails() {
  const [nftInfo, setNftInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const fetchNfts = async () => {
    setLoading(true);
    try {
      const response = await loadNftDetails(params.address, params.id);
      setNftInfo(response?.nft);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchNfts();
  }, []);

  const truncateAddress = (address) => {
    if (!address) return "No Account";
    const match = address.match(
      /^(0x[a-zA-Z0-9]{3})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
    );
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };
  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Sidebar page="contract" />
        <div className="fwc-wrapper">
          {loading ? (
            <DetailsLoading />
          ) : (
            <div className="grid-card-details-row d-flex flex-wrap">
              <div className="gcdr-img-box">
                <div className="gcdr-img-outer text-white">
                  <div className="gcdr-image">
                    <img src={nftInfo?.image_url} alt="" />
                  </div>
                  <div className="gcdr-group d-flex flex-wrap">
                    <div className="gcdr-item flex-grow-1 w-auto">
                      <h6>{nftInfo?.token_standard}</h6>
                      <p className="opacity-50 ">
                        <strong>Token</strong>
                      </p>
                    </div>
                    {/* <div className="gcdr-item flex-grow-1 w-auto">
                      <h6>$25,000</h6>
                      <p>
                        <strong>Type</strong>
                      </p>
                    </div> */}
                    <div className="gcdr-item flex-grow-1 w-auto">
                      <h6>{nftInfo?.collection}</h6>
                      <p>
                        <strong>Collection</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gcdr-text-box">
                <div className="gcdr-heading">
                  <h2>{nftInfo?.name}</h2>
                </div>
                <p className="grey-text">#{nftInfo?.identifier}</p>
                <p>{nftInfo?.description}</p>
                {nftInfo?.traits && (
                  <div className="gcdr-widget-wrapper">
                    <div class="gcdr-widget-box">
                      <h4>Traits</h4>
                      <ul class="gw-list d-flex flex-wrap">
                        {nftInfo?.traits?.map((trait) => (
                          <li key={trait.trait_value}>
                            <div class="gw-box">
                              <em>{trait?.trait_type}</em>
                              <h6>{trait?.value}</h6>
                              <p>{trait?.trait_count} have this trait</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {nftInfo?.owners && (
                  <div className="gcdr-widget-wrapper">
                    <div className="gcdr-widget-box">
                      <h4>Owners</h4>
                      <div className="gcdr-details-box">
                        <ul className="gcdr-text-list">
                          {nftInfo?.owners?.map((owner, index) => (
                            <li key={owner?.address}>
                              <div className="number-list-box">
                                <div className="number-list-numerical">
                                  {index + 1}
                                </div>
                                <div className="number-list-content">
                                  <a
                                    href="#!"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigator.clipboard.writeText(
                                        owner?.address
                                      );
                                      toast.success("Copied");
                                    }}
                                  >
                                    {truncateAddress(owner?.address)}
                                  </a>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NftDetails;
