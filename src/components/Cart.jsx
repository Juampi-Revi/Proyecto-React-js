import '../stylesheet/Cart.css';
import ItemCart from './ItemCart';
import {useContext, useState, useEffect} from 'react';
import {CartContext} from '../context/CartContext'; 
import {Link} from 'react-router-dom';

function Cart () {
    const {carrito, vaciarCarrito, setOrder} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const inputs = document.querySelectorAll('.input-carrito');
    const data = Array.from(inputs).map((input, index)=> input.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        setOrder( {nombre: data[0], mail: data[1], telefono: data[3]}, totalPrice);
    }
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
                <hr />
                {carrito.length >=1 ? 
                    <div className='contenedor-precio-total-carrito'>
                        <h2 className='precio-total-carrito'>Precio total </h2>
                        <p className='precio-total-carrito-numeros'>$ {totalPrice}</p>
                    </div> : <h2> </h2>}
                <hr />
                {carrito.length >= 1 ? <div >
                    <form className='contenedor-form-carrito' onSubmit={handleSubmit}>
                        <h2>Para completar su compra, deje aqui sus datos</h2>
                        <input className='input-carrito' type="text" placeholder="Nombre y Apellido" required/>
                        <input className='input-carrito' type="email" placeholder="Correo electronico" required/>
                        <input className='input-carrito' type="email" placeholder="Repite el correo electronico" required/>
                        <input className='input-carrito' type="tel" placeholder="Numero telefonico" required/>
                    <div className='contenedor-boton-carrito'>
                        <button className='btn-carrito-vaciar'type = 'button' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                        <button type='submit' className='btn-carrito-terminar' disabled={data[1] !== data[2]}>Terminar Compra</button>
                    </div>
                    </form>
                </div> : <div></div> }
                
            </div>
        </div>
        
    )
};

export default Cart;