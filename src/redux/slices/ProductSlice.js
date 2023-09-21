import { createSlice } from "@reduxjs/toolkit";
import { getProductWithSlug } from "../services/ProductsService";

const initialState = {
    product: {},
    loading: false
}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers:{
        [getProductWithSlug.pending]: (state) => {state.loading = true},
        [getProductWithSlug.fulfilled]: (state, action) => {
            console.log(action)
            state.product = action.payload.product
            state.loading = false
        },
        [getProductWithSlug.rejected]: (state, action) => {
            state.loading = false
            console.log(action.payload)
        }
    }
})

export default ProductSlice.reducer