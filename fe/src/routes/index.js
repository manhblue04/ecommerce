import LayoutDefault from "../layout/LayoutDefault";

import PageHome from "../pages/User/PageHome";
import ProductList from "../pages/User/ProductList";
import TopProductList from "../pages/User/TopProductList";
import ProductDetail from "../pages/User/ProductDetail";
import PageCart from "../pages/User/PageCart";
import PageCheckout from "../pages/User/PageCheckout";
import PageLogin from "../pages/User/PageLogin";
import Dashboard from "../pages/User/Dashboard";
import News from "../pages/User/News";
import TestSp from "../components/TestSp";


// import Dashboard from "../pages/Dashboard";
// import ListRoom from "../pages/ListRoom";
// import BookRoom from "../pages/BookRoom";
// import CreateRoom from "../pages/CreateRoom";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <PageHome />
            },
            {
                path: "/product-list",
                element: <ProductList />,
                children: [
                    {
                        path: "vegetable",
                        element: <TestSp />
                    },
                    {
                        path: "food",
                        element: <TestSp />
                    },
                    {
                        path: "fast-food",
                        element: <TestSp />
                    },
                    {
                        path: "drink",
                        element: <TestSp />
                    },
                    {
                        path: "confectionery",
                        element: <TestSp />
                    },
                    {
                        path: "spice",
                        element: <TestSp />
                    },
                ]
            },
            {
                path: "/top-product-list",
                element: <TopProductList />
            },
            {
                path: "/product-detail",
                element: <ProductDetail />
            },
            {
                path: "/page-cart",
                element: <PageCart />
            },
            {
                path: "/page-checkout",
                element: <PageCheckout />
            },
            {
                path: "/page-login",
                element: <PageLogin />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/news",
                element: <News />
            }
        ]
    }
];