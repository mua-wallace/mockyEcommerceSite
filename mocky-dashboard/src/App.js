
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login">
      <h1>Welcome to the Mocky-Ecommerce side</h1>
          <LogIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/add">
          <Protected Cmp={AddProduct} />
        </Route>
        <Route path="/update">
        <Protected Cmp={UpdateProduct} />
        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
