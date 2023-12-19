import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
});

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
