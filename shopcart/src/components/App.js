import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Example from './Example'
import ShopComp from './ShopComp'
import Cart from './Cart'
export default () => <div>
  <Provider store={store}>
    <div className="parent-container">

      <div className="shop-container">
        <ShopComp />

        <div className="cart-container">
          <Cart />
        </div>
      </div>
    </div>
  </Provider>
</div>
