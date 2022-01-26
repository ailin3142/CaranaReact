import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React from "react"
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';

export default function App() {
  return (
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
      </Switch>
    </BrowserRouter>
  );
}

