import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers:{
        addFavorite: (state, {type, payload}) => {
            state.items = [...state.items, {...payload, isFavorite: true}]
            return state
        },
        removeFavorite: (state, {type, payload}) => {
            state.items = state.items.filter(item => item.id !== payload)
            return state
        }
    }
})

export const {addFavorite, removeFavorite} = FavoritesSlice.actions
export default FavoritesSlice.reducer