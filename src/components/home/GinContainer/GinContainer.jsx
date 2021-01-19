import {useState, useEffect} from 'react';
import ItemCard from '../../global/ItemCard/ItemCard';
import {getFirestore} from '../../../db';

const GinContainer = () => {
    const [items, setItems] = useState([]);

    const db = getFirestore();

    const getProducstFromDB = () => {
       db.collection('productos').where("type", "==", "Gin").get()
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



export default GinContainer;