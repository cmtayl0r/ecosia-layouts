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
        {showLogo && <div id="h-logo" className="skeleton--black"></div>}
        {showSearch && <div id="h-search" className="skeleton"></div>}
        <div className="grid-spacer--width"></div>
        {showButtons && (
          <div id="h-buttons">
            <div className="h-button skeleton"></div>
            <div className="h-button skeleton"></div>
            <div className="h-button skeleton"></div>
          </div>
        )}
      </div>
      {showTabs && (
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
      )}
    </header>
  );
}

export default Header;
