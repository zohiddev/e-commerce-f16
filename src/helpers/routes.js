import Home from "../pages";
import CompareProducts from "../pages/CompareProducts";
import ProductItem from "../pages/ProductItem";
import ApplePage from "../pages/ApplePage";
import BasketContent from "../pages/BasketContent";
import NotePage from "../pages/NotePage";
import DataPage from "../pages/DataPage";

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
        path: "/basket",
        element: BasketContent
    },
    {
        path: "/note",
        element: NotePage
    },
    {
        path: "/datapage",
        element: DataPage
    }
]