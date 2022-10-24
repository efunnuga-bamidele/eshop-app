import { createContext, useReducer } from "react";

export const initialState = {
    basket: [],
};

export const StateContext = createContext()

export const stateReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return { ...state, 
                    basket: [...state.basket, action.payload] }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.payload
            )
            let newBasket = [...state.basket]

            if (index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.warn(`Can't remove product(id: ${action.payload}) as its not in the basket!`)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}

export const StateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, {
        user:null,
        authIsReady: false
    })

    return (
        <StateContext.Provider value={{ ...state, dispatch }}>
            { children }
        </StateContext.Provider>
    )
}

// export const getBasketTotal = (basket) => {
//     return (basket?.reduce((amount, item) => item.price + amount, 0))
// }
