import {useState, useContext } from 'react';
import Modal from 'react-modal';
import {Store} from '../../../store';
import './checkoutstyles.css';
import {getFirestore} from '../../../db';
import firebase from 'firebase/app';

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [id, setId] = useState("");
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
            setId(id);
        })
        .catch(e => console.log(e));
        setData([]);
        console.log("Usted compró", compra);
    }

   

    return(
        <section className="form__section">
            <h2>Complete el formulario para finalizar su compra!</h2>
            <div className="form__container">
                <form id="formulario" onSubmit={handleSubmitForm}>
                    <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre"/>
                    <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido"/>
                    <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail"/>
                    <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono"/>

                    <button className="boton__pagar" onClick={() => {setModalIsOpen(true)}}>Pagar</button>

                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                        style={{
                            overlay: {
                            backgroundColor: 'rgba(0,0,0,0.5)'
                            },
                            content: {
                                top: '100px',
                                left: '400px',
                                right: '400px',
                                bottom: '300px'
                            }
                            }}
                    >   
                        <div className="modal__text">
                            <h3>¡Felicidades por su compra!</h3>
                            <p>El ID de su compra es: <span className="bold">{id}</span></p>
                        </div>
                        <div className="button__container">
                            <button onClick={() => setModalIsOpen(false)} className="close__button">Cerrar</button>
                        </div>
                    </Modal>
                </form>
            </div>
        </section>
    )
}

export default Checkout;