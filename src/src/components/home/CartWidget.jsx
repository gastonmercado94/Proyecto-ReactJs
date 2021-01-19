import Carro from './img/carro4.png';
import {Store} from '../../store';
import {useContext} from 'react';

function CartWidget(){

    const [data, setData] = useContext(Store);

    const cantidadTotal = () => {
        let cantidad = 0;
        data.forEach(item => {
            cantidad = cantidad + item.cantidadItem;
        });
        return cantidad;
    }

    return(

        <div className="WidgetContainer">
            <div className="CantidadTotal">{cantidadTotal()}</div>
            <img src={Carro} width="30px" alt="Imagen carrito"></img>
        </div>

    )
}

export default CartWidget;