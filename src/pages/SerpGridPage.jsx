import React from "react";

// Components
import Header from "../components/Header";
import Info from "../components/Info";

function SerpGridPage({ breakpoint }) {
  const customStyles = {
    // header: { backgroundColor: "#782" },
  };
  const customClasses = {
    header: "header--serp",
    logo: "logo--serp",
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
              <small>16px gap / 16px padding</small>
            </header>

            <div class="grid grid-8">
              <div class="column">1</div>
              <div class="column">2</div>
              <div class="column">3</div>
              <div class="column">4</div>
              <div class="column">5</div>
              <div class="column">6</div>
              <div class="column">7</div>
              <div class="column">8</div>
            </div>
          </main>
          <aside id="sideline">
            <header className="title-block">
              <p>Sideline</p>
              <small>16px gap / 16px padding</small>
            </header>
            <div class="grid grid-4">
              <div class="column">1</div>
              <div class="column">2</div>
              <div class="column">3</div>
              <div class="column">4</div>
            </div>
          </aside>
        </div>{" "}
      </div>
    </>
  );
}

export default SerpGridPage;
