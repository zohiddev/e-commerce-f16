import Home from "../pages";
import BasketContent from "../pages/BasketContent";
import CompareProducts from "../pages/CompareProducts";
import FovoritePage from "../pages/FovoritePage";
import ProductItem from "../pages/ProductItem";
import ApplePage from "../pages/ApplePage";
import NotePage from "../pages/NotePage";

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
        path: "/apple",
        element: ApplePage
    },
    {
        path: "/fovorite",
        element: FovoritePage
    },
    {
        path: "/basket",
        element: BasketContent
    },
    {
        path: "/note",
        element: NotePage

    }
]