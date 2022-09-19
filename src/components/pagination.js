import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1).map((page) => (
    <li
      className={page === currentPage ? "page-item active" : "page-item"}
      key={page}
    >
      <button className="page-link" onClick={() => onPageChange(page)}>
        {page}
      </button>
    </li>
  ));
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">{pages}</ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
