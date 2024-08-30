import React from "react";

// Components
import Header from "../components/Header";
import Info from "../components/Info";
import BlockTitle from "../components/BlockTitle";

function SerpGridPage({ breakpoint }) {
  const customStyles = {
    // header: { backgroundColor: "#782" },
  };
  const customClasses = {
    header: "header--serp",
    logo: "header-logo--serp",
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
      <div className="wrapper--serp skeleton--black">
        <BlockTitle invertText={false} />
        <div className="container--serp">
          <main id="mainline" className="skeleton--white">
            <BlockTitle invertText={true} label="Mainline" />

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
          <aside id="sideline" className="skeleton--white">
            <BlockTitle invertText={true} label="Sideline" />
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
