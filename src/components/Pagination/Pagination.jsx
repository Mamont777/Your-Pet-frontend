import React, { useState, useEffect, useCallback } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import {
  PaginationContainer,
  PaginationButton,
  PaginationNumbers,
  Wrapper,
} from './Pagination.styled';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [displayedPages, setDisplayedPages] = useState([]);

  const updatePages = useCallback(
    page => {
      const totalDisplayedPages = 5;
      const halfTotalDisplayedPages = Math.ceil(totalDisplayedPages / 2);

      let startPage = Math.min(Math.max(page - halfTotalDisplayedPages, 1));
      let endPage = Math.min(startPage + totalDisplayedPages - 1, totalPages);

      if (endPage - startPage < totalDisplayedPages - 1) {
        startPage = Math.max(endPage - totalDisplayedPages + 1, 1);
      }

      const newPages = Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      );
      setDisplayedPages(newPages);
    },
    [totalPages]
  );

  useEffect(() => {
    updatePages(currentPage);
  }, [currentPage, updatePages]);

  const handlePageClick = page => {
    onPageChange(page);
    updatePages(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
      updatePages(newPage);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
      updatePages(newPage);
    }
  };

  const showPrevButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;

  return (
    <Wrapper>
      <PaginationContainer>
        {showPrevButton && (
          <PaginationButton onClick={handlePrevClick}>
            <BsArrowLeft />
          </PaginationButton>
        )}

        <PaginationNumbers>
          {displayedPages.map(page => (
            <PaginationButton
              key={page}
              onClick={() => handlePageClick(page)}
              active={currentPage === page}
            >
              {page}
            </PaginationButton>
          ))}
        </PaginationNumbers>
        {showNextButton && (
          <PaginationButton onClick={handleNextClick}>
            <BsArrowRight />
          </PaginationButton>
        )}
      </PaginationContainer>
    </Wrapper>
  );
};

export default Pagination;
