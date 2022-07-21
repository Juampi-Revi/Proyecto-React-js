import '../stylesheet/ItemDetail.css';

function ItemDetail ({ data }){
    const { title, price, stock, pictureUrl, estado, categoria, description } = data;
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
                <button className='item-detail-button'>Comprar ahora</button>
            </section>
        </div>
    )
};

export default ItemDetail;