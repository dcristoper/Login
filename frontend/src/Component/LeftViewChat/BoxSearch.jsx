import React from "react";

function BoxSearch({ iconSearch, setIconSearch }) {
  return (
    <div className="box-search">
      <span className="material-symbols-outlined">
        {iconSearch ? "arrow_back" : "search"}
      </span>
      <input
        type="text"
        placeholder="Search new chat"
        onFocus={() => setIconSearch(true)}
        onBlur={() => setIconSearch(false)}
      />
      <span className="material-symbols-outlined">filter_list</span>
    </div>
  );
}

export default BoxSearch;
