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
  console.log("paramsparamsparams", {
    params: params,
  });
  try {
    console.log("paramsparamsparams", process.env.REACT_APP_APIURL);
    console.log("1nftnftnft");
    const nft = await api.get("nftApis/byWallet", {
      params: { address: params },
    });
    // console.log("nftnftnft", nft?.data?.data);
    return nft?.data?.data;
  } catch (err) {
    console.error("www", err);
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
