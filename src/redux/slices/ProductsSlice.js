import { createSlice } from "@reduxjs/toolkit";
import { getProductOfDay, getProductsS } from '../services/ProductsService'

const initialState = {
    items: [],
    productOfTheDay: [],
    loading: false
}

const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProductsS.pending]: (state, action) => {
            state.loading = true
        },

        [getProductsS.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.items = action.payload.products
            state.loading = false
        },
        [getProductsS.rejected]: (state, action) => {
            state.loading = false
        },
        [getProductOfDay.pending]: (state, action) => {
            state.loading = true
        },
        [getProductOfDay.fulfilled]: (state, action) => {
            state.productOfTheDay = action.payload.products
            state.loading = false
        },
        [getProductOfDay.rejected]: (state, action) => {
            state.loading = false
        },
    }
})


export default ProductsSlice.reducer