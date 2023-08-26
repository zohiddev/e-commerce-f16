import Home from "../pages";
import CompareProducts from "../pages/CompareProducts";
import ProductItem from "../pages/ProductItem";

export const routes = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/compare",
        element: CompareProducts
    },
    {
        path: "/product/:id",
        element: ProductItem
    }
]