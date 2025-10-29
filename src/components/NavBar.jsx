import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import { CartWidget } from './CartWidget'


//import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {
	const [itemsMenu, setItemsMenu] = useState([])

	useEffect(() => {
		const db = getFirestore()

		const refCollection = collection(db, "items")

		getDocs(refCollection).then(snapshot => {
			if (snapshot.size === 0) console.log("no results")
			else {
				const categories = snapshot.docs.map(
					item => item.data().categoryId
				)
				const uniqueCategories = new Set(categories)
				setItemsMenu([...uniqueCategories].sort())
			}
		})
	}, [])



  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
     
      <Container>
        <Navbar.Brand href={`/Expassio`}>Expassio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
		   
		    <Nav.Link  href={`/`}>Inicio</Nav.Link>



            {itemsMenu?.map(item => (
						<NavLink key={item} to={`/category/${item}`}>
							{item.toUpperCase()}
						</NavLink>
					))}

          <CartWidget />


            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

