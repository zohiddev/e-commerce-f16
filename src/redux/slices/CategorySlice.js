import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],  
    loading: false
}

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        setCategories: (state, {_, payload}) => {
            state.items = payload
        },
        setLoading: (state, {_, payload}) => {
            state.loading = payload
        }
    }
})

export const {setCategories, setLoading} = CategorySlice.actions

export default CategorySlice.reducer