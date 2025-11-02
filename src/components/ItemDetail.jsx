import { useContext } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/cartContext"
import Card from 'react-bootstrap/Card';
import './item.css'

export const ItemDetail = ({ product }) => {
	const { addItem, productosAgregados } = useContext(CartContext);

	const onAdd = quantity => addItem(product, quantity)
	
	console.log("Producto recibido:", product);


	return (
		<>
		<Card style={{ width: '30rem' }} >
      		<Card.Img class="img-thumbnail" variant="top" src={product.imageId}/>
      		<Card.Body>
        	<Card.Title>{product.title}</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">$ {product.price}</Card.Subtitle>
        	<Card.Text>{product.description}</Card.Text>
       		<Card.Subtitle className="mb-2 text-muted">Cantidad a comprar: </Card.Subtitle>
			<ItemCount stock={product.stock} onAdd={onAdd} />
      		</Card.Body>
    	</Card>
		</>
		
	)
}



