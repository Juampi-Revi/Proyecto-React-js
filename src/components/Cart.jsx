import '../stylesheet/Cart.css';
import ItemCart from './ItemCart';
import {useContext, useState, useEffect} from 'react';
import {CartContext} from '../context/CartContext'; 
import {Link} from 'react-router-dom';

function Cart () {
    const {carrito, vaciarCarrito} = useContext(CartContext);
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
                    {carrito.length === 0 ?
                    <div className='contenedor-carrito-vacio'>
                        <h1 className='titulo-condicional'>El carrito esta vacío</h1>
                        <p className='parrafo-condicional'>¿No sabés qué comprar? ¡Miles de productos te esperan!</p> 
                        <Link className='boton-carrito-vacio' to='/'>Iniciar compra</Link>
                    </div> 
                    
                    : carrito.map((e)=> <ItemCart data={e}/>)}
                {carrito.length >=1 ? <div>
                    <h2>Precio total $ {totalPrice}</h2>
                </div> : <h2> </h2>}
                
                <hr />
                {carrito.length >= 1 ? <div className='contenedor-boton-carrito'>
                    <button className='btn-carrito-vaciar'type = 'button' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    <button type='button' className='btn-carrito-terminar'>Terminar Compra</button>
                </div> : <div></div> }
                
            </div>
        </div>
        
    )
};

export default Cart;