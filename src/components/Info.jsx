import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Info({ breakpoint }) {
  const location = useLocation(); // Get the current location
  const [currentPage, setCurrentPage] = useState(""); // State to keep track of the current page

  // Update the currentPage state based on the current route pathname
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("SERP");
        break;
      case "/index-content":
        setCurrentPage("Index (extension installed)");
        break;
      case "/index-out-content":
        setCurrentPage("Index (extension not installed)");
        break;
      case "/serp-grid":
        setCurrentPage("SERP [Grid]");
        break;
      case "/browser-install":
        setCurrentPage("Browser Install");
        break;
      case "/generic-page":
        setCurrentPage("Generic Page");
        break;
      case "/headers":
        setCurrentPage("Header variants");
        break;
      // Add more cases for other routes as needed
      default:
        setCurrentPage("Unknown Page");
    }
  }, [location]);

  return (
    <div id="info">
      <p>
        <span className="text-bold">{currentPage}</span> at {breakpoint}
      </p>
      {/* <small>Context on the page</small> */}
    </div>
  );
}

export default Info;
