import LayoutDefault from "../layout/LayoutDefault";
import BookRoom from "../pages/BookRoom";
import CreateRoom from "../pages/CreateRoom";
import Dashboard from "../pages/Dashboard";
import ListRoom from "../pages/ListRoom";
import News from "../pages/News";
import PageHome from "../pages/PageHome";
import ProductList from "../pages/ProductList";
import TopProductList from "../pages/TopProductList";
import TestSp from "../pages/TestSp";

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
                    // {
                    //     path: "vegetable",
                    //     element: <TestSp />
                    // },
                    // {
                    //     path: "food",
                    //     element: <TestSp />
                    // },
                    // {
                    //     path: "fast-food",
                    //     element: <TestSp />
                    // },
                    // {
                    //     path: "drink",
                    //     element: <TestSp />
                    // },
                    // {
                    //     path: "confectionery",
                    //     element: <TestSp />
                    // },
                    // {
                    //     path: "spice",
                    //     element: <TestSp />
                    // },
                ]
            },
            {
                path: "/top-product-list",
                element: <TopProductList />
            },
            {
                path: "/news",
                element: <News />
            },
            {
                path: "/dash-board",
                element: <Dashboard />
            },
            {
                path: "/book-room",
                element: <BookRoom />
            },
            {
                path: "/create-room",
                element: <CreateRoom />
            },
            {
                path: "/list-room",
                element: <ListRoom />
            }
        ]
    }
];