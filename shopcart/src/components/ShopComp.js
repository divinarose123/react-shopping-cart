import React, { useEffect } from 'react'
import { useShop, useCart } from '../hooks'
import '../styles/ShopComp.css';

export default () => {
    const { products, getAllItem, } = useShop()
    const { cart, addAnItem } = useCart()
    useEffect(() => {
        getAllItem()


    }, [])
    return (
        <div className="shop-child">


            {products.map(product => {
                return <div onClick={() => addAnItem(product)}
                    key={product.id}>
                    <img src={"http://placehold.it/250x250"} />
                    {product.title}
                    <p> $ {product.price}</p>
                    <p>or {product.installments}</p>
                    <button>Add to cart</button>
                </div>
            })}


        </div>
    )
}