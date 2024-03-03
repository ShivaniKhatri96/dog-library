"use client";
import styles from "./Pagination.module.css";
import { FC } from "react";
import Image from "next/image";
import ArrowLeft from "@/public/assets/arrow-left.svg";
import ArrowRight from "@/public/assets/arrow-right.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
}

export const Pagination: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
}: PaginationControlsProps) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  console.log("pages", pages);
  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        disabled={!hasPrevPage}
        onClick={() => {
          createPageURL(currentPage - 1);
        }}
      >
        <Image
          priority
          src={ArrowLeft}
          width={15}
          height={10}
          alt="Icon for Previous page"
          className={!hasPrevPage ? styles.arrowDisabled : ""}
        />
        Previous
      </button>

      <div className={styles.allPageNumbers}>
        {pages.map((pageNumber) => (
          <div
            key={pageNumber}
            className={`${styles.singlePageNumber}
              ${currentPage === pageNumber ? styles.selectedPageNumber : ""}`}
            onClick={() => {
              createPageURL(pageNumber);
            }}
          >
            {pageNumber}
          </div>
        ))}
      </div>

      <button
        className={styles.paginationButton}
        disabled={!hasNextPage}
        onClick={() => {
          createPageURL(currentPage + 1);
        }}
      >
        Next
        <Image
          priority
          src={ArrowRight}
          width={15}
          height={10}
          alt="Icon for Next page"
          className={!hasNextPage ? styles.arrowDisabled : ""}
        />
      </button>
    </div>
  );
};

export default Pagination;
