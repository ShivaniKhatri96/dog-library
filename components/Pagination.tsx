"use client";
import styles from "./Pagination.module.css";
import { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// interface PaginationControlsProps {
//   hasNextPage: boolean;
//   hasPrevPage: boolean;
// }

export const Pagination = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const per_page = Number(searchParams.get("per_page")) || 5;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex gap-2">
      <button
        className="bg-blue-500 text-white p-1"
        // disabled={!hasPrevPage}
        onClick={() => {
          createPageURL(currentPage - 1);
        }}
      >
        prev page
      </button>

      <div>
        {currentPage} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className="bg-blue-500 text-white p-1"
        // disabled={!hasNextPage}
        onClick={() => {
          createPageURL(currentPage + 1);
        }}
      >
        next page
      </button>
    </div>
  );
};

export default Pagination;
