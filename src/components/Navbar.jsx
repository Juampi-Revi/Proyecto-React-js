import '../stylesheet/Navbar.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

function Navbar (){
    return (
        <header>
            <Link to = '/'>
                <img className='logo-header'src = {require('../assets/logo-ml.png')} alt= 'logo mercado fake' />
            </Link>
            <div className='herramientas-header'>
                <div className='contenedor-input'>
                    <input className='buscador-header' type="text" placeholder= 'Buscar producto, marcas y más...'></input>
                    <button className='boton-buscador-header'type='submit'>
                        <img className = 'boton-buscador'src={require('../assets/search-icon.png')} alt="icono de busqueda" />
                    </button>
                </div>
                <ul className='nav-header'>
                    <li className='nav-header-item'>
                        <Link to = {'/'} className='nav-header-item' >
                            Productos
                        </Link>
                    </li>
                    <li className='nav-header-item'>
                        <Link to = {'category/Celulares'} className='nav-header-item'>
                            Celulares
                        </Link>
                    </li>
                    <li className='nav-header-item' >
                        <Link to = {'category/Electrodomesticos'} className='nav-header-item' >
                            Electrodomesticos
                        </Link>
                    </li>
                    <li className='nav-header-item'>
                        <Link to = {'category/Notebooks'} className='nav-header-item' >
                            Notebooks
                        </Link>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </header>
    )
};

export default Navbar;