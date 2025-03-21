"use client"

import { useState } from "react"
import "./ProductFilter.css"

function ProductFilter({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState("")

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value)
  }

  const handleApplyFilter = () => {
    onFilterChange({ priceRange })
  }

  return (
    <div className="filter-container">
      <div className="filter-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98L19.51 5.65C19.61 5.52 19.5 5.35 19.34 5.35H4.51C4.35 5.35 4.24 5.53 4.34 5.66H4.25Z"
            fill="#333"
          />
        </svg>
        Bộ lọc sản phẩm
      </div>

      <div className="price-filter">
        <div className="filter-title" style={{ fontSize: "14px" }}>
          Khoảng giá
        </div>
        <div className="price-range">
          <div className="price-option">
            <input
              type="radio"
              id="price-all"
              name="price-range"
              value=""
              checked={priceRange === ""}
              onChange={handlePriceChange}
            />
            <label htmlFor="price-all">Tất cả</label>
          </div>
          <div className="price-option">
            <input
              type="radio"
              id="price-under-50k"
              name="price-range"
              value="0-50000"
              checked={priceRange === "0-50000"}
              onChange={handlePriceChange}
            />
            <label htmlFor="price-under-50k">Dưới 50.000₫</label>
          </div>
          <div className="price-option">
            <input
              type="radio"
              id="price-50k-100k"
              name="price-range"
              value="50000-100000"
              checked={priceRange === "50000-100000"}
              onChange={handlePriceChange}
            />
            <label htmlFor="price-50k-100k">50.000₫ - 100.000₫</label>
          </div>
          <div className="price-option">
            <input
              type="radio"
              id="price-100k-200k"
              name="price-range"
              value="100000-200000"
              checked={priceRange === "100000-200000"}
              onChange={handlePriceChange}
            />
            <label htmlFor="price-100k-200k">100.000₫ - 200.000₫</label>
          </div>
          <div className="price-option">
            <input
              type="radio"
              id="price-over-200k"
              name="price-range"
              value="200000-999999999"
              checked={priceRange === "200000-999999999"}
              onChange={handlePriceChange}
            />
            <label htmlFor="price-over-200k">Trên 200.000₫</label>
          </div>
        </div>
      </div>

      <div className="filter-divider"></div>

      <button className="filter-button" onClick={handleApplyFilter}>
        Áp dụng
      </button>
    </div>
  )
}

export default ProductFilter

