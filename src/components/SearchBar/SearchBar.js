import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.data.filter((value) => {
      return value.ProductName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search-wrap">
      <div className="search-inputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon className="search-icon"/>
          ) : (
            <CloseIcon id="clear-btn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 15).map((item, index) => {
            return (
                <div className="output-container" key={index}>
                <div className="output-container-image"><img src={item.Image} alt='' width="80px" height="70px"/></div>
                <div className="output-container-body">{item.ProductName}</div>
                </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;