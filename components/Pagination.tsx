"use client";
import styles from "./Pagination.module.css";
import { FC } from "react";
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
  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        disabled={!hasPrevPage}
        onClick={() => {
          createPageURL(currentPage - 1);
        }}
      >
        Previous
      </button>

      <div>
        {currentPage} / {totalPages}
      </div>

      <button
        className={styles.paginationButton}
        disabled={!hasNextPage}
        onClick={() => {
          createPageURL(currentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
