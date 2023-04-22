import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'

export const Product = (props) => {
    const {addToCart,cartItems} = useContext(ShopContext)
    const {id,productName,price,productImage} = props.data

    const cartItemsCount = cartItems[id]
  return (
    <div className="product">
      <img src={productImage}/>
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>$ {price}</p>
         </div>
         <button className='addToCartBttn' onClick={() => addToCart(id)}>
          add to cart {cartItemsCount>0 && <>({cartItemsCount})</>}
         </button>
    </div>
  )
}
