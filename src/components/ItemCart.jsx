import '../stylesheet/ItemCart.css';

function ItemCart ({data}) {
    const {title, category,pictureUrl,price, stock, compra} = data;
    return(
        <>
        <div className='contenedor-item-cart'>
            <img className='img-item-cart' src= { pictureUrl } alt= { title } />
            <h2  className='title-item-cart'> { title } </h2>
            <p className='category-item-cart'> { category } </p>
            <div className= 'contenedor-contador-item-cart'>
                <div className= 'contenedor-contador-cart'>
                    <button className='item-cart-button-input'type="button" > - </button>
                    <input className='input-item-cart'type="number" placeholder= { compra } />
                    <button className='item-cart-button-input'type="button" > + </button>
                </div>
                <p className= 'stock-disponible-cart'>Disponibles: { stock - compra }</p>
            </div>
            <h1 className='precio-unidad'> $ { price * compra } </h1>
        </div>
        </>
    )
};

export default ItemCart;