import {createContext, useState} from 'react';

export const CartContext = createContext();


const Provider = (props) => {
    const [carrito, setCarrito] = useState([]);
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
    const vaciarCarrito = () => setCarrito ([]);
    const existeEnElCarrito = (id) => carrito.find(e => e.id === id) ? true : false;
    const eliminarDelCarrito = (id) => setCarrito(carrito.filter(e => e.id !== id));
    
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, existeEnElCarrito, eliminarDelCarrito }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default Provider;