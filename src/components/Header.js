import React from "react";

const headerStyle = {
  title: {
    color: "lemonchiffon",
    backgroundColor: "darkgray",
  },
};

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light justify-content-center bg-light">
        <span className="navbar-brand mb-0 h1" style={headerStyle.title}>
          Employee Search
        </span>
      </nav>
    </div>
  );
}
export default Header;
