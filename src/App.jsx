import { useState, useEffect } from "react";

// Pages
import AppRoutes from "./router/AppRoutes";

// Components
import Footer from "./components/Footer";
import ViewportInfo from "./components/ViewportInfo";

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setBreakpoint(getBreakpoint(width));
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to determine breakpoint based on width
  function getBreakpoint(width) {
    if (width < 400) return "Below Mobile"; // Below the smallest defined breakpoint
    if (width >= 400 && width < 550) return "Mobile";
    if (width >= 550 && width < 768) return "Mobile-L";
    if (width >= 768 && width < 1080) return "Tablet";
    if (width >= 1080 && width < 1280) return "Desktop";
    if (width >= 1280 && width < 1440) return "Desktop-L";
    if (width >= 1440 && width < 1920) return "Desktop-1L";
    return "Desktop-2L"; // width >= 1920
  }

  return (
    <>
      <AppRoutes breakpoint={breakpoint} />
      <ViewportInfo viewportWidth={viewportWidth} breakpoint={breakpoint} />
    </>
  );
}

export default App;
