import React from "react";

const searchStyle = {
  div: {
    marginTop: 30,
    marginBottom: 50,
  },
};
function Search({ onChange }) {
  return (
    <div>
      <form
        className="form-inline justify-content-center"
        style={searchStyle.div}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onChange}
        />
      </form>
    </div>
  );
}
export default Search;
