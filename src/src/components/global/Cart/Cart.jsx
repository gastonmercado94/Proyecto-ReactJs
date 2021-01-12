import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {Store} from '../../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);
    return(
        <>
            <div>
                {
                    data.items.map(item => <p>{item.name}</p>)
                }
            </div>
            <Link to="/">Volver a inicio</Link>
        </>
    )
}

export default Cart;