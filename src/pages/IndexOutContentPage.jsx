import React from "react";

// Components
import Header from "../components/Header";
import Info from "../components/Info";
import BlockTitle from "../components/BlockTitle";

function IndexOutContentPage({ breakpoint }) {
  const customStyles = {
    // header: { backgroundColor: "#782" },
  };
  const customClasses = {
    header: "header--search",
    logo: "header-logo--serp",
  };

  return (
    <>
      <Info breakpoint={breakpoint} />
      <Header
        showLogo={true}
        showSearch={true}
        showButtons={true}
        showTabs={false}
        customStyles={customStyles}
        customClasses={customClasses}
      />

      <section className="section-wrapper wrapper--full-width">
        <div className="container--left-full skeleton--white">
          <div className="container--index-hero skeleton--whitest">
            <h4 className="text--title">The greenest way to search</h4>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nisi
              eos veniam maxime deserunt, veritatis officia tempore libero
              molestias, adipisci fugit voluptate nulla corrupti tenetur esse
              ratione eum sint quaerat.
            </small>
            {/* <div className="counter"></div> */}
          </div>
        </div>
        <div className="container--right-full skeleton--black">
          <h4 className="text--title text--white">Hero image</h4>
        </div>
      </section>
      {/* SECTION 1 */}
      <section className="section-wrapper wrapper--index">
        <div className="container--index skeleton--white">
          <BlockTitle invertText={false} />
          <div className="sub-container col-1">
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
      <section className="section-wrapper wrapper--index">
        <div className="container--index skeleton--white">
          <BlockTitle invertText={false} />
          <div className="sub-container col-2">
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
      <section className="section-wrapper wrapper--index">
        <div className="container--index skeleton--white">
          <BlockTitle invertText={false} />
          <div className="sub-container col-3">
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

export default IndexOutContentPage;
