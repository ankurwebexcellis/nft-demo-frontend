import React from "react";

function Header() {
  return (
    <header id="header" class="text-white">
      <div class="header-main">
        <nav class="navbar navbar-expand-xl">
          <div class="container-fluid">
            <div class="nav-inside d-flex align-items-center justify-content-between">
              <a class="navbar-brand" href="/">
                NFT Hub
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
