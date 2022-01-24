import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React from "react"
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemDetailContainer />
    </>
  );
}

export default App;

//   <ItemListContainer greeting={'Hola fulano'} /> 

