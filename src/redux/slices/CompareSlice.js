import { createSlice } from "@reduxjs/toolkit";
import { getComparedProducts } from "../services/CompareService";

const localeItems = JSON.parse(localStorage.getItem('comparedProducts'))

const initialState = {
    comparedProducts: Array.isArray(localeItems) && !!localeItems.length ? localeItems : [],
    loading: false,
    item: [],
    features: [],
}

const CompareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers:{
        addComparedProducts: (state, action) => {
            state.comparedProducts = [...state.comparedProducts, action.payload]
            localStorage.setItem('comparedProducts', JSON.stringify(state.comparedProducts))
        },
        removeComparedProducts: (state, action) => {
            state.comparedProducts = state.comparedProducts.filter(item => item.id !== action.payload)
            localStorage.setItem('comparedProducts', JSON.stringify(state.comparedProducts))
        }
    },
    extraReducers: {
        [getComparedProducts.pending]: (state, action) => {
            state.loading = true
        },
         [getComparedProducts.fulfilled]: (state, action) => {
            state.items = action.payload.products
            state.features = action.payload.features
            state.loading = false
         },
         [getComparedProducts.rejected]: (state, action) => {
            state.loading = false
            console.log(action)
         }
    }
})

export const {addComparedProducts, removeComparedProducts} = CompareSlice.actions

export default CompareSlice.reducer