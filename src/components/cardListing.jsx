import CardLoading from "./cardLoading";
import Card from "./card";

function CardListing({ loading, nftList }) {
  return (
    <ul className="grid-card-list d-flex flex-wrap">
      {loading ? (
        <>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading /> <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </>
      ) : (
        nftList?.map((nft) => (
          <Card
            name={nft?.name}
            identifier={nft?.identifier}
            image={nft?.image_url}
            token={nft?.token_standard}
            collection={nft?.collection}
            address={nft?.contract}
          />
        ))
      )}
    </ul>
  );
}

export default CardListing;
