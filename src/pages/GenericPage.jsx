import React from "react";

// Components
import Header from "../components/Header";
import Info from "../components/Info";

function GenericPage({ breakpoint }) {
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

      {/* SECTION 1 */}
      <section className="index-wrapper wrapper--center">
        <div className="index-cur-container">
          <header className="title-block">
            <h5>Container</h5>
          </header>
          <div className="index-sub-container col-1">
            <div>
              <p>1 Col</p>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                earum commodi repellat mollitia impedit voluptate voluptatum
                nisi esse, necessitatibus ipsum sit. Est tempora, maxime
                architecto voluptate adipisci maiores nostrum sequi.
              </small>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2 */}
      <section className="index-wrapper wrapper--center">
        <div className="index-cur-container">
          <header className="title-block">
            <h5>Container</h5>
          </header>
          <div className="index-sub-container col-2">
            <div>
              <p>2 Cols</p>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                earum commodi repellat mollitia impedit voluptate voluptatum
                nisi esse, necessitatibus ipsum sit. Est tempora, maxime
                architecto voluptate adipisci maiores nostrum sequi.
              </small>
            </div>
            <div>
              <p>2 Cols</p>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                earum commodi repellat mollitia impedit voluptate voluptatum
                nisi esse, necessitatibus ipsum sit. Est tempora, maxime
                architecto voluptate adipisci maiores nostrum sequi.
              </small>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2 */}
      <section className="index-wrapper wrapper--center">
        <div className="index-cur-container">
          <header className="title-block">
            <h5>Container</h5>
          </header>
          <div className="index-sub-container col-3">
            <div>
              <p>3 Cols</p>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                earum commodi repellat mollitia impedit voluptate voluptatum
                nisi esse, necessitatibus ipsum sit. Est tempora, maxime
                architecto voluptate adipisci maiores nostrum sequi.
              </small>
            </div>
            <div>
              <p>3 Cols</p>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                earum commodi repellat mollitia impedit voluptate voluptatum
                nisi esse, necessitatibus ipsum sit. Est tempora, maxime
                architecto voluptate adipisci maiores nostrum sequi.
              </small>
            </div>
            <div>
              <p>3 Cols</p>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                earum commodi repellat mollitia impedit voluptate voluptatum
                nisi esse, necessitatibus ipsum sit. Est tempora, maxime
                architecto voluptate adipisci maiores nostrum sequi.
              </small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GenericPage;
