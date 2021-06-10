import React from "react";

function Header(props) {
  return (
    <header>
      <h1>
        <i className="far fa-id-badge"></i> {props.name}
      </h1>
    </header>
  );
}

export default Header;
