import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CardLoading() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <li class="grid-card-item">
        <div class="grid-card-box position-relative text-white">
          <div class="gc-header d-flex flex-wrap">
            <div class="gc-header-left">
              <h5>
                <Skeleton width={100} />
              </h5>
              <small>
                <Skeleton width={80} />
              </small>
            </div>
          </div>
          <div class="gc-img-box">
            <div class="pc-image">
              <Skeleton
                height="100%"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              />
            </div>
          </div>
          <div class="gc-footer">
            <div class="gc-intro-group d-flex flex-wrap">
              <div class="gc-intro-item flex-grow-1 w-auto">
                <h6 class="orange-text">
                  <Skeleton width="80%" />
                </h6>
                <p class="orange-text opacity-50">
                  <strong>
                    <Skeleton width="80%" />
                  </strong>
                </p>
              </div>
              <div class="gc-intro-item text-center flex-grow-1 w-auto">
                <h6>
                  <Skeleton width="80%" />
                </h6>
                <p>
                  <strong>
                    <Skeleton width="80%" />
                  </strong>
                </p>
              </div>
              <div class="gc-intro-item flex-grow-1 w-auto">
                <h6>
                  <Skeleton width="80%" />
                </h6>
                <p>
                  <strong>
                    <Skeleton width="80%" />
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </SkeletonTheme>
  );
}

export default CardLoading;
