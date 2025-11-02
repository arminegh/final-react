import { Item } from "./Item"

export const ItemList = ({ items }) =>
	!items.length ? (
		<span>Cargando...</span>
	) : (
		items.map(item => <Item key={item.id} item={item} />)
	)