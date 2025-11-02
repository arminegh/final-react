import './App.css'
import { NavBar } from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//no olvides aregar esta vista Arminé
//import { Error404 } from "./views/Error404"
import { useState } from 'react'
import { useEffect } from 'react'
import Expassio from './components/Expassio'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cartContext'


function App() {
  
return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Expassio" element={<Expassio />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )


}

export default App

/*

				<Route path="*" element={<Error404 />} /> 
				*/
