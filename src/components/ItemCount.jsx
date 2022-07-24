import '../stylesheet/ItemCount.css';
import {useState} from 'react';

function ItemCount ({stock, onAdd }){
const [cantidad, setCantidad] = useState(0);
const sumarCantidad = () => {
    if(cantidad < stock){
        setCantidad(cantidad + 1)
    }
}
const restarCantidad = () => {
    if(cantidad > 0 ){
        setCantidad(cantidad - 1)
    }
}
const escribirCantidad = (e) => {
    const { value } = e.target;
    if (value <= stock) {
        setCantidad(isNaN(value) ? 0 : parseInt(value));
    }
};
    return(
    <div className= 'item-count-container'>
        <div className= 'item-count-container-input'>
            <input className='item-count-input'type="number" placeholder="" value = { cantidad } onChange={(e) => escribirCantidad(e)}/>
            <button className='item-count-button-input'type="button" onClick={sumarCantidad}> + </button>
            <button className='item-count-button-input'type="button" onClick={restarCantidad}> - </button>
        </div>
        <div className= 'item-count-container-button'>
            <button className='item-count-button' type= 'button' disabled={cantidad === "" || cantidad === 0} onClick={()=> onAdd(cantidad)} > Agregar al carrito</button>
        </div>
    </div>
    )
};

export default ItemCount;