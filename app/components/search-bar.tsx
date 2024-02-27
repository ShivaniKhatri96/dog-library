"use client";
import React, { useState } from "react";
import SearchIcon from "@/public/search-icon.svg";
import Image from "next/image";
import Styles from "./search-bar.module.css";
const SearchBar = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  console.log(isSearch);
  return (
    <div
      className={`${Styles.searchbarBox} ${
        isSearch ? Styles.searchbarBoxFocused : ""
      }`}
    >
      <Image
        priority
        src={SearchIcon}
        width={20}
        height={15}
        alt="Icon for search bar"
      />
      <input
        type="text"
        className={Styles.searchbar}
        onFocus={() => setIsSearch(true)}
        onBlur={() => setIsSearch(false)}
      />
    </div>
  );
};

export default SearchBar;
