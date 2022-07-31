import '../stylesheet/ItemCart.css';
import {CartContext} from '../context/CartContext';
import {useContext} from 'react';

function ItemCart ({data}) {
    const {eliminarDelCarrito, sumarCantidad, restarCantidad} = useContext(CartContext)
    const {title, category,pictureUrl,price, stock, compra, id} = data;
    return(
        <>
            <div className='contenedor-item-cart'>
                <img className='img-item-cart' src= { pictureUrl } alt= { title } />
                <h2  className='title-item-cart'> { title } </h2>
                <p className='category-item-cart'> { category } </p>
                <div className= 'contenedor-contador-item-cart'>
                    <div className= 'contenedor-contador-cart'>
                        <button className='item-cart-button-input'type="button" onClick = {() =>restarCantidad(data)}> - </button>
                        <input className='input-item-cart'type="number" placeholder= { compra } disabled/>
                        <button className='item-cart-button-input'type="button" onClick = {() => sumarCantidad(data)}> + </button>
                    </div>
                    <p className= 'stock-disponible-cart'>Disponibles: { stock - compra }</p>
                </div>
                <h1 className='precio-unidad'> $ { price * compra } </h1>
                
            </div>
            <p className= 'eliminar-articulo-carrito' onClick = {() => eliminarDelCarrito(id)}>Eliminar</p>
        </>
    )
};

export default ItemCart;