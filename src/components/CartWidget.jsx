import carrito from '../assets/carrito.svg'
let conteo = 0


export const CartWidget = () => (

    <div className="areaCarrito" >
        <img className = "imagenBarra" src={carrito} alt="tu carrito de compras" />
        <span className="conteo">{conteo}</span>
    </div>

)


