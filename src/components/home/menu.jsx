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
                <li className="nav--item link"><Link to="/">Inicio</Link></li>
                <li className="nav--item link"><Link to="/vinos">Vinos</Link></li>
                <li className="nav--item link"><Link to="/whiskey">Whiskey</Link></li>
                <li className="nav--item link"><Link to="/gin">Gin</Link></li>
                <li className="nav--item link"><Link to="/cart"><CartWidget/></Link></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Menu ;