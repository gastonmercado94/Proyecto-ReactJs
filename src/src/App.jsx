import {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Menu from './components/home/menu';
import ProductList from './components/home/ItemContainer';
import DetailContainer from './components/global/ItemDetail/DetailContainer';
import Error from './components/global/Error404/Error';
import Cart from './components/global/Cart/Cart';
import {Store} from './store';

function App() {

  const [data, setData] = useState({
    items: [],
    cantidad: 0,
  })

  return (
    <Store.Provider value={[data, setData]}>
        <BrowserRouter>  
          <Menu/>
          <Switch>

            <Route exact path="/">
              <ProductList/>
            </Route>

            <Route path="/detail/:id">
              <DetailContainer/>
            </Route>

            <Route path="/cart">
              <Cart/>
            </Route>

            <Route path="*">
              <Error/>
            </Route>

          </Switch>
        </BrowserRouter>
    </Store.Provider>
  );
}

export default App;