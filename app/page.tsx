"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import GridDog from "./components/grid-dog";

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

  return (
    <main className={styles.main}>
      <div>BowWow Bookshelf</div>
      <GridDog allDogs={allDogs} setAllDogs={setAllDogs} />
    </main>
  );
}
