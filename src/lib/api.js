import axios from "axios";
const api = axios.create({
  baseURL: "https://nixrdfpiwj.execute-api.us-east-1.amazonaws.com/dev/",
});

export const loadNftByContract = async (address) => {
  try {
    const nft = await api.get("nftApis/byContract", {
      params: { address },
    });
    return nft?.data?.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
