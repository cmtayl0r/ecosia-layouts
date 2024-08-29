import React from "react";

// Components
import Header from "../components/Header";
import Result from "../components/Result";
import Card from "../components/Card";
import Info from "../components/Info";

function SerpContentPage({ breakpoint }) {
  const customStyles = {
    // header: { backgroundColor: "#782" },
  };
  const customClasses = {
    header: "header--serp",
  };

  return (
    <>
      <Info breakpoint={breakpoint} />
      <Header
        showLogo={true}
        showSearch={true}
        showButtons={true}
        showTabs={true}
        customStyles={customStyles}
        customClasses={customClasses}
      />
      <div className="serp-container">
        <header className="title-block">
          <h5>Container</h5>
          {/* <small className="small">
            Breakpoint: <span>{breakpoint}</span>
          </small> */}
        </header>
        <div className="serp-sub-container">
          <main id="mainline">
            <header className="title-block">
              <p>Mainline</p>
            </header>

            {/* SEARCH RESULTS */}
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
          </main>
          <aside id="sideline">
            <header className="title-block">
              <p>Sideline</p>
            </header>
            {/* Cards */}
            <Card />
            <Card />
          </aside>
        </div>
      </div>
    </>
  );
}

export default SerpContentPage;
