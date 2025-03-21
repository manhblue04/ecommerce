import { Menu } from "antd";
import { HomeOutlined, ProductOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FaHotjar } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";

function MenuSider() {
    const items = [
        {
            label: <Link to="/">Trang chủ</Link>,
            icon: <HomeOutlined />,
            key: "/",
        },
        {
            label: <Link to="/product-list">Danh mục</Link>,
            icon: <ProductOutlined />,
            key: "/product-list",
            children: [
                {
                    label: <Link to="product-list/vegetable/">Rau củ quả</Link>,
                    key: "vegetable"
                },
                {
                    label: <Link to="/product-list/food">Thịt - Hải sản</Link>,
                    key: "food"
                },
                {
                    label: <Link to="/product-list/fast-food">Đồ ăn sẵn</Link>,
                    key: "fast-food"
                },
                {
                    label: <Link to="/product-list/drink">Đồ uống</Link>,
                    key: "drink"
                },
                {
                    label: <Link to="/product-list/confectionery">Bánh kẹo</Link>,
                    key: "confectionery"
                },
                {
                    label: <Link to="/product-list/spice">Gia vị - Đồ khô</Link>,
                    key: "spice"
                }
            ]
        },
        {
            label: <Link to="/top-product-list">Sản phẩm nổi bật</Link>,
            icon: <FaHotjar />,
            key: "/top-product-list",
        },
        {
            label: <Link to="/news">Tin tức nổi bật</Link>,
            icon: <FaNewspaper />,
            key: "/news",
        }
    ];

    return (
        <>
            <Menu
                mode="inline"
                items={items}
                defaultSelectedKeys={["/"]}
                defaultOpenKeys={["/"]}
            />
        </>
    );
}

export default MenuSider;