import React,{useContext} from 'react';
import { ShopContext } from '../../context/shopContext';

export const CartItem = (props) => {
    
    const {cartItems,customCount,addToCart,removeFromCart} = useContext(ShopContext)
    const {id,productName,price,productImage} = props.data

    const cartItemsCount = cartItems[id]

  return (
    <div className='cartItem'>
        <img src={productImage} />
        <div className="description">
            <p>{productName}</p>
            <p><b>{price}</b></p>
            <div className="countHandler">
            <button onClick={()=>removeFromCart(id)} >-</button>
            <input type="number" onChange={(e) => customCount((e.target.value),id)} value={cartItems[id]} />
            <button onClick={()=>addToCart(id)} >+</button>
            </div>
        </div>
    </div>
  )
}
