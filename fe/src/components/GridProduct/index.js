import ProductCard from "../ProductCard";

function ProductGrid(props) {
  const { products, onAddToCart } = props

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "1rem",
  }

  return (
    <div style={gridStyle}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          image={product.image}
          weight={product.weight}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductGrid;

