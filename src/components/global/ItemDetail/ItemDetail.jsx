const ItemDetail = ({id, name, type, desc, price}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>ID del producto: {id}</p>
            <p>{type}</p>
            <p>Descripcion: {desc}</p>
            <p>${price}.00</p>
        </div>
    )
}

export default ItemDetail;