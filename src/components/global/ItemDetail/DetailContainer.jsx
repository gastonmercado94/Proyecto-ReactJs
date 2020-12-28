import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';



const DetailContainer = () => {
    const [item, setItem] = useState(null);
    
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
            setItem(result[5]);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
    }, [])

    if(item==null){return null}
    return (

        <section className="DetailContainer">
             <ItemDetail
                name={item.name}
                id={item.id}
                type={item.type}
                desc={item.desc}
                price={item.price}
             />                    
        </section>

        
        
    )
}

export default DetailContainer;