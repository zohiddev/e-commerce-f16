import { productData } from "../data/productsData";
import CartReducer from "./reducers/cartReducer";
import FavoritesReducer from "./reducers/favoritesReducer";

const store = {
    _state: {
        products: {
            items: productData
        },
        cart: {
            items: []
        },
        favorites: {
            items: []
        }
    },

    render: () =>{
        console.log('hello')
    },

    getState(){
        return store._state
    },

    dispatch(action){
        store._state.cart = 
        CartReducer(store._state.cart, action)
        store._state.favorites = 
        FavoritesReducer(store._state.favorites, action)
        store.render()
    },

    subscribe(observer){
        store.render = observer
    },


}

export default store