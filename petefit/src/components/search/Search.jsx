import React from "react";
import { SearchContainer, SearchInput } from "./SearchStyles";

const Search = ({ searchQuery, onSearch }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="검색 조건"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchContainer>
  );
};

export default Search;
