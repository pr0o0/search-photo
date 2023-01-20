import { React, useState } from "react";

function Search({ search, setinput }) {
  const inputhandle = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className="search">
      <div className="searchbar">
        <input onChange={inputhandle} type="text" />
        <div className="s1">
          <button onClick={search}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
