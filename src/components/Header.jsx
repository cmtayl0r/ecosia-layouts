import React, { useState, useEffect } from "react";

function Header({
  showLogo = true,
  showSearch = true,
  showButtons = true,
  showTabs = true,
  customStyles = {},
  customClasses = {},
}) {
  return (
    <header
      id="header"
      style={customStyles.header}
      className={`${customClasses.header || ""}`}
    >
      <div id="header-row-1" className={`${customClasses.row || ""}`}>
        {showLogo && (
          <div id="header-logo" className={`${customClasses.logo || ""}`}></div>
        )}
        {showSearch && (
          <div id="header-search" className="skeleton--white"></div>
        )}
        <div className="grid-spacer--width"></div>
        {showButtons && (
          <div id="header-buttons">
            <div className="header-button--lg skeleton--black"></div>
            <div className="header-button skeleton--white"></div>
            <div className="header-button skeleton--white"></div>
            <div className="header-button skeleton--white"></div>
          </div>
        )}
      </div>
      {showTabs && (
        <div id="header-row-2">
          <ul id="header-tabs">
            <li className="header-tab skeleton--white"></li>
            <li className="header-tab skeleton--white"></li>
            <li className="header-tab skeleton--white"></li>
            <li className="header-tab skeleton--white"></li>
            <li className="header-tab skeleton--white"></li>
            <li className="header-tab skeleton--white"></li>
            <li className="header-tab skeleton--white"></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
