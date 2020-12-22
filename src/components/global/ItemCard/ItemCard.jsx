import React, {useState} from 'react';
import './ItemCardStyles.css';



const ItemCard = ({name, price}) => {

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
        alert(`Agregaste ${count} ${name} al carrito`);
        }
    }

    return(
        <>
            <div className="ItemCard">
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
            </div>
        </>
    )
}

export default ItemCard;