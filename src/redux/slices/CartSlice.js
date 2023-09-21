import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}


const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {type, payload}) => {
            const isUsed = state.items.find(item => item.id === payload.id)
            const addedProduct = {
                ...payload,
                qty:  1,
            }
            state.items = Boolean(isUsed) ? state.items.map(item => payload.id === item.id ? ({...item, qty: item.qty + 1}) : item) : [...state.items, addedProduct]
            return state
        },
        removeToCard: (state, {type, payload}) => {
            state.items = state.items.filter(item => item.id !== payload)
            return state;
        },
        decreaseItem: (state, {type, payload}) => {
            state.items = state.items.map(item => item.id === payload ? ({...item, qty:  item.qty - 1}) : item)
            return state
        },
        increaseItem: (state, {type, payload}) =>{
            state.items = state.items.map(item => item.id === payload ? ({...item, qty: item.qty + 1}) : item)
            return state
        }
    }
}) 

export const {addToCart, removeToCard, increaseItem, decreaseItem} = CartSlice.actions
export default CartSlice.reducer