import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import { PRODUCTS } from '../../products'
import { CartItem } from './cartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      <div>
        <h1>your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map(product => {
          if(cartItems[product.id] > 0){
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? (<div className="checkout">
        <p>subtotal : {totalAmount}</p>
        <div className="btns">
        <Link to='/'><button>continue shopping</button></Link>
        <button>checkout</button>
        </div>
      </div>) : (
        <h2>your cart is empty</h2>
      )}
      
      </div>
  )
}
