const ItemDetail = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <p>El id de este producto es {item.id}</p>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail;