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

		<NavLink className="navbar-brand nav-link" to="/Expassio">Expassio</NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
			<NavLink className="nav-link" to="/">Inicio</NavLink>



            {itemsMenu?.map(item => (
						<NavLink className = 'nav-link' key={item} to={`/category/${item}`} >
							{item}
						</NavLink>
					))}

          	<NavLink className="nav-link" to="/carrito"><CartWidget /></NavLink>



            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

