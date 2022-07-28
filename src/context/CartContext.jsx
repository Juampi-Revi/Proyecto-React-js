import {createContext, useState} from 'react';

export const CartContext = createContext();


const Provider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [newItem, setNewItem] = useState();
    const isInCart = (setNewItem) => {
        return carrito.find(e=>{return e.id === setNewItem.id ? true : false})
    };
    const clear = () => {setCarrito([])};
    const addToCart = (item) => {
        let existe = isInCart();
        if (existe > -1){
            carrito[item.id].compra += item.compra;
            setCarrito(carrito);
        } else {
            setCarrito((prevState)=> [...prevState, item]);
        }
    };
    const removeItem = (ItemId) => {
        carrito.splice(isInCart(ItemId), 1);
        setCarrito(carrito);
    };
    return (
        <CartContext.Provider value={{ carrito, setCarrito, newItem, setNewItem, clear, addToCart, removeItem}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default Provider;