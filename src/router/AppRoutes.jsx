import { Routes, Route } from "react-router-dom";

/*
TODO: New page checklist
- paths.jsx
- AppRoutes.jsx
- newPage.jsx
- ViewportInfo.jsx (for navigation)
- Info.jsx (for displaying current page)
*/

// Route Paths
import PATHS from "./paths";

// Pages
import SerpGridPage from "../pages/SerpGridPage";
import SerpContentPage from "../pages/SerpContentPage";
import IndexContentPage from "../pages/IndexContentPage";
import IndexOutContentPage from "../pages/IndexOutContentPage";
import BrowserInstallPage from "../pages/BrowserInstallPage";
import GenericPage from "../pages/GenericPage";
import HeadersPage from "../pages/HeadersPage";

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
      <Route
        path={PATHS.indexOutContent}
        element={<IndexOutContentPage breakpoint={breakpoint} />}
      />
      <Route
        path={PATHS.browserInstall}
        element={<BrowserInstallPage breakpoint={breakpoint} />}
      />
      <Route
        path={PATHS.generic}
        element={<GenericPage breakpoint={breakpoint} />}
      />
      <Route
        path={PATHS.headers}
        element={<HeadersPage breakpoint={breakpoint} />}
      />
    </Routes>
  );
}

export default AppRoutes;
