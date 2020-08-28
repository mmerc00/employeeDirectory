import React from "react";

const headerStyle = {
  div: {
    backgroundColor: "opal",
    paddingTop: 30,
    fontFamily: "Times New Roman",
    border: 5,
    paddingBottom: 30,
    fontSize: 30,
  },
};

function Header() {
  return (
    <div>
      <nav className="navbar justify-content-center">
        <span className="navbar-brand mb-0 h1" style={headerStyle.div}>
          Employee Search
        </span>
      </nav>
    </div>
  );
}
export default Header;
