import { useContext } from "react"
import { Link } from "react-router-dom"

import { CartContext } from "../context/cartContext"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import carrito from "../assets/carrito.svg"



const styles = {
	span: {
		paddingLeft: 10,
	},
	img: {
		height: 30,
	},
}

export const CartWidget = () => {
	const { productosAgregados }  = useContext(CartContext);

	

	const totalQuantity = () =>
		productosAgregados.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity,
			0
		)

	return (
        
        <div className="areaCarrito" >
            <img className = "imagenBarra" src={carrito} alt="tu carrito de compras" />
            <span className="conteo">{totalQuantity()}</span>
        </div>
    )
}

