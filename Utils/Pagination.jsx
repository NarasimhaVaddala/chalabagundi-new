import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next ›"
      onPageChange={(e) => onPageChange(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="‹ Prev"
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center items-center gap-2 mt-6"
      pageClassName="px-3 py-1 border rounded-lg hover:bg-[#179958] hover:text-white transition"
      activeClassName="bg-[#179958] text-white border-[#179958]"
      previousClassName="px-3 py-1 border rounded-lg hover:bg-[#179958] hover:text-white transition"
      nextClassName="px-3 py-1 border rounded-lg hover:bg-[#179958] hover:text-white transition"
      breakClassName="px-3 py-1"
    />
  );
}
