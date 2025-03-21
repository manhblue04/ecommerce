
import { useState, useEffect } from "react";
import ProductFilter from "../../../components/ProductFilter";
import ProductSort from "../../../components/ProductSort";
import Pagination from "../../../components/Pagination";
import ProductCard from "../../../components/ProductCard";


// Làm API sản phẩm
const allProducts = Array(36)
    .fill()
    .map((_, index) => ({
        id: `product-${index + 1}`,
        name: `Sản phẩm ${index + 1}`,
        price: Math.floor(Math.random() * 300000) + 20000,
        originalPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 400000) + 50000 : null,
        discount: Math.random() > 0.5 ? Math.floor(Math.random() * 30) + 5 : null,
        image: `/placeholder.svg?height=300&width=300&text=SP${index + 1}`,
        weight: `${Math.floor(Math.random() * 5) + 1} ${Math.random() > 0.5 ? "kg" : "gr"}`,
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
        sales: Math.floor(Math.random() * 100) + 1,
    }))


    
function TopProductList() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("default");
    const [filter, setFilter] = useState({ priceRange: "" });

    const productsPerPage = 18;

    // Khởi tạo sp
    useEffect(() => {
        setProducts(allProducts);
        setFilteredProducts(allProducts);
    }, []);

    // sort và filter
    useEffect(() => {
        let result = [...products]
        
        // Apply price filter
        if (filter.priceRange) {
            const [min, max] = filter.priceRange.split("-").map(Number)
            result = result.filter((product) => product.price >= min && product.price <= max)
        }
  

        // Apply sorting
        switch (sortOption) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                result.sort((a, b) => b.price - a.price)
                break
            case "newest":
                result.sort((a, b) => b.date - a.date)
                break
            case "oldest":
                result.sort((a, b) => a.date - b.date)
                break
            case "bestselling":
                result.sort((a, b) => b.sales - a.sales)
                break
            default:
                // Default sorting (you can define your own default)
                break
        }

        setFilteredProducts(result)
        setCurrentPage(1) // Reset to first page when filter/sort changes
    }, [filter, sortOption, products])

    // Get current products for pagination
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        // Scroll to top when changing page
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    // Handle filter change
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter)
    }

    // Handle sort change
    const handleSortChange = (option) => {
        setSortOption(option)
    }

    // Handle add to cart
    const handleAddToCart = (id) => {
        alert(`Đã thêm sản phẩm vào giỏ hàng!`)
        console.log(`Added product with ID: ${id} to cart`)
    }

    // Format price with Vietnamese currency format
    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN").format(price) + "₫"
    }

    return (
        <div className="featured-products-page">
            <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}>Sản Phẩm Nổi Bật</h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {/* Left sidebar with filters */}
                <div style={{ flex: "0 0 250px" }}>
                    <ProductFilter onFilterChange={handleFilterChange} />
                </div>

                {/* Main content */}
                <div style={{ flex: "1 1 0" }}>
                    {/* Sort options */}
                    <ProductSort onSortChange={handleSortChange} />

                    {/* Product count */}
                    <div style={{ marginBottom: "20px", fontSize: "14px", color: "#666" }}>
                        Hiển thị {currentProducts.length} trên {filteredProducts.length} sản phẩm
                    </div>

                    {/* Product grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {currentProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                discount={product.discount}
                                image={product.image}
                                weight={product.weight}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    {filteredProducts.length > productsPerPage && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopProductList;

