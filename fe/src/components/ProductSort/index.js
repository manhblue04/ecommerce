"use client"
import "./ProductSort.css"

function ProductSort({ onSortChange }) {
  const handleSortChange = (e) => {
    onSortChange(e.target.value)
  }

  return (
    <div className="sort-container">
      <span className="sort-label">Sắp xếp theo:</span>
      <select className="sort-select" onChange={handleSortChange} defaultValue="default">
        <option value="default">Mặc định</option>
        <option value="price-asc">Giá: Thấp đến cao</option>
        <option value="price-desc">Giá: Cao đến thấp</option>
        <option value="newest">Mới nhất</option>
        <option value="oldest">Cũ nhất</option>
        <option value="bestselling">Bán chạy nhất</option>
      </select>
    </div>
  )
}

export default ProductSort

