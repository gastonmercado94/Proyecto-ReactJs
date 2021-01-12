import React, {useState, useContext} from 'react';
import './ItemCardStyles.css';
import {Link} from 'react-router-dom';
import {Store} from '../../../store';



const ItemCard = ({name, price, img, id}) => {

    const [count, setCount] = useState (0);

    const [data, setData] = useContext(Store);

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
        setData({
            ...data, 
            cantidad: data.cantidad + count,
            items: [...data.items, {id: id, name: name, price: price}],
        });
        if(count>0){
        alert(`Agregaste ${count} ${name} al carrito`);
        setCount(0);
        }
    }

    console.log(data);

    return(
        <>
            <div className="ItemCard">
                <img src={img}></img>
                <h3 className="item--title">{name}</h3>
                <p>${price}.00</p>
                <div className="CountContainer">
                    <button className="qtyButton" disabled={count === 0 ? 'disabled' : null } 
                        onClick={CantMinima}>-</button>
                    <p>{count}</p>
                    <button className="qtyButton"  disabled={count === 10 ? 'disabled' : null } 
                        onClick={CantMaxima}>+</button>
                </div>
                <button onClick={onAdd} className="addbutton">Agregar al carrito</button>
                <Link to={"/detail/" + id} className="linkdetail">Ver más</Link>
            </div>
        </>
    )
}

export default ItemCard;