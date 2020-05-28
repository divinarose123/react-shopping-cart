// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
// 2. action definitions
const ADD_ITEM = "cart/ADD_ITEM"
const REMOVE_ITEM = "cart/REMOVE_ITEM"


// 3. initial state
const cartState = {
    cart: []

}

// 4. reducer
export default (state = cartState, action) => {
    switch (action.type) {
        case ADD_ITEM:

            const productExist = state.cart.find(p => p.id === action.payload.id)
            const productToAdd = action.payload
        // if(productExist) {
        
        // }
            return { ...state, cart: [...state.cart, productToAdd] }
        case REMOVE_ITEM:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }
        default:
            return state
    }
}

// 5. action creators

function addItem(product) {
    return {
        type: ADD_ITEM,
        payload: product

    }
}

function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}



// 6. custom hook
export function useCart() {
    const dispatch = useDispatch()
    const cart = useSelector(appState => appState.cartState.cart)

    const addAnItem = (product) => dispatch(addItem(product))
    const remove = (id) => dispatch(removeItem(id))



    return { cart, addAnItem, remove }
}