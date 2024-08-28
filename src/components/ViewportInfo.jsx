import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ViewportInfo({ viewportWidth, breakpoint }) {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const location = useLocation(); // Get the current location
  const [currentPage, setCurrentPage] = useState(""); // State to keep track of the current page

  // Update the currentPage state based on the current route pathname
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("SERP");
        break;
      case "/index-content":
        setCurrentPage("Index");
        break;
      case "/serp-grid":
        setCurrentPage("SERP [Grid]");
        break;
      // Add more cases for other routes as needed
      default:
        setCurrentPage("Unknown Page");
    }
  }, [location]); // Dependency array includes location to run the effect on path change

  // Functions to navigate to different routes
  const goToSerpContentPage = () => {
    navigate("/");
  };
  const goToSerpGridPage = () => {
    navigate("/serp-grid");
  };
  const goToIndexContentPage = () => {
    navigate("/index-content");
  };
  // const goToIndexGridPage = () => {
  //   navigate("/index-grid");
  // };

  return (
    <div className="toast">
      <h6>{currentPage}</h6>
      <div>
        <p>
          Viewport Width: <span>{viewportWidth}px</span>
        </p>
        <p>
          Breakpoint: <span>{breakpoint}</span>
        </p>
      </div>
      <hr />
      <p>Proposed SERP</p>
      <div className="toast-buttons">
        <button className="btn" onClick={goToSerpContentPage}>
          SERP
        </button>
        <button className="btn" onClick={goToSerpGridPage}>
          SERP [Grid]
        </button>
      </div>
      <hr />
      <p>Current Index</p>
      <div className="toast-buttons">
        <button className="btn" onClick={goToIndexContentPage}>
          Index
        </button>
      </div>
    </div>
  );
}

export default ViewportInfo;
