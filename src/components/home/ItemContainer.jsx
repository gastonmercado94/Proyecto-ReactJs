import {useState, useEffect} from 'react';
import ItemCard from '../global/ItemCard/ItemCard';
import './styles/ItemContainerStyles.css';



const ProductList = () => {
    const [items, setItems] = useState([]);
    
    const products = [
        {
            id: 1,
            name: 'Cheval des Andes 2017',
            price: 20,
        },
        {
            id: 2,
            name: 'Catena Zapata',
            price: 30,
        },
        {
            id: 3,
            name: 'Luigi Bosca',
            price: 15,
        },
        {
            id: 4,
            name: 'Emilia',
            price: 12,
        },
        {
            id: 5,
            name: 'Bianchi',
            price: 17,
        },
        {
            id: 6,
            name: 'Rutini',
            price: 10,
        },
        {
            id: 7,
            name: 'Casillero del Diablo',
            price: 25,
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 5000)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     getProducts.then(rta => setItems(rta));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

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






// MI CODIGO ******************************************************************

// const ProductList = () => {
//     return(
//         <>
//             <section className="ItemContainer"> 
//                 <ItemCard name="Cheval des Andes 2017" type="Malbec" price="$20.00"/>
//                 <ItemCard name="Catena Zapata" type="Cabernet" price="$30.00"/>
//                 <ItemCard name="Luigi Bosca" type="Malbec" price="$15.00"/>
//                 <ItemCard name="Emilia" type="Rosé" price="$12.00"/>
//                 <ItemCard name="Bianchi" type="Malbec" price="$17.00"/>
//                 <ItemCard name="Rutini" type="Cabernet" price="$10.00"/>
//                 <ItemCard name="Casillero del Diablo" type="Cabernet" price="$25.00"/>
//             </section>
//         </>
//     )
// }

export default ProductList;