import { combineReducers } from "redux";
import userReducer from "./reducer";
import { productListReducer, productDetailsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer"
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./userReducer";


const rootReducer = combineReducers({
    user: userReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    
})

export default rootReducer;