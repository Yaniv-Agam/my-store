const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...this.state.cart, action.payload],
                totalAmount: this.totalAmount + action.payload.price
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: this.state.cart.splice(this.state.cart.indexOf(action.payload),1),
                totalAmount: this.totalAmount - action.payload.price
            };
        default:
            return state;
    }
};

export default Reducer;