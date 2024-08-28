import React from "react";

// Components
import Result from "../components/Result";
import Card from "../components/Card";

function SerpGridPage({ breakpoint }) {
  return (
    <div className="serp-container">
      <header className="title-block">
        <h5>Container</h5>
        <small className="small">
          Breakpoint: <span>{breakpoint}</span>
        </small>
      </header>
      <div className="serp-sub-container">
        <main id="mainline">
          <header className="title-block">
            <p>Mainline</p>
            <small>
              Blocks use up to 8 Columns<br></br>16px gap / 16px padding
            </small>
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
            <small>
              Blocks use up to 8 Columns<br></br>16px gap / 16px padding
            </small>
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
  );
}

export default SerpGridPage;
