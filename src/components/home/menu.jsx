import './styles/menustyles.css';

function Menu(){
return(
    <>
    <header className="header">
        <h1 className="titulo">Mi tienda e-commerce</h1>
        <nav className="navbar">
            <ul className="menu">
                <li className="nav--item"><a href="index.js" className="link">Inicio</a></li>
                <li className="nav--item"><a href="index.js" className="link">Nosotros</a></li>
                <li className="nav--item"><a href="index.js" className="link">Tienda</a></li>
                <li className="nav--item"><a href="index.js" className="link">Contacto</a></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Menu ;