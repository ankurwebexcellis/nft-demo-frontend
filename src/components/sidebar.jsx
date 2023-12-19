import React from "react";

function Sidebar({ page }) {
  return (
    <div class="page-sidebar">
      <div class="page-sidebar-inside">
        <ul class="menu-list">
          <li class={`menu-item ${page === "contract" && "active"}`}>
            <a href="/">
              NFT By Contract
              <span class="angle-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li class={`menu-item ${page === "wallet" && "active"}`}>
            <a href="#!">
              NFT By Wallet
              <span class="angle-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
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
