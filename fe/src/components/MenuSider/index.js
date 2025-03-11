import { Menu } from "antd";
import { HomeOutlined, DashboardOutlined, LayoutOutlined, AppstoreOutlined, PieChartOutlined, FileOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
    const items = [
        {
            label: <Link to="/">Trang chủ</Link>,
            icon: <HomeOutlined />,
            key: "/",
        },
        {
            label: <Link to="/product-list">Sản phẩm</Link>,
            icon: <DashboardOutlined />,
            key: "/product-list",
            // children: [
            //     {
            //         label: <Link to="product-list/vegetable/">Rau củ quả</Link>,
            //         key: "vegetable"
            //     },
            //     {
            //         label: <Link to="/product-list/food">Thịt - Hải sản</Link>,
            //         key: "food"
            //     },
            //     {
            //         label: <Link to="/product-list/fast-food">Đồ ăn sẵn</Link>,
            //         key: "fast-food"
            //     },
            //     {
            //         label: <Link to="/product-list/drink">Đồ uống</Link>,
            //         key: "drink"
            //     },
            //     {
            //         label: <Link to="/product-list/confectionery">Bánh kẹo</Link>,
            //         key: "confectionery"
            //     },
            //     {
            //         label: <Link to="/product-list/spice">Gia vị - Đồ khô</Link>,
            //         key: "spice"
            //     }
            // ]
        },
        {
            label: <Link to="/top-product-list">Sản phẩm nổi bật</Link>,
            icon: <DashboardOutlined />,
            key: "/top-product-list",
        },
        {
            label: <Link to="/news">Tin tức nổi bật</Link>,
            icon: <DashboardOutlined />,
            key: "/news",
        },
        // {
        //     label: "Dashboard",
        //     icon: <DashboardOutlined />,
        //     key: "menu-1",
        //     children: [
        //         {
        //             label: <Link to="/dash-board">Dashboard</Link>,
        //             key: "/dash-board"
        //         },
        //         {
        //             label: "Menu 1 - 2",
        //             key: "menu-1-2"
        //         },
        //         {
        //             label: "Menu 1 - 3",
        //             key: "menu-1-3"
        //         },
        //     ]
        // },
        // {
        //     label: <Link to="/book-room">Book Room</Link>,
        //     icon: <LayoutOutlined />,
        //     key: "/book-room"
        // },
        // {
        //     label: <Link to="/create-room">Create Room</Link>,
        //     icon: <PieChartOutlined />,
        //     key: "/create-room"
        // },
        // {
        //     label: <Link to="/list-room">List Room</Link>,
        //     icon: <FileOutlined />,
        //     key: "/list-room"
        // },
        // {
        //     label: "Authentication",
        //     icon: <LockOutlined />,
        //     key: "menu-6"
        // },
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