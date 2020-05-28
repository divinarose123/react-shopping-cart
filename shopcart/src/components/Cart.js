import React, { useEffect } from 'react'
import { useShop, useCart } from '../hooks'


export default () => {
    const { products, getAllItem,} = useShop()
    const { cart, remove } = useCart()
    useEffect(() => {
        getAllItem()


    }, [])
    return (
        <div>
            <ul>
                {cart.map(product => {
                    return (
                        <li>
                            <img src={"http://placehold.it/250x250"} />
                            {product.title} {product.quantity}
                        <span onClick={() => remove(product.id)}>X</span>
                        </li>
    
                )
                })}
            </ul>
            
        </div>
    )
}