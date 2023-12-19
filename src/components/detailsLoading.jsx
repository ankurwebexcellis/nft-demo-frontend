import Skeleton from "react-loading-skeleton";

function DetailsLoading() {
  return (
    <div class="grid-card-details-row d-flex flex-wrap">
      <div class="gcdr-img-box">
        <Skeleton height={500} />
      </div>

      <div class="gcdr-text-box">
        <div class="gcdr-heading-filter d-flex align-items-center justify-content-between">
          <div class="gcdr-heading-date d-flex align-items-center">
            <Skeleton width={300} />
          </div>
        </div>
        <div class="gcdr-heading">
          <h2>
            <Skeleton width="80%" />
          </h2>
        </div>
        <p class="grey-text">
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </p>
        <div class="gcdr-widget-wrapper">
          <div class="gcdr-widget-box">
            <h4>
              <Skeleton width={300} />
            </h4>
            <Skeleton height={200} />
          </div>
        </div>

        <div class="gcdr-widget-wrapper">
          <div class="gcdr-widget-box">
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
