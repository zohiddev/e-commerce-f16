import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import FavoritesSlice from "./slices/FavoritesSlice";
import CategorySlice from "./slices/CategorySlice";
import ProductsSlice from "./slices/ProductsSlice";
import EventsSlice from "./slices/EventsSlice";
import ProductSlice from "./slices/ProductSlice";
import CompareSlice from "./slices/CompareSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        favorites: FavoritesSlice,
        categories: CategorySlice,
        products: ProductsSlice,
        events: EventsSlice,
        product: ProductSlice,
        compare: CompareSlice
    }
})