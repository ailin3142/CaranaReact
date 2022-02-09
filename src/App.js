import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React from "react"
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import CartContext from './components/cart/CartContext';
import Cart from './components/cart/Cart';

export default function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer greeting={'Lista de productos'} />
          </Route>
          <Route exact path='/producto/:id'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/category/:categoryId'>
            <ItemListContainer greeting={'Estas en la categoria {categoryId}'} />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

