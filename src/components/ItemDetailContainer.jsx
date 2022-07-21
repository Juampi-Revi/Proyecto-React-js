import '../stylesheet/ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import data from '../utils/data.json';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import Spinner from './Spinner';

function ItemDetailContainer (){
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useParams();
    useEffect(() => {
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
);
    return loading ? <Spinner/> :
        <div className='product-detail-container'>
            <ItemDetail data = { producto }/>
        </div>
};

export default  ItemDetailContainer;