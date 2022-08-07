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
    /*useEffect(() => {
        setLoading(true);
        let promises = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            },
            2000);
        });
        promises.then(
            (respuesta)=> {
                const item = respuesta.filter((el) => el.id == params.id);
                setProducto(item[0]);
                setLoading(false);
            }
        );
    }, [params.id]
);*/
    return loading ? <Spinner/> :
        <div className='product-detail-container'>
            <ItemDetail data = { producto }/>
        </div>
};

export default  ItemDetailContainer;