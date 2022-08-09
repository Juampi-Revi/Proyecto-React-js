import '../stylesheet/ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import Spinner from './Spinner';
import {getFirestore, doc, getDoc} from "firebase/firestore";


function ItemDetailContainer (){
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemDoc = doc(db, "productos", id);
        getDoc(itemDoc).then((snapshot) => {
            setProducto({ ...snapshot.data(), id: snapshot.id });
            setLoading(false);
        });
    }, [id]);
    
    return loading ? <Spinner/> :
        <div className='product-detail-container'>
            <ItemDetail data = { producto }/>
        </div>
};

export default  ItemDetailContainer;