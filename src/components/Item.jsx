import '../stylesheet/Item.css';
import {Link} from 'react-router-dom';

function Item ({img, title, price, estado,id}){
    return (
        <div className='card-product-container'>
            <section className='card-product-img'> 
                <img className='img-card-product' src= { img } alt= { title } />
            </section>
            <section className='info-card-product'>
                <h2 className='title-card-product'>{ title }</h2>
                <h3 className='price-card-product'>$ { price }</h3>
                <p className='estado-card-product'>{ estado }</p>
            </section>
            <Link to={`item/${id}`} className='button-card-product-container'>
                <button className='button-card-product'>
                    Mas detalles
                </button>
            </Link>
        </div>
    )
};

export default Item;