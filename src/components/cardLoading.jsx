import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CardLoading() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <li className="grid-card-item">
        <div className="grid-card-box position-relative text-white">
          <div className="gc-header d-flex flex-wrap">
            <div className="gc-header-left">
              <h5>
                <Skeleton width={100} />
              </h5>
              <small>
                <Skeleton width={80} />
              </small>
            </div>
          </div>
          <div className="gc-img-box">
            <div className="pc-image">
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
          <div className="gc-footer">
            <div className="gc-intro-group d-flex flex-wrap">
              <div className="gc-intro-item flex-grow-1 w-auto">
                <h6 className="orange-text">
                  <Skeleton width="80%" />
                </h6>
                <p className="orange-text opacity-50">
                  <strong>
                    <Skeleton width="80%" />
                  </strong>
                </p>
              </div>
              <div className="gc-intro-item text-center flex-grow-1 w-auto">
                <h6>
                  <Skeleton width="80%" />
                </h6>
                <p>
                  <strong>
                    <Skeleton width="80%" />
                  </strong>
                </p>
              </div>
              <div className="gc-intro-item flex-grow-1 w-auto">
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
