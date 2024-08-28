import { Routes, Route } from "react-router-dom";

// Route Paths
import PATHS from "./paths";

// Pages
import SerpGridPage from "../pages/SerpGridPage";
import SerpContentPage from "../pages/SerpContentPage";
import IndexContentPage from "../pages/IndexContentPage";

function AppRoutes({ breakpoint }) {
  return (
    <Routes>
      <Route
        path={PATHS.serpContent}
        element={<SerpContentPage breakpoint={breakpoint} />}
      />
      <Route
        path={PATHS.serpGrid}
        element={<SerpGridPage breakpoint={breakpoint} />}
      />
      <Route
        path={PATHS.indexContent}
        element={<IndexContentPage breakpoint={breakpoint} />}
      />
    </Routes>
  );
}

export default AppRoutes;
