import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'


const initialState = {
    cart: [],
    totalAmount: 0
};

const Store = ({children}) => {
    const [state, store] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, store]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;