import {useState, useContext } from 'react';
import {Store} from '../../../store';
import './checkoutstyles.css';
import {getFirestore} from '../../../db';
import firebase from 'firebase/app';

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
    })

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const precioTotal = () => {
        let precio = 0;
        data.forEach(item => {
            precio = precio + item.cantidadItem * item.price;
        });
        return precio;
    }

    const compra = {
        user: formData,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        objetos: data,
        precioTotal: precioTotal(),
    }


    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('ventas').add(compra)
        .then(({id}) =>{
            console.log(id);
        })
        .catch(e => console.log(e));
        setData([]);
        alert('Felicidades por su compra');
        console.log("Usted compró", compra);
    }
 

    return(
        <section>
            <form id="formulario" onSubmit={handleSubmitForm}>
                <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre"/>
                <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido"/>
                <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail"/>
                <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono"/>

                <button className="boton__pagar">Pagar</button>
            </form>
        </section>
    )
}

export default Checkout;