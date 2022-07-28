import '../stylesheet/CartWidget.css';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';

function CartWidget (){
    const {carrito} = useContext(CartContext);
    return(
        <div>
            <a href="#">
                <img src={require('../assets/cart-icon.png')} alt=" icono carrito" />
                <span>{carrito.length}</span>
            </a>
        </div>
    )
};

export default CartWidget;