import React, { createContext } from 'react';

const CartContextStructer = {
    cart: [],
    totalAmount: 0
};

const CartContext = createContext(CartContextStructer);

export default function useCartContext() {
    return React.useContext(CartContext);
}