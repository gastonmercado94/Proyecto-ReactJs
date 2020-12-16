
import './ItemCardStyles.css';
import Counter from './Counter';




const ItemCard = ({name, type, price}) => (
    <div className="ItemCard">
        <h3 className="item--title">{name}</h3>
        <p>{type}</p>
        <p>{price}</p>
        <Counter></Counter>
    </div>
)

export default ItemCard;