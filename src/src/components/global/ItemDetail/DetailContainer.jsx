import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './styles/DetailContainerStyles.css';
import {getFirestore} from '../../../db';



const DetailContainer = () => {
    const [item, setItem] = useState(null);

    const {id} = useParams();

    const db = getFirestore();


    useEffect(() => {
        console.log(id);
        db.collection('productos').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                console.log("Document data: ", doc.data());
                setItem(doc.data())
            }
        })
        .catch(e => console.log(e));
    }, [])

    if(item==null){return null}

    return (
        <>
            <div className="volverdiv">
                <Link to="/" className="volver"><p>Volver</p></Link>
            </div>
            <section className="DetailContainer">
                
                <div className="DetailDiv">
                    <ItemDetail
                        name={item.name}
                        id={item.id}
                        type={item.type}
                        desc={item.desc}
                        price={item.price}
                        img={item.img}
                    />    
                </div>                
            </section> 
        
        </>
    )
}

export default DetailContainer;