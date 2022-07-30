import '../stylesheet/CartWidget.css';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';

function CartWidget (){
    const {carrito} = useContext(CartContext);
    return(
        <div className="CartWidget-container">
                <img src={require('../assets/cart-icon.png')} alt=" icono carrito" />
            <span className='contador-uidades-carrito'>{carrito.length}</span>
        </div>
    )
};

export default CartWidget;