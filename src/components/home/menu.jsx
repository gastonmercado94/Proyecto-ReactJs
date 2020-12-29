import CartWidget from './CartWidget';
import './styles/menustyles.css';
import {Link} from 'react-router-dom';

function Menu(){
return(
    <>
    <header className="header">
        <Link to="/" className="linktitulo"><h1 className="titulo">Winery</h1></Link>
        <nav className="navbar">
            <ul className="menu">
                <li className="nav--item"><a href="" className="link">Inicio</a></li>
                <li className="nav--item"><a href="" className="link">Tintos</a></li>
                <li className="nav--item"><a href="" className="link">Blancos</a></li>
                <li className="nav--item"><a href="" className="link">Rosados</a></li>
                <li className="nav--item"><a href="" className="link"><CartWidget/></a></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Menu ;