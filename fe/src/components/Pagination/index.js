"use client"
import "./Pagination.css"

function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    let endPage = startPage + maxPagesToShow - 1

    if (endPage > totalPages) {
      endPage = totalPages
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className="pagination-item">
          <a className={`pagination-link ${currentPage === i ? "active" : ""}`} onClick={() => onPageChange(i)}>
            {i}
          </a>
        </li>,
      )
    }

    return pageNumbers
  }

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        <li className="pagination-item">
          <a
            className={`pagination-link prev ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          >
            &laquo;
          </a>
        </li>

        {renderPageNumbers()}

        <li className="pagination-item">
          <a
            className={`pagination-link next ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          >
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination

