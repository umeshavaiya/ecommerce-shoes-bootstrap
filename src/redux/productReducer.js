import * as types from '../redux/actionType'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case types.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case types.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case types.PRODUCT_LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productDetailsReducer = (
    state = { product: { reviews: [] } },
    action
) => {
    switch (action.type) {
        case types.PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case types.PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case types.PRODUCT_DETAILS_FAILS:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
