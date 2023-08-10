import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
const App = () => {

const [count, setCount] = useState(0);

const Sumar = () => {
  setCount ( count + 1)
}

const Descartar = () => {
  setCount ( count - 1)
}


  
return (
    

  <div>
  < NavBarComponent />
  <ItemListContainer greeting="Bienvenido a SuguruShop"/>
    <h1>Contador de productos</h1>
    <h2>{count}</h2>
    < ButtonComponent  label="Sumar" bsButtonType="success"  onClickFunction={Sumar}/>
    < ButtonComponent  label="Descartar" bsButtonType="danger"  onClickFunction={Descartar}/>
    
  </div>
  )
}

export default App
