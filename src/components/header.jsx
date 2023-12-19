import React from "react";

function Header() {
  return (
    <header id="header" className="text-white">
      <div className="header-main">
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid">
            <div className="nav-inside d-flex align-items-center justify-content-between">
              <a className="navbar-brand" href="/">
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
