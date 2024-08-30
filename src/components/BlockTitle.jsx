import React from "react";

function BlockTitle({ invertText, label }) {
  return (
    <header className="block--title">
      <h6 className={`${invertText === true ? "text--black" : "text--white"}`}>
        {label}
      </h6>
    </header>
  );
}

BlockTitle.defaultProps = {
  invertText: false,
  label: "Container",
};

export default BlockTitle;
