
import './App.css';
import Header from './Header';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import LogIn from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <h1>Welcome to the mocky-Ecommerce site</h1>
      <Route path="/login">
        <LogIn />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/add">
        <AddProduct />
      </Route>
      <Route path="/update">
        <UpdateProduct />
      </Route>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
