import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {Store} from '../../../store';
import './cartStyles.css'

const Cart = () => {
    const [data, setData] = useContext(Store);

    const eliminar = (id) => {

        setData(
            data.filter(item => item.id != id)
        )

    }

    return(
        <>
            <div className="volverdiv">
                <Link to="/" className="volver"><p>Volver</p></Link>
            </div>
            <div className="CartContainer">
                {
                    data.map(item => 
                    <div className="Cart__product">
                        <p className="parrafo__nombre">{item.name}</p>
                        <p className="parrafo__cantidad">Cantidad: {item.cantidadItem}</p>
                        <p className="parrafo__precio">Precio: ${item.price * item.cantidadItem}.00</p>
                        <button className="Boton__eliminar" onClick={()=>eliminar(item.id)}>Eliminar Producto</button>
                    </div>)
                }
            </div>
            
        </>
    )
}

export default Cart;