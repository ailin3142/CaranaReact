import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React from "react"
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
            <ItemListContainer greeting={'Hola fulano'} />
        </Route>
        <Route path="/detalle">
            <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

