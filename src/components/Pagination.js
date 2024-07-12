import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="mx-1 px-3 py-1 border rounded bg-white text-blue-700"
      >
        <MdKeyboardArrowLeft />
      </button>
      {pageNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => typeof number === 'number' && setCurrentPage(number)}
          className={`mx-1 px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="mx-1 px-3 py-1 border rounded bg-white text-blue-700"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
