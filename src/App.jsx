import './App.css'
import { NavBar } from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { Home } from "./views/Home"
//import { ItemListDetail } from "./views/ItemListDetail"
//import { Conocenos } from "./views/Conocenos"
//import { Error404 } from "./views/Error404"
import { useState } from 'react'
import { useEffect } from 'react'
import { getItems } from './main'




function App() {
  
  useEffect(()=> {
    getItems();
  },[])

  return (
    <>
      <BrowserRouter>
			<NavBar />
			<Routes>			
				

			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App

/*
<Route path="/" element={<Home />} />	
				<Route path="/products/:id" element={<ItemListDetail />} />
				<Route path="/category/:id" element={<Home />} />
				<Route path="/conocenos" element={<Conocenos />} />
				<Route path="*" element={<Error404 />} /> 
				*/
				