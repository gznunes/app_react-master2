import './App.css';
import ListaCardsApi from './componentes/CardsApi';

import MeuCard from './componentes/Card';

import Axios from "axios";
import { useState } from 'react';

function App() {

    // const [joke, setJoke] = useState("");

    // const getJoke = () => {
    //     Axios.get("https://api-livros.onrender.com/livros/3").then(
    //         (response) => {
    //             console.log(response);
    //             setJoke(response.data.nome);})
    // }
  return (
    <div>
         
      <ListaCardsApi />
      
      
    </div>
  );
}

export default App;
