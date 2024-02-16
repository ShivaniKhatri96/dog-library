'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import GridDog from "./components/GridDog";

export default function Home() {
  const [allDogs, setAllDogs] = useState<any[]>([]);
  useEffect(() => {
    const url = "https://api.thedogapi.com/v1/images/search?limit=30&api_key=live_ZpR1zhvt8RaGCvGRWKt8zf2rWK5aDTE2ns2tao5jBJ6eUVHeKOZkXoyrMsziASrZ";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllDogs(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(allDogs)
  return (
    <main className={styles.main}>
     <div>Dog Library</div>
     <GridDog />
    </main>
  );
}
