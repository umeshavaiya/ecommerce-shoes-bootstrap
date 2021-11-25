import * as types from './actionType';
import { auth, googleAuthProvider } from '../firebase'
import axios from 'axios';
import { Types } from 'mongoose';

// For user register
const registerStart = () => ({
    type: types.REGISTER_START
});
const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
});
const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error
});

// For user login
const loginStart = () => ({
    type: types.LOGIN_START
});
const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});
const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error
});

// For Google LogIn
const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START
});
const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});
const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error
});

// Fot user Logout
const forLogOut = (user) => ({
    type: types.USER_LOGOUT,
    payload: null
});

export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName,
                });
                dispatch(registerSuccess(user));
            }).catch((error) => dispatch(registerFail(error.message)))
    }
}

export const logoutUser = () => {
    return function (dispatch) {
        auth.signOut()
            .then(() => {
                dispatch(forLogOut())
            })
    }
}
export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user));
                localStorage.setItem('currentUser', JSON.stringify(user))
            }).catch(() => dispatch(loginFail(alert('Email Address or Password Incorrect'))))
    }
}

export const googleSignInInitiate = () => {
    return function (dispatch) {
        dispatch(googleSignInStart())
        auth
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(googleSignInSuccess(user));
            }).catch((error) => dispatch(googleSignInFail(error.message)))
    }
}

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: types.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.PRODUCT_LIST_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type: types.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.PRODUCT_DETAILS_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
        type: types.CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItem));
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: types.CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}


export const logout = () => dispatch => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: types.USER_NEW_LOGOUT
    })
}

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: types.USER_LOGIN_REQUEST })
        const config = { headers: { 'Contnet-Type': 'application/json' } }
        const { data } = await axios.post('/api/users/login', { email, password }, config)
        dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: types.USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
export const register = (name, email, password) => async dispatch => {
    try {
        dispatch({ type: types.USER_REGISTER_REQUEST })
        const config = { headers: { 'Contnet-Type': 'application/json' } }
        const { data } = await axios.post(
            '/api/users',
            { name, email, password },
            config
        );
        dispatch({
            type: types.USER_REGISTER_SUCCESS,
            payload: data
        });
        // Auto Login After Register
        dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: data,
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: types.USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: types.USER_DETAILS_REQUEST
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Contnet-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/users/${id}`, config)
        dispatch({
            type: types.USER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })

    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: types.USER_UPDATE_PROFILE_SUCCESS,
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Contnet-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put('api/users/profile', user, config)
        dispatch({ type: types.USER_UPDATE_PROFILE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: types.USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }

}