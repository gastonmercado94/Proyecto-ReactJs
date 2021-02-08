import {useContext} from 'react';
import {Store} from '../../../store';
import {Link} from 'react-router-dom';
import './cartStyles.css'

const Cart = () => {
    const [data, setData] = useContext(Store);

    const eliminar = (id) => {

        setData(
            data.filter(item => item.id != id)
        )

    }

    const cantidadTotal = () => {
        let cantidad = 0;
        data.forEach(item => {
            cantidad = cantidad + item.cantidadItem;
        });
        return cantidad;
    }

    const precioTotal = () => {
        let precio = 0;
        data.forEach(item => {
            precio = precio + item.cantidadItem * item.price;
        });
        return precio;
    }


    return(
             
        <section class="cart">
            
            <div className="CartContainer">
                {
                    data.map(item => 
                    <div className="Cart__product">
                        <div class="img__div"><img src={item.img} alt="Botella" class="cart__img"></img></div>
                        <div class="cart__div"> 
                            <p className="parrafo__nombre">{item.name}</p>
                            <p className="parrafo__cantidad">Cantidad: {item.cantidadItem}</p>
                            <p className="parrafo__precio">Subtotal: ${item.price * item.cantidadItem}.00</p>
                            <button className="Boton__eliminar" onClick={()=>eliminar(item.id)}>Eliminar Producto</button>
                        </div>
                    </div>)
                }
            </div>
            <div class="totaldiv">
                <h4>Detalle total</h4>
                <div class="totalproductos">
                {
                    data.map(item => 
                    <div>
                        <p>{item.name} - {item.cantidadItem} unidades</p>
                    </div>)
                }
                </div>
                <p>Cantidad de total: {cantidadTotal()} unidades</p>
                <p>Precio total: ${precioTotal()}</p>
                <div className="div__boton"><Link to={"/checkout"} className="boton__comprar">Realizar compra</Link></div>
            </div>
        </section>   
        
    )
}

export default Cart;