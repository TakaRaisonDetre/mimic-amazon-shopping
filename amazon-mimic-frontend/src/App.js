import React from 'react';
import data from './data.js'
import {BrowserRouter, Route} from 'react-router-dom'
import Products from './components/Products'
import HomeScreen from './screens/Home.screen'
import ProductScreen from './screens/Product.screen'

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">SVC Shop</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
       
        <Route exact path="/product/:id" component={ProductScreen}></Route>
        <Route exact path="/" component={HomeScreen}></Route>
        
      </main>
      <footer className="row center">All right reserved @ Nirvana Consultant KK</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
