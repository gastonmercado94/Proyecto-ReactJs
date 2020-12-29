import {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './styles/DetailContainerStyles.css';



const DetailContainer = () => {
    const [item, setItem] = useState(null);

    const {id} = useParams();

    const products = [
        {
            id: 1,
            img: 'https://http2.mlstatic.com/D_NQ_NP_626817-MLA40862678865_022020-O.webp',
            name: 'Cheval des Andes 2017',
            type: 'Malbec',
            price: 20,
            desc: 'Desc product 1',
        },
        {
            id: 2,
            img: 'https://http2.mlstatic.com/D_NQ_NP_825050-MLA42860319325_072020-O.webp',
            name: 'Catena Zapata',
            type: 'Cabernet',
            price: 30,
            desc: 'Desc product 2',
        },
        {
            id: 3,
            img: 'https://http2.mlstatic.com/D_NQ_NP_923593-MLA32857357555_112019-O.webp',
            name: 'Luigi Bosca',
            type: 'Malbec',
            price: 15,
            desc: 'Desc product 3',
        },
        {
            id: 4,
            img: 'https://http2.mlstatic.com/D_NQ_NP_782690-MLA42154239086_062020-O.webp',
            name: 'Emilia',
            type: 'Rose',
            price: 12,
            desc: 'Desc product 4',
        },
        {
            id: 5,
            img: 'https://i.pinimg.com/originals/c6/0a/45/c60a452ae365f76161f0a973f9661055.jpg',
            name: 'Bianchi',
            type: 'Malbec',
            price: 17,
            desc: 'Desc product 5',
        },
        {
            id: 6,
            img: 'https://http2.mlstatic.com/D_NQ_NP_949480-MLA31708733026_082019-O.webp',
            name: 'Rutini',
            type: 'Cabernet',
            price: 10,
            desc: 'Desc product 6',
        },
        {
            id: 7,
            img: 'https://http2.mlstatic.com/vino-casillero-del-diablo-carmenere-750ml-envios-D_Q_NP_744209-MLA31114471755_062019-F.webp',
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
            const product = result.find(product => product.id==id)
            setItem(product);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
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