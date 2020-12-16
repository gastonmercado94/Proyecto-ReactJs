
import React, {useState} from 'react';

function Counter() {

const [count, setCount] = useState (0);

    return(
        <>
            <div className="CountContainer">
                <button className="qtyButton" onClick={()=> setCount(count - 1)}>-</button>
                <p>{count}</p>
                <button className="qtyButton" onClick={()=> setCount(count + 1)}>+</button>
            </div>
        </>
    )
}

export default Counter;