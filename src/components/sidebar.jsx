import React from "react";

function Sidebar({ page }) {
  return (
    <div className="page-sidebar">
      <div className="page-sidebar-inside">
        <ul className="menu-list">
          <li className={`menu-item ${page === "contract" && "active"}`}>
            <a href="/">
              By Contract
              <span className="angle-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 3L11 8L6 13" stroke="white" />
                </svg>
              </span>
            </a>
          </li>
          <li className={`menu-item ${page === "wallet" && "active"}`}>
            <a href="/wallet">
              By Wallet
              <span className="angle-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 3L11 8L6 13" stroke="white" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
