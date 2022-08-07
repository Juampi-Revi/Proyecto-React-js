import '../stylesheet/ItemDetail.css';
import ItemCount from './ItemCount';
import {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'


function ItemDetail ({ data }){
    const [compra, setCompra] = useState(0)
    const {  agregarAlCarrito} = useContext(CartContext);
    const { title, price, stock, pictureUrl, estado, categoria, description } = data;
    const onAdd = (compra) => {
        setCompra(compra);
        agregarAlCarrito(data, compra);
        //data.compra = compra;
        //setCarrito((prevState) => [...prevState, data])
    }
    
    return(
        <div className='item-detail-container'>
            <section className='item-detail-container-img'>
                <img  className= 'img-item-detail'src = { pictureUrl } alt={ title }/>
            </section>
            <section className='item-detail-container-info'>
                <p className='item-detail-estado'> { estado } | Categoría: { categoria }</p>
                <h1 className='item-detail-titulo'>{ title }</h1>
                <h2 className='item-detail-precio'>$ { price }</h2>
                <p className='item-detail-descripcion'>{ description }</p>
                <p className='item-detail-stock'> Disponibles: <strong>{ stock } </strong></p>
                {compra === 0 ? <ItemCount stock= {stock} onAdd = {onAdd}/> : 
                    <Link className='item-detail-button' to = '/cart'>
                        <button className='item-detail-buttons'>Terminar compra</button>
                    </Link>}
            </section>
        </div>
    )
};

export default ItemDetail;
