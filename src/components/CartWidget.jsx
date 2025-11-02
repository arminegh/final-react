import { useContext } from "react"
import { CartContext } from "../context/cartContext"
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

