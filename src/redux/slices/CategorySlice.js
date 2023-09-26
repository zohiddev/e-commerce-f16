import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesList } from "../services/CategoriesService";


const initialState = {
    items: [],  
    loading: false
}

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {
        [getCategoriesList.pending]: (state) => {
            state.loading = true
        },
        [getCategoriesList.fulfilled]: (state, action) => {
            state.items = action.payload.categories
            state.loading = false
        },
        [getCategoriesList.rejected]: (state, action) => {
            state.loading = false
            console.log(action.payload)
        }
    }
})

export default CategorySlice.reducer