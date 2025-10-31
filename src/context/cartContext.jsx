import { createContext, useState } from "react"

import { useCart } from "../hooks/useCart"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
	const [productosAgregados, setProductosAgregados] = useState([])

	const addItem = (producto, quantity) => {
		const { stock, ...rest } = producto
		const alreadyExists = productosAgregados.some (producto => producto.id === rest.id)
		if (!alreadyExists)
			setProductosAgregados(prev => [...prev, { ...rest, quantity },])
		else {
			const actualizarProductos = productosAgregados.map (producto => {
				if (producto.id === rest.id)
					return {
						...producto,quantity
				}
			})
		}
	}
	//const deleteItem = id => {...}

	const deleteItem = (id) => {
        setProductosAgregados((prev) =>
            prev.filter((producto) => producto.id !== id)
        );
    };

	const clear = () => setProductosAgregados([])


	const cart = useCart()


	const value = { productosAgregados, addItem, deleteItem, clear };
    

	
	return (
		<CartContext.Provider value={cart}>
			{children}
		</CartContext.Provider>
	)


	
}