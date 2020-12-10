import './ItemCardStyles.css';

const ItemCard = ({name, type, price}) => (
    <div className="ItemCard">
    <h3 className="item--title">{name}</h3>
    <p>{type}</p>
    <p>{price}</p>
    </div>
)

export default ItemCard;