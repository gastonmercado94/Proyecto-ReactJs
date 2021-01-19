import {useState, useEffect} from 'react';
import ItemCard from '../global/ItemCard/ItemCard';
import './styles/ItemContainerStyles.css';
import {getFirestore} from '../../db';



const ProductList = () => {
    const [items, setItems] = useState([]);
    
    const products = [
        {
            id: 1,
            img: 'https://i.ibb.co/jJdTGL4/cheval.png',
            name: 'Cheval des Andes 2017',
            type: 'Vino',
            price: 20,
            desc: 'Desc product 1',
        },
        {
            id: 12,
            img: 'https://i.ibb.co/NWzPrRf/w2.png',
            name: 'Johnnie Walker Black Label',
            type: 'Whiskey',
            price: 30,
            desc: 'Desc product 2',
        },
        {
            id: 23,
            img: 'https://i.ibb.co/yFPWff3/g2.png',
            name: 'Beefeater',
            type: 'Gin',
            price: 15,
            desc: 'Desc product 3',
        },
        {
            id: 14,
            img: 'https://i.ibb.co/KL5ns8W/w4.png',
            name: 'The Dalmore',
            type: 'Whiskey',
            price: 12,
            desc: 'Desc product 4',
        },
        {
            id: 15,
            img: 'https://i.ibb.co/M7vNCZj/w1.png',
            name: 'Glenfiddich',
            type: 'Whiskey',
            price: 17,
            desc: 'Desc product 5',
        },
        {
            id: 6,
            img: 'https://i.ibb.co/zZS3C78/bianchi.png',
            name: 'Rutini',
            type: 'Vino',
            price: 10,
            desc: 'Desc product 6',
        },
        {
            id: 7,
            img: 'https://i.ibb.co/xznX99b/luigi.png',
            name: 'Casillero del Diablo',
            type: 'Vino',
            price: 25,
            desc: 'Desc product 7',
        },
        {
            id: 28,
            img: 'https://i.ibb.co/3cQnpDF/g3.png',
            name: 'Tanqueray',
            type: 'Gin',
            price: 25,
            desc: 'Desc product 7',
        },
        {
            id: 29,
            img: 'https://i.ibb.co/L8Nx8z6/g9.png',
            name: 'Dry Town',
            type: 'Gin',
            price: 25,
            desc: 'Desc product 29',
        },
        {
            id: 10,
            img: 'https://i.ibb.co/zZS3C78/bianchi.png',
            name: 'Trapiche',
            type: 'Vino',
            price: 25,
            desc: 'Desc product 7',
        },
    ]

    const db = getFirestore();

    const getProducstFromDB = () => {
       db.collection('productos').where("destacado", "==", true).get()
       .then(docs => {
           let arr = [];
           docs.forEach(doc =>{
               arr.push({id: doc.id, data: doc.data()})
           })

           console.log(arr);
           setItems(arr);
       })
       .catch(e => console.log(e));
    }

    useEffect(() => {
        getProducstFromDB();
    }, [])

   

    return (
        
        <section className="ItemContainer">
            <h2>Productos destacados</h2>
            <div className="container">
                {
                    items.length ?
                    <>
                        <ul className="ProductList">
                            {
                                items.map((item) => (
                                    <li key={item.id} className="ProductList__item">
                                        <ItemCard 
                                            name={item.data.name} 
                                            price={item.data.price} 
                                            img={item.data.img}
                                            id={item.id}
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