import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from "./pages/Register";
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/login' element={< Login />}></Route>
              <Route exact path='/register' element={< Register />}></Route>
              <Route exact path='/product' element={< Product />}></Route>
              <Route exact path='/productList' element={< ProductList />}></Route>
      </Routes>
    </Router>
  )
};

export default App;