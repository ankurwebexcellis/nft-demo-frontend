import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
});

//  API request to get NFTs by contract address
export const loadNftByContract = async (params) => {
  try {
    const nft = await api.get("nftApis/byContract", {
      params: params,
    });
    return nft?.data?.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

//  API request to get NFTs by user's wallet address
export const loadNftByWallet = async (params) => {
  try {
    const nft = await api.get("nftApis/byWallet", {
      params: params,
    });
    return nft?.data?.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

//  API request to get NFT Details by contract address & identifier
export const loadNftDetails = async (address, identifier) => {
  try {
    const nft = await api.get("nftApis/nftDetails", {
      params: { address, identifier },
    });
    return nft?.data?.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
