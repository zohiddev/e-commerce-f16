
const FavoritesReducer = (state, {type, payload}) => {
    switch (type) {
        case 'addFavorite':
            state.items = [...state.items, {...payload, isFavorite: true}]
            return state
        case 'removeFavorite':
            state.items = state.items.filter(item => item.id !== payload)
            return state

        default:
            return state
    }
}

export default FavoritesReducer

export const addFavoriteAC = (product) => ({type: 'addFavorite', payload: product})
export const removeFavoriteAC = (id) => ({type: 'removeFavorite', payload: id})

