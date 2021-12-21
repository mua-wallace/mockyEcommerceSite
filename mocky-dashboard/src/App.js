
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LogIn from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected'; 
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/add">
          <Protected Cmp={AddProduct} />
        </Route>
        <Route path="/update/:id">
        <Protected Cmp={UpdateProduct} />
        </Route>
        <Route path="/search">
        <Protected Cmp={SearchProduct} />
        </Route>
        <Route path="/">
          <Protected Cmp={ProductList} />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
