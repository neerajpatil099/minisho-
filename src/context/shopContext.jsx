import React,{createContext, useState} from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null)

 const getDefaultCart = () =>{
let cart = {};
for(let i=1; i<= PRODUCTS.length +1  ;i++ ){
    cart[i] = 0
}
return cart;
}


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    
    const addToCart = (itemId) =>{
         setCartItems((cartItems)=>({...cartItems,[itemId]:cartItems[itemId] + 1}));
    }

    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}));
   }

    const getTotalCartAmount = () =>{
      let totalAmount = 0;
      for (const item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = PRODUCTS.find((product)=> product.id === Number(item) )
          totalAmount += cartItems[item] * itemInfo.price
        }
      }
      return totalAmount
    }

    const customCount = (value,itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]: value}));
  }
     
    const contextVlaue = {cartItems,addToCart,removeFromCart,customCount, getTotalCartAmount}
    return (
    <ShopContext.Provider value={contextVlaue}>
        {props.children}
    </ShopContext.Provider>
  )
};
