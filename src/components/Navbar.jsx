import { ShoppingCart } from 'phosphor-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

export const Navbar = () => {
  const {getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  return (
    <div className='navbar'>
      <h1>MINISHOP</h1>
        <div className="links">
        <Link to='/'>shop</Link>
        <Link to='/cart' >
           {totalAmount > 0 ? (<div className='shoppingCart'></div>): ( <div></div>)}
            <ShoppingCart/>
        </Link>
        </div>
    </div>
  )
}
