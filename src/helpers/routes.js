import Home from "../pages";
import BasketContent from "../pages/BasketContent";
import CompareProducts from "../pages/CompareProducts";
import FovoritePage from "../pages/FovoritePage";
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
    },
    {
        path: "/fovorite",
        element: FovoritePage
    },
    {
        path: "/basket",
        element: BasketContent
    }
]