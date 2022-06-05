import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from "./pages/Register";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Profile from './pages/Profile';
import AddProduct from './pages/AddProduct';

const App = () => {

  //const user = true
  return (
    <Router>
      <Routes>
              <Route  path='/homepage' exact element={< Home />}></Route>
              <Route  path='/login' exact element={< Login />}></Route>
              <Route  path='/' exact element={< Register />}></Route>
              <Route  path='/products/:id' exact element={< Product />}></Route>
              <Route  path='/category/:title' exact element={< ProductList />}></Route>
              <Route  path='/profile' exact element={< Profile />}></Route>
              <Route  path='/addProduct' exact element={< AddProduct />}></Route>
      </Routes>
    </Router>
  )
};

export default App;