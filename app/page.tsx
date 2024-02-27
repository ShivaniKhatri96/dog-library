"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import GridDog from "./components/grid-dog";
import Select from "react-select";
import SearchBar from "./components/search-bar";

export default function Home() {
  const [allDogs, setAllDogs] = useState<any[]>([]);

  const removeDuplicates = (data: any) => {
    const idSet: any = {}; // Object to store encountered ids
    const result: any = [];
    data.forEach((item: any) => {
      item.breeds.forEach((breeds: any) => {
        if (!idSet[breeds.id]) {
          idSet[breeds.id] = true;
          result.push({ ...item });
        }
      });
    });
    return result;
  };

  useEffect(() => {
    const url =
      "https://api.thedogapi.com/v1/images/search?limit=100&api_key=live_ZpR1zhvt8RaGCvGRWKt8zf2rWK5aDTE2ns2tao5jBJ6eUVHeKOZkXoyrMsziASrZ";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const filteredData = data.filter(
          (item: any) =>
            item?.breeds &&
            item?.breeds.length !== 0 &&
            item?.breeds[0].breed_group &&
            item?.breeds[0].breed_group !== null
        );
        //since there are some duplicates remaining after filtering, we remove the duplicates
        const duplicateFreeData = removeDuplicates(filteredData);
        setAllDogs(duplicateFreeData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.bookshelfTitle}>BowWow Bookshelf</div>
      <div className={styles.searchSelectBox}>
        <SearchBar />
        <Select options={options} />
      </div>
      <GridDog allDogs={allDogs} setAllDogs={setAllDogs} />
    </main>
  );
}
