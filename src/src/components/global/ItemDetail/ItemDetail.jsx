import {useState, useContext} from 'react';
import './styles/DetailContainerStyles.css';
import { useHistory } from "react-router-dom";
import {Store} from '../../../store';

const ItemDetail = ({id, name, type, desc, price, img}) => {

    let history = useHistory();

    const [data, setData] = useContext(Store);

    const [count, setCount] = useState (0);

    const CantMinima = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    const CantMaxima = () => {
        if(count < 10) {
            setCount(count + 1);
        }
    }

    const onAdd = () =>{
        if(count>0){
            setData({
                ...data, 
                cantidad: data.cantidad + count,
                items: [...data.items, {id: id, name: name, price: price}],
            });
            alert(`Agregaste ${count} ${name} al carrito`);
            setCount(0);
            history.push("/cart");
        }
    }

    console.log(data);

    return (
        <>
            <div className="divImg">
                <img src={img}></img>
            </div>
            <div className="divInfo">
                <h1>{name}</h1>
                <p>ID del producto: {id}</p>
                <p>{type}</p>
                <p>Descripcion: {desc}</p>
                <p>${price}.00</p>
                <div className="CountContainerDetail">
                    <button className="qtyButton" disabled={count === 0 ? 'disabled' : null } 
                        onClick={CantMinima}>-</button>
                    <p>{count}</p>
                    <button className="qtyButton"  disabled={count === 10 ? 'disabled' : null } 
                        onClick={CantMaxima}>+</button>
                </div>
                <button onClick={onAdd} className="addbutton">Agregar al carrito</button>
            </div>

        </>
    )
}

export default ItemDetail;