import React from "react";

// Components
import Header from "../components/Header";
import Info from "../components/Info";

function HeadersPage({ breakpoint }) {
  const customStyles = {
    // header: { backgroundColor: "#782" },
  };
  const customClasses = {
    header: "header--search",
  };
  return (
    <>
      <Info breakpoint={breakpoint} />
      <Header
        showLogo={false}
        showSearch={false}
        showButtons={true}
        showTabs={false}
        customStyles={customStyles}
        customClasses={customClasses}
      />
    </>
  );
}

export default HeadersPage;
