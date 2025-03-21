import "./ProductCard.css";

function ProductCard(props) {
    const { name, price, originalPrice, discount, image, weight, onAddToCart, id, style } = props

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(id)
        }
    }

    // Format price with Vietnamese currency format
    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN").format(price) + "₫"
    }

    return (
        <>
            <div className="product-card" style={style}>
                {/* Discount tag */}
                {discount && <div className="discount-tag">{discount}%</div>}

                {/* Product image */}
                <img src={image || "/placeholder.svg"} alt={name} className="product-image" />

                {/* Product info */}
                <div className="product-info">
                    {/* Product name and weight */}
                    <h4 className="product-name">
                        {name} {weight && `- ${weight}`}
                    </h4>

                    {/* Price information */}
                    <div className="price-container">
                        <span className="current-price">{formatPrice(price)}</span>
                        {originalPrice && <span className="original-price">{formatPrice(originalPrice)}</span>}
                    </div>

                    {/* Buy button */}
                    <button className="buy-button" onClick={handleAddToCart}>
                        <svg
                            className="buy-button-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        CHỌN MUA
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard

