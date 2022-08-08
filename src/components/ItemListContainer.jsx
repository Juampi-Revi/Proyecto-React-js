import '../stylesheet/ItemListContainer.css';
import {useState, useEffect} from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import Spinner from './Spinner';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

function ItemListContainer (){
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const itemsFilter = id ? query(itemsCollection, where('category', '==', id)) : itemsCollection;
            getDocs(itemsFilter).then((snapshot)=>{
                const data = snapshot.docs.map(doc=>({id:doc.id, ...doc.data()}));
                setProducto(data);
                setLoading(false);
            });
    }, [id])
    if (loading) return <Spinner/>
    return (
        <div className='contenedor-items'>
            <ItemList data = { producto } />
        </div>
    )
}

export default ItemListContainer;