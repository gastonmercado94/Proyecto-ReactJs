import logo from './logo.svg';
import './styles/App.css';
import Menu from './components/home/menu';
import ItemCard from './components/global/ItemCard/ItemCard';

function App() {
  return (
      <>  
      
      <Menu/>

      <section className="ItemContainer"> 
          <ItemCard name="Cheval des Andes 2017" type="Malbec" price="$20.00"/>
          <ItemCard name="Catena Zapata" type="Cabernet" price="$30.00"/>
          <ItemCard name="Luigi Bosca" type="Malbec" price="$15.00"/>
          <ItemCard name="Emilia" type="Rosé" price="$12.00"/>
          <ItemCard name="Bianchi" type="Malbec" price="$17.00"/>
          <ItemCard name="Rutini" type="Cabernet" price="$10.00"/>
          <ItemCard name="Casillero del Diablo" type="Cabernet" price="$25.00"/>
      </section>

      </>

   
  );
}

export default App;
