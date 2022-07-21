import '../stylesheet/CartWidget.css';

function CartWidget (){
    return(
        <div>
            <a href="#">
                <img src={require('../assets/cart-icon.png')} alt=" icono carrito" />
            </a>
        </div>
    )
};

export default CartWidget;