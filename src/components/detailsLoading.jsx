import Skeleton from "react-loading-skeleton";

function DetailsLoading() {
  return (
    <div className="grid-card-details-row d-flex flex-wrap">
      <div className="gcdr-img-box">
        <Skeleton height={500} />
      </div>

      <div className="gcdr-text-box">
        <div className="gcdr-heading-filter d-flex align-items-center justify-content-between">
          <div className="gcdr-heading-date d-flex align-items-center">
            <Skeleton width={300} />
          </div>
        </div>
        <div className="gcdr-heading">
          <h2>
            <Skeleton width="80%" />
          </h2>
        </div>
        <p className="grey-text">
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </p>
        <div className="gcdr-widget-wrapper">
          <div className="gcdr-widget-box">
            <h4>
              <Skeleton width={300} />
            </h4>
            <Skeleton height={200} />
          </div>
        </div>

        <div className="gcdr-widget-wrapper">
          <div className="gcdr-widget-box">
            <h4>
              <Skeleton />
            </h4>
            <Skeleton height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsLoading;
