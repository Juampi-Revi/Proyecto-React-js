import {Link} from 'react-router-dom';
import '../stylesheet/Error404.css';

function Error404 (){
    return(
        <div className='error-container'>
            <img className = 'error-img'src="https://www.lego.com/_next/static/images/emmet-346028b3b34aaad64f69c1158744e518.png" alt="" />
            <div className='contenedor-titulo-error'>
                <h1 className='title-error'>404</h1>
                <h2 className='subtitle-error'>¡No podemos encontrar la página! Pero no tienes por qué preocuparte. ¡Todo sigue siendo FABULOSO!</h2>
                <Link className='button-error-container' to='/'>
                    <button className='button-error'>
                        Iniciar compra
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Error404;