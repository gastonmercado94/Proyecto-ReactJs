import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Menu from './components/home/menu';
import ProductList from './components/home/ItemContainer';
import DetailContainer from './components/global/ItemDetail/DetailContainer';
import Error from './components/global/Error404/Error';
import Cart from './components/global/Cart/Cart';

function App() {
  return (

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
    
  );
}

export default App;
