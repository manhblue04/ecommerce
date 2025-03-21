
import ProductGrid from "../../../components/GridProduct";
import PromotionSlider from "../../../components/PromotionSlider";

//Làm API products
const products = [
	{
		id: "1",
		name: "Lê Nam Phi",
		price: 83300,
		originalPrice: 104300,
		discount: 20,
		image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rPPu3CfVBsK7DFdiqC2ZIa5zQKrAqS.png",
		weight: "700 gr",
	},
	{
		id: "2",
		name: "Táo Envy New Zealand",
		price: 95000,
		originalPrice: 120000,
		discount: 15,
		image: "/placeholder.svg?height=300&width=300",
		weight: "500 gr",
	},
	{
		id: "3",
		name: "Xoài Cát Hòa Lộc",
		price: 75000,
		originalPrice: 85000,
		discount: 10,
		image: "/placeholder.svg?height=300&width=300",
		weight: "1 kg",
	},
	{
		id: "4",
		name: "Dưa Hấu Không Hạt",
		price: 45000,
		image: "/placeholder.svg?height=300&width=300",
		weight: "2 kg",
	},
	{
		id: "5",
		name: "Nho Đỏ Không Hạt",
		price: 120000,
		originalPrice: 150000,
		discount: 20,
		image: "/placeholder.svg?height=300&width=300",
		weight: "500 gr",
	},
	{
		id: "6",
		name: "Bơ Sáp Đắk Lắk",
		price: 89000,
		image: "/placeholder.svg?height=300&width=300",
		weight: "1 kg",
	},
]


function PageHome() {
	const handleAddToCart = (id) => {
		alert(`Đã thêm sản phẩm vào giỏ hàng!`)
		console.log(`Added product with ID: ${id} to cart`)
	}

	return (
		<>
			{/* Slide Khuyến mãi */}
			<PromotionSlider />
			{/* Slide Khuyến mãi */}

			{/* Làm API sản phẩm nổi bật */}

			{/* Danh sách sp nổi bật */}
			<h1>Sản Phẩm Nổi Bật</h1>
			<ProductGrid products={products} onAddToCart={handleAddToCart} />
			{/* Danh sách sp nổi bật */}


			<h1>Thực phẩm tươi sống</h1>
			<ProductGrid products={products} onAddToCart={handleAddToCart} />

		</>
	);
}

export default PageHome;