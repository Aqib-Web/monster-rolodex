import React from "react";

import "./SearchBox.styles.css";

function SearchBox({ placeholder, handleChange, value }) {
  return (
    <div className="searchBox">
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
