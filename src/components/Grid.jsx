import React from "react";

const Grid = ({
  children,
  columnsDesktopL = 12, // Default to 12 columns for Large Desktop
  columnsDesktop = 12, // Default to 12 columns for Desktop
  columnsTablet = 6, // Default to 6 columns for Tablet
  columnsMobile = 2, // Default to 2 columns for Mobile
  columnsMobileS = 1, // Default to 2 columns for Mobile
}) => {
  return (
    <div
      className="responsive-grid"
      style={{
        "--columns-desktop-l": columnsDesktopL,
        "--columns-desktop": columnsDesktop,
        "--columns-tablet": columnsTablet,
        "--columns-mobile": columnsMobile,
        "--columns-mobil-s": columnsMobileS,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
