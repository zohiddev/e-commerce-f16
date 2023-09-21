

const CartReducer = (state, {type, payload }) => {
    switch (type) {
        case 'addToCart':
            const isUsed = state.items.find(item => item.id === payload.id)
            const addedProduct = {
                ...payload,
                qty:  1,
            }
            state.items = Boolean(isUsed) ? state.items.map(item => payload.id === item.id ? ({...item, qty: item.qty + 1}) : item) : [...state.items, addedProduct]
            return state
        
        case 'removeToCart':
            state.items = state.items.filter(item => item.id !== payload)
            return state;
        case 'decreaseItem':
            state.items = state.items.map(item => item.id === payload ? ({...item, qty:  item.qty - 1}) : item)
            return state

        case 'increaseItem':
            state.items = state.items.map(item => item.id === payload ? ({...item, qty: item.qty + 1}) : item)
            return state
        default:
            return state
    }
}

export const addToCartAC  = (product) => ({type: 'addToCart', payload: product})  
export const removeToCartAC = (id) => ({type: 'removeToCart', payload:  id})
export const decreaseItemAC = (id) => ({type: 'decreaseItem', payload:  id})
export const increaseItemAC = (id) => ({type: 'increaseItem', payload:  id})

export default CartReducer