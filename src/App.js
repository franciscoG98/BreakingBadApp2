import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterCard from '../src/components/characters/CharacterCard';
import Search from '../src/components/ui/Search';


const App = () => {
  // hooks: setean los estados de items y los pone en un arr despues de traer la data desde api
  // el isLoading lo que hace es que por defecto este cargando y cuando la pagina este cargada lo pasa a false
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems = () => {
      Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        .then(r => setItems(r.data))
        .then(setIsLoading(false))
        .catch(err => console.log(err))
    }

    fetchItems();
  }, [query]) // useEffect necesita como segundo parametro alguna dependencia
              // aca le mandamos query en el array porque es una dependecia, necesito que se actualice
              // el estado query  para habilitar el search y que haga la peticion axios con el query actualizado

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterCard isLoading={isLoading} items={ items }/>
    </div>
  );
}

export default App;
