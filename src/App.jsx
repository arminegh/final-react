import './App.css'
import { NavBar } from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { ItemListDetail } from "./views/ItemListDetail"
//import { Conocenos } from "./views/Conocenos"
//import { Error404 } from "./views/Error404"
import { useState } from 'react'
import { useEffect } from 'react'
import Expassio from './components/Expassio'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'

function App() {
  

  return (
    <>
      <BrowserRouter>
			<NavBar />
			<Routes>			
			<Route path="/Expassio" element={<Expassio />} />	
			<Route path="/" element={<ItemListContainer />} />	
			<Route path="/category/:id" element={<ItemListContainer />} />	
			<Route path="/item/:id" element={<ItemDetailContainer />} />


			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App

/*
	
				
				
				<Route path="/conocenos" element={<Conocenos />} />
				<Route path="*" element={<Error404 />} /> 
				*/
