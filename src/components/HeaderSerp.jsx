import React, { useState, useEffect } from "react";

function Header() {
  return (
    <header id="header" className="header--serp">
      <div id="header-row-1">
        <div id="h-logo" className="skeleton--black"></div>
        <div id="h-spacer-1"></div>
        <div id="h-search" className="skeleton"></div>
        <div id="h-spacer-2"></div>
        <div id="h-buttons">
          <div className="h-button skeleton"></div>
          <div className="h-button skeleton"></div>
          <div className="h-button skeleton"></div>
        </div>
      </div>
      <div id="header-row-2">
        <ul id="h-tabs">
          <li className="h-tab skeleton"></li>
          <li className="h-tab skeleton"></li>
          <li className="h-tab skeleton"></li>
          <li className="h-tab skeleton"></li>
          <li className="h-tab skeleton"></li>
          <li className="h-tab skeleton"></li>
          <li className="h-tab skeleton"></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
