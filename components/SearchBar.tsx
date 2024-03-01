"use client";
import React, { useState } from "react";
import SearchIcon from "@/public/assets/search-icon.svg";
import Image from "next/image";
import styles from "./SearchBar.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // For example, /dashboard/invoices?query=lee if the user searches for "Lee"
    replace(`${pathname}?${params.toString()}`);
  };
  
  return (
    <div
      className={`${styles.searchbarBox} ${
        isSearch ? styles.searchbarBoxFocused : ""
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
        className={styles.searchbar}
        onFocus={() => setIsSearch(true)}
        onBlur={() => setIsSearch(false)}
        placeholder="Search using Dog Name, eg: Bulldog..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchBar;
