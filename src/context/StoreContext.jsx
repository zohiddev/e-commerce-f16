import { createContext, useContext } from "react";


const StoreContext = createContext({})


const StoreProvider = ({children, value}) => {

    return(
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}
// export const useStore = () => useContext(StoreContext)

export function useStore(){
    return useContext(StoreContext)
}
export default StoreProvider