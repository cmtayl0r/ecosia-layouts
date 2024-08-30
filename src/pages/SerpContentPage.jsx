import React from "react";

// Components
import Header from "../components/Header";
import Result from "../components/Result";
import Card from "../components/Card";
import Info from "../components/Info";
import BlockTitle from "../components/BlockTitle";

function SerpContentPage({ breakpoint }) {
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
      <section className="wrapper--serp skeleton--black">
        <BlockTitle invertText={false} />
        <div className="container--serp">
          <main id="mainline" className="skeleton--white">
            <BlockTitle invertText={true} label="Mainline" />
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
          <aside id="sideline" className="skeleton--white">
            <BlockTitle invertText={true} label="Sideline" />
            {/* Cards */}
            <Card />
            <Card />
          </aside>
        </div>
      </section>
    </>
  );
}

export default SerpContentPage;
