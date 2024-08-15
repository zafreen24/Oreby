import React from "react";

const PaginationArea = ({
  pageNumber,
  paginate,
  currentPage,
  i,
  previous,
  next,
}) => {
  return (
    <>
      <nav className="py-3" aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          {pageNumber.length > 0 && 
            <li onClick={previous}>
              <a className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 duration-300 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-800 hover:text-white dark:bg-gray-100">
                Previous
              </a>
            </li>
          }

          {pageNumber.map((item) => (
            <li
              onClick={() => paginate(item)}
              className={
                currentPage == i + 1
                  ? "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 duration-300 bg-white border border-gray-300 hover:bg-gray-800 hover:text-white dark:bg-gray-100"
                  : "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 duration-300 bg-white border border-gray-300 hover:bg-gray-800 hover:text-white dark:bg-gray-100"
              }
            >
              {item + 1}
            </li>
          ))}

          {pageNumber.length > 0 &&
          <li>
          <a onClick={next}
            className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-800 hover:text-white dark:bg-gray-100"
          >
            Next
          </a>
        </li>
          }
        </ul>
      </nav>
    </>
  );
};

export default PaginationArea;
