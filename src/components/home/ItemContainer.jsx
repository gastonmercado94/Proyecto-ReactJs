import {useState, useEffect} from 'react';
import ItemCard from '../global/ItemCard/ItemCard';
import ItemDetail from '../global/ItemDetail/ItemDetail';
import './styles/ItemContainerStyles.css';



const ProductList = () => {
    const [items, setItems] = useState([]);
    
    const products = [
        {
            id: 1,
            name: 'Cheval des Andes 2017',
            type: 'Malbec',
            price: 20,
            desc: 'Desc product 1',
        },
        {
            id: 2,
            name: 'Catena Zapata',
            type: 'Cabernet',
            price: 30,
            desc: 'Desc product 2',
        },
        {
            id: 3,
            name: 'Luigi Bosca',
            type: 'Malbec',
            price: 15,
            desc: 'Desc product 3',
        },
        {
            id: 4,
            name: 'Emilia',
            type: 'Rose',
            price: 12,
            desc: 'Desc product 4',
        },
        {
            id: 5,
            name: 'Bianchi',
            type: 'Malbec',
            price: 17,
            desc: 'Desc product 5',
        },
        {
            id: 6,
            name: 'Rutini',
            type: 'Cabernet',
            price: 10,
            desc: 'Desc product 6',
        },
        {
            id: 7,
            name: 'Casillero del Diablo',
            type: 'Malbec',
            price: 25,
            desc: 'Desc product 7',
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
    }, [])

   

    return (

        
        
        
        <section className="ItemContainer">
            <div className="container">
                {
                    items.length ?
                    <>
                        <ul className="ProductList">
                            {
                                items.map((item, index) => (
                                    <li key={index} className="ProductList__item">
                                        <ItemCard 
                                            name={item.name} 
                                            price={item.price} 
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="carga">Cargando items...</p>
                }
            </div>
        </section>
    )
}



export default ProductList;