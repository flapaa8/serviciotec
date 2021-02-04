import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header'
import Footer from "./Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <Header/>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          
        </main>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
