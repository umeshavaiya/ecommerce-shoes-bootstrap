import * as types from '../redux/actionType'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case types.CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                }
            }
        case types.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload),

            }
        case types.CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state, shippingAddress: action.payload
            }
        default:
            return state;
    }
}