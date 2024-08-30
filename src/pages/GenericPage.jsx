import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../components/Info";
import BlockTitle from "../components/BlockTitle";
import Grid from "../components/Grid";

function GenericPage({ breakpoint }) {
  const customStyles = {
    // header: { backgroundColor: "#782" },
  };
  const customClasses = {
    header: "header--search",
    logo: "header-logo--default",
  };
  return (
    <>
      <Info breakpoint={breakpoint} />
      <Header
        showLogo={true}
        showSearch={false}
        showButtons={true}
        showTabs={false}
        customStyles={customStyles}
        customClasses={customClasses}
      />

      {/* SECTION 1 */}
      <section className="section-wrapper">
        <div className="container--fixed skeleton--white">
          <BlockTitle invertText={false} label="Fixed container" />

          <div>
            <p>Columns, gutters and margins</p>
          </div>
          <Grid
            columnsDesktopL={12}
            columnsDesktop={12}
            columnsTablet={6}
            columnsMobile={2}
            columnsMobileS={1}
          >
            {/* Example grid items */}
            {[...Array(12)].map((_, index) => (
              <div key={index} className="grid-item">
                <span>{index + 1}</span>
              </div>
            ))}
          </Grid>

          <div>
            <ul>
              <li>Hero - Fixed / Centred</li>
              <li>Hero - Fluid / 50-50</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}

      <section className="section-wrapper">
        <div className="container--fluid skeleton--white">
          <BlockTitle invertText={false} label="Fluid container" />
          <div>
            <p>Columns, gutters and margins</p>
          </div>
          <Grid
            columnsDesktopL={12}
            columnsDesktop={12}
            columnsTablet={6}
            columnsMobile={2}
            columnsMobileS={1}
          >
            {/* Example grid items */}
            {[...Array(12)].map((_, index) => (
              <div key={index} className="grid-item">
                <span>{index + 1}</span>
              </div>
            ))}
          </Grid>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default GenericPage;
