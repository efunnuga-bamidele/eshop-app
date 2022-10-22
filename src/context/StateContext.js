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
        default:
            return state
    }
}

export const StateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer)

    return (
        <StateContext.Provider value={{ ...state, dispatch }}>
            { children }
        </StateContext.Provider>
    )
}

// export const getBasketTotal = (basket) => {
//     return (basket?.reduce((amount, item) => item.price + amount, 0))
// }
