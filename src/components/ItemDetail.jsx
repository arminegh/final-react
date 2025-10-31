import { useContext } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/cartContext"
import Card from 'react-bootstrap/Card';
import './item.css'

export const ItemDetail = ({ product }) => {
	const { addItem } = useContext(CartContext)

	const onAdd = quantity => addItem(product, quantity)

		

	return (
		<>
		<Card style={{ width: '30rem' }} >
      		<Card.Img class="img-thumbnail" variant="top" src={product.imageId}/>
      		<Card.Body>
        	<Card.Title>{product.tittle}</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">$ {product.price}</Card.Subtitle>
        	<Card.Text>{product.description}</Card.Text>
       		<Card.Subtitle className="mb-2 text-muted">Cantidad a comprar: </Card.Subtitle>
			<ItemCount stock={product.stock} onAdd={onAdd} />
      		</Card.Body>
    	</Card>
		</>
		
	)
}




/* dentro del <return>*/

/*<div>
			<h1>{product.title}</h1>
			<img
				src={product.imageId}
				height={300}
				alt={product.title}
			/>
			<p>$ {product.price}</p>
			<ItemCount stock={product.stock} onAdd={onAdd} />
		</div>
*/

