import { useState } from "react"

export const useCart = () => {
	const [productosAgregados, setProductosAgregados] = useState([])

	const addItem = (producto, cantidad) => {
		const { stock, ...rest } = producto
		const existe = productosAgregados.some(producto => producto.id === rest.id)
		if (!existe)
			setProductosAgregados(prev => [
				...prev,
				{ ...rest, cantidad },
			])
		else {
			const actualizarProductos = productosAgregados.map(
				producto => {
					if (producto.id === rest.id)
						return {
							...producto,
							quantity: producto.cantidad + cantidad,
						}
					else return producto
				}
			)
			setProductosAgregados(actualizarProductos)
		}
	}

	const deleteItem = id => {
		const otrosProductos = productosAgregados.filter(
			producto => producto.id !== id
		)
		setProductosAgregados(otrosProductos)
	}

	const clear = () => setProductosAgregados([])

	return {productosAgregados, addItem, clear,deleteItem,
	}
}