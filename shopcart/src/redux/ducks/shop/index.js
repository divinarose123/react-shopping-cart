// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
// 2. action definitions
const GET_ITEM = "product/GET_ITEM"


// 3. initial state
const shoppingState = {
  products: []
  
}

// 4. reducer
export default (state = shoppingState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

// 5. action creators


function getItem() {
  return dispatch => {
    axios.get('/products').then(resp => {
        dispatch({
            type:GET_ITEM,
            payload: resp.data
        })

    })
  
}
}



// 6. custom hook
export function useShop() {
  const dispatch = useDispatch()
  const products = useSelector(appState => appState.shopState.products)

  const getAllItem = () => dispatch(getItem())

 

  return { products, getAllItem }
}