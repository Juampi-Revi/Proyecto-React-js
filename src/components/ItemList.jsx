import '../stylesheet/ItemList.css';
import Item from './Item';

function ItemList ({ data }){
    return(
        data.map(
            el => <Item img = {el.pictureUrl} title = {el.title} price = {el.price} estado = {el.estado} id= {el.id}/>
        )
    )
};
export default ItemList;