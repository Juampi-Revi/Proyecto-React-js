import '../stylesheet/ItemListContainer.css';
import {useState, useEffect} from "react";
import data from '../utils/data.json';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import Spinner from './Spinner';

function ItemListContainer (){
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    let promises = new Promise ((resolve, reject) => {
        setTimeout(() => 
            resolve(data),
        2000);
    });
    useEffect(()=>{
        setLoading(true);
        promises.then((res)=>{
            if(id){
                setProducto(res.filter((el)=> el.category === id))
            } else {
                setProducto(res);
            }
        setLoading(false)
        });
    },[id])
    if (loading) return <Spinner/>
    return (
        <div className='contenedor-items'>
            <ItemList data = { producto } />
        </div>
    )
}

export default ItemListContainer;