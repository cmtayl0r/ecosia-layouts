import React from "react";

// Components
import Header from "../components/Header";
import Info from "../components/Info";
import BlockTitle from "../components/BlockTitle";
import Footer from "../components/Footer";
import Grid from "../components/Grid";

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

            <Grid
              columnsDesktopL={8}
              columnsDesktop={8}
              columnsTablet={6}
              columnsMobile={2}
              columnsMobileS={1}
            >
              {/* Example grid items */}
              {[...Array(8)].map((_, index) => (
                <div key={index} className="grid-item">
                  <span>{index + 1}</span>
                </div>
              ))}
            </Grid>
          </main>
          <aside id="sideline" className="skeleton--white">
            <BlockTitle invertText={true} label="Sideline" />
            <Grid
              columnsDesktopL={4}
              columnsDesktop={4}
              columnsTablet={4}
              columnsMobile={2}
              columnsMobileS={1}
            >
              {/* Example grid items */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="grid-item">
                  <span>{index + 1}</span>
                </div>
              ))}
            </Grid>
          </aside>
        </div>{" "}
      </div>
      <Footer />
    </>
  );
}

export default SerpGridPage;
