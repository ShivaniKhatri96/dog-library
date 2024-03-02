"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import GridDog from "../components/GridDog";
import Select from "react-select";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import { colorStyles } from "../select-styles/SelectStyles";
import Pagination from "@/components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    per_page?: string;
  };
}) {
  const [allDogs, setAllDogs] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>("");
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const per_page = Number(searchParams?.per_page) || 12;

  //mocked, skipped and limited in the real app
  const start = (currentPage - 1) * per_page;
  const end = start + per_page;

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
  //options for react-select
  const options = [
    { value: "sporting", label: "Sporting" },
    { value: "non-sporting", label: "Non-Sporting" },
    { value: "terrier", label: "Terrier" },
    { value: "herding", label: "Herding" },
    { value: "toy", label: "Toy" },
    { value: "working", label: "Working" },
    { value: "hound", label: "Hound" },
    { value: "mixed", label: "Mixed" },
    { value: "any", label: "Any" },
  ];
  const selectedHandler = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };

  //updating the options based on search and select options
  const updatedOptions = allDogs?.filter((dog) => {
    const isSearchMatch =
      query.length &&
      dog?.breeds[0].name.toLowerCase().includes(query.toLowerCase());
    const isSelectedMatch =
      selected === "any" ||
      dog?.breeds[0].breed_group.toLowerCase() === selected.toLowerCase();
    return (
      (query === "" || isSearchMatch) && (selected === "" || isSelectedMatch)
    );
  });
  const totalPages = Math.ceil(updatedOptions.length / per_page);

  return (
    <main className={styles.main}>
      <div className={styles.bookshelfTitle}>BowWow Bookshelf</div>
      <div className={styles.searchSelectBox}>
        <SearchBar />
        <Select
          options={options}
          styles={colorStyles}
          onChange={selectedHandler}
        />
      </div>
      {updatedOptions.length ? (
        // <Suspense fallback={<Loading />}>
        <GridDog updatedOptions={updatedOptions} start={start} end={end} />
      ) : (
        //</Suspense>
        <Loading />
      )}
      <Pagination
        totalPages={totalPages}
        hasNextPage={end < updatedOptions.length}
        hasPrevPage={start > 0}
      />
    </main>
  );
}
