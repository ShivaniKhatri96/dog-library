import React from "react";
import SearchIcon from "@/public/search-icon.svg";
import Image from "next/image";
import Styles from "./search-bar.module.css";
const SearchBar = () => {
  return (
    <div className={Styles.searchbarBox}>
      <Image
        priority
        src={SearchIcon}
        width={20}
        height={15}
        alt="Icon for search bar"
      />
      <input type="text" className={Styles.searchbar}/>
    </div>
  );
};

export default SearchBar;
