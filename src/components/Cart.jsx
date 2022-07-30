import '../stylesheet/Cart.css';
import ItemCart from './ItemCart';
import {useContext, useState, useEffect} from 'react';
import {CartContext} from '../context/CartContext'; 

function Cart () {
    const {carrito} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let total = 0;
        carrito.forEach((item) => {
            total += parseInt(item.price * item.compra);
        });
        setTotalPrice(total);
    }, [carrito]);
    return(
        <div className= 'contenedor-general-carrito'>
            <div className='contenedor-carrito'>
                <h1 className='titulo-carrito'>Carrito ({carrito.length})</h1>
                <hr />
                    {carrito.length === 0 ? <h1 className='titulo-condicional'>El carrito esta vacío</h1> : carrito.map((e)=> <ItemCart data={e}/>)}
                <div>
                    <h2>Precio total $ {totalPrice}</h2>
                </div>
                <hr />
                <div className='contenedor-boton-carrito'>
                    <button type='button' className='btn-carrito-terminar'>Terminar Compra</button>
                </div>
            </div>
        </div>
        
    )
};

export default Cart;