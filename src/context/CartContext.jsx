import {createContext, useState} from 'react';
import {getFirestore, collection, addDoc, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore';
import Swal from 'sweetalert2';
export const CartContext = createContext();

const Provider = (props) => {
    const [carrito, setCarrito] = useState([]);
    //genero una nueva coleccion "orders"
    const setOrder = async  (buyerData, totalPrice) => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        const order = {
            item: carrito,
            buyer: buyerData,
            total: totalPrice,
        };
        //addDoc(orderCollection, order).then((res)=> console.log(res)).catch((error) => console.log(error))
        const batch = writeBatch(db);
        const withoutStock = [];
        const idList = carrito.map((el) => el.id);
        const productosCollection = collection(db, 'productos');
        const docsResponse = await getDocs(
            query(productosCollection, where(documentId(), "in", idList))
        );
        docsResponse.docs.forEach((doc) => {
            const dataDoc = doc.data();
            const prod = carrito.find((prod) => prod.id === doc.id);
                if (dataDoc.stock >= prod.compra) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prod.compra });
                } else {
                    withoutStock.push({ prod });
                }
            });
        if (withoutStock.length === 0) {
            const addResponse = await addDoc(orderCollection, order);
            batch.commit();
            Swal.fire({
                title: `El numero de su compra es: ${addResponse.id}`,
                icon: 'success'
            })
            setCarrito([]);
        } else {
            Swal.fire({
                title: 'La compra no se completó',
                text: "No hay suficientes artículos en stock",
                icon: 'warning',
            })
        };
    };

    const agregarAlCarrito = (item, cantidad) => {
        let nuevoCarrito;
        let producto = carrito.find (e=> e.id === item.id);
        if (producto) {
            producto.compra += cantidad;
            nuevoCarrito = [...carrito];
        } else {
            producto = {...item, compra: cantidad};
            nuevoCarrito = [...carrito, producto];
        }
        setCarrito(nuevoCarrito);
    }
    const sumarCantidad = (item) => {
        let nuevoCarrito;
        let producto = carrito.find (e=> e.id === item.id);
        if (producto.compra < producto.stock) {
            producto.compra++;
            nuevoCarrito = [...carrito];
        } else {
            Swal.fire({
                title: 'No hay suficientes artículos en stock',
                icon: 'warning',
            })
            nuevoCarrito(...carrito)
        }
        setCarrito(nuevoCarrito);
    }
    const restarCantidad = (item) => {
        let nuevoCarrito;
        let producto = carrito.find (e=> e.id === item.id);
        if (producto.compra > 1) {
            producto.compra--;
            nuevoCarrito = [...carrito];
        } else {
            nuevoCarrito = carrito.filter(e => e.id !== item.id)
        }
        setCarrito(nuevoCarrito);
    }
    const vaciarCarrito = () => setCarrito ([]);

    const existeEnElCarrito = (id) => carrito.find(e => e.id === id) ? true : false;

    const eliminarDelCarrito = (id) => setCarrito(carrito.filter(e => e.id !== id));
    
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, existeEnElCarrito, eliminarDelCarrito, sumarCantidad, restarCantidad, setOrder, setCarrito }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default Provider;