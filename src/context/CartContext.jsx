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
    const sumarCantidad = (item) => {
        let nuevoCarrito;
        let producto = carrito.find (e=> e.id === item.id);
        if (producto.compra < producto.stock) {
            producto.compra++;
            nuevoCarrito = [...carrito];
        } else {
            alert('No puede seguir comprando, supera nuestro stock')
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
        <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, existeEnElCarrito, eliminarDelCarrito, sumarCantidad, restarCantidad }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default Provider;