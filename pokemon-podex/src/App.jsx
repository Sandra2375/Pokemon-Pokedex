import { useState, useEffect } from 'react'; //hook:useState armazena e atualiza dados que podem mudar durante projeto.useEffect lida com possiveis efeitos colateraiis do projeto tb buscadados da net como a pokeap 
import { API, buscarJson } from './api';
import './App.css';
import PokemonList from "./components/PokemonList";

function App() {
  //estado que garda os pokemons, começa vazio.
  const [pokemons, setPokemons] = useState([]);

  //roda uma vez qdo a pg é aberta.
  useEffect(() => {
    async function carregar() {
      //busca a lista pela url
      const dados = await buscarJson(`${API}/pokemon?limit=100`);

      //para cada cards, busca os detalhes ex: img, nome, tipos...
      const detalhes = await Promise.all(
        dados.results.map((item) => buscarJson(item.url)),
      );

      //gda no estado, e o react escreve na tela.
      setPokemons(detalhes);
    }
    carregar();
  }, []);

  return(
    <div className='app'>              
      
      <h1>pokedex</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );

}

export default App;