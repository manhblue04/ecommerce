import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./PromotionSlider.css"
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

function PromotionSlider() {
	//làm API promotions
	const promotions = [
		{
			id: 1,
			image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vdd5LxQD9HYL4taq8WtJ5VWXF8kRhT.png",
			alt: "Tháng Của Nàng - Ngàn Ưu Đãi - Giảm đến 50%",
		},
		{
			id: 2,
			image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vdd5LxQD9HYL4taq8WtJ5VWXF8kRhT.png",
			alt: "Khuyến mãi mùa hè - Giảm giá đặc biệt",
		},
		{
			id: 3,
			image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vdd5LxQD9HYL4taq8WtJ5VWXF8kRhT.png",
			alt: "Ưu đãi cuối tuần - Mua 1 tặng 1",
		},
	]

	const features = [
		{
			id: 1,
			icon: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20.5 7.27783L12 12.0001L3.5 7.27783V17.0001C3.5 17.8001 4.2 18.5001 5 18.5001H19C19.8 18.5001 20.5 17.8001 20.5 17.0001V7.27783Z"
						fill="white"
					/>
					<path d="M12 3L1 9L12 15L23 9L12 3Z" fill="white" />
				</svg>
			),
			title: "1 ĐỔI 1 SẢN PHẨM LỖI",
			colorClass: "green",
		},
		{
			id: 2,
			icon: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4V13C4 11.9 4.9 11 6 11H8V19H13.52C14.32 19 15.08 18.65 15.6 18.07L20 12.65V7Z"
						fill="white"
					/>
				</svg>
			),
			title: "GIAO HÀNG TRONG NGÀY",
			subtitle: "(Miễn phí vận chuyển)",
			colorClass: "orange",
		},
		{
			id: 3,
			icon: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"
						fill="white"
					/>
				</svg>
			),
			title: "NGUỒN GỐC XUẤT XỨ RÕ RÀNG",
			colorClass: "blue",
		},
		{
			id: 4,
			icon: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z"
						fill="white"
					/>
					<path d="M10 13L7 10L5.5 11.5L10 16L18 8L16.5 6.5L10 13Z" fill="white" />
				</svg>
			),
			title: "100% SẢN PHẨM ĐẠT CHUẨN",
			colorClass: "gold",
		},
	]

	return (
		<div className="promotion-slider-container">

			{/* Slide khuyến mãi */}
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					prevEl: ".prev-arrow",
					nextEl: ".next-arrow",
				}}
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000 }}
				loop={true}
			>
				{promotions.map((promotion) => (
					<SwiperSlide key={promotion.id}>
						<div className="promotion-slide">
							<img src={promotion.image || "/placeholder.svg"} alt={promotion.alt} className="promotion-image" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{/* Slide khuyến mãi */}
			
			{/* Nút chuyển slide */}
			<button className="navigation-arrow prev-arrow">
				<FcPrevious />
			</button>
			<button className="navigation-arrow next-arrow">
				<FcNext />
			</button>
			{/* Nút chuyển slide */}

			{/* Đặc trưng */}
			<div className="service-features">
				{features.map((feature) => (
					<div key={feature.id} className="feature-item">
						<div className={`feature-icon ${feature.colorClass}`}>{feature.icon}</div>
						<div className="feature-text">
							<span className="feature-title">{feature.title}</span>
							{feature.subtitle && <span className="feature-subtitle">{feature.subtitle}</span>}
						</div>
					</div>
				))}
			</div>
			{/* Đặc trưng */}

		</div>
	)
}

export default PromotionSlider;

