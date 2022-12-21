import Card from "./Card"
import Api from "../services/Api";
import {useState, useEffect} from "react";

function CardsApi() {

    const [livros, setLivros] = useState([]);
    
    useEffect(() => {
        Api.get("/")
        .then((response) => {
            setLivros(response.data);
          })
    });



    return (
        livros.map(livro => 
         <Card key={livro.id} titulo={livro.id}>
             <h4>Livro: {livro.nome}</h4>
             <h4>Reservado: {livro.reservado}</h4>
         </Card>
        )
    )
}

export default CardsApi;