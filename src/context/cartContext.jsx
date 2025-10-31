import { createContext, useState } from "react"

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [productosAgregados, setProductosAgregados] = useState([])

	const addItem = (producto, quantity) => {
		const { stock, ...rest } = producto
		const alreadyExists = productosAgregados.some (producto => producto.id === rest.id)
		if (!alreadyExists)
			setProductosAgregados(prev => [...prev, { ...rest, quantity },])
		else {
			const actualizarProductos = productosAgregados.map (producto => {
				if (producto.id === rest.id){
					return {...producto, quantity: producto.quantity + quantity}
				}
				return producto
			})
			setProductosAgregados(actualizarProductos)


		}
	}
	//const deleteItem = id => {...}

	const deleteItem = (id) => {
        setProductosAgregados((prev) =>
            prev.filter((producto) => producto.id !== id)
        );
    };

	const clear = () => setProductosAgregados([])

    

	
	return (
		<CartContext.Provider value={{ productosAgregados, addItem, deleteItem, clear }}>
			{children}
		</CartContext.Provider>
	)


	
}