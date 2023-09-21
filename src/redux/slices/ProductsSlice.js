import { createSlice } from "@reduxjs/toolkit";
import { getProductsS } from '../services/ProductsService'

const initialState = {
    items: [],
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
            state.items = action.payload.products
            state.loading = false
        },
        [getProductsS.rejected]: (state, action) => {
            state.loading = false
            console.log(action.payload)
        }
    }
})


export default ProductsSlice.reducer