import { combineReducers } from "redux";
import userReducer from "./reducer";
import { productListReducer, productDetailsReducer } from "./productReducer";

const rootReducer = combineReducers({
    user: userReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer
})

export default rootReducer;