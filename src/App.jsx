import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import './App.css'
import { Cart } from './pages/cart/cart'
import { Shop } from './pages/shop/Shop'
import { ShopContextProvider } from './context/shopContext'


const App = () => {
  return (
    <div className='App' >
      <ShopContextProvider>
       <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/> } />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
       </Router>
       </ShopContextProvider>
      </div>
  )
}

export default App;