import './App.css';
import { GoSearch } from "react-icons/go";
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { BrowserRouter as Router } from 'react-router-dom'

const API_URL = "https://pokeapi.co/api/v2/pokemon/";


function App() {


  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    var input = document.querySelector('input[type="text"]');
    var elementToShow = document.getElementById('searchbutton');

    input.addEventListener('focus', function () {
      elementToShow.style.display = 'none';
    });
    input.addEventListener('blur', function () {
      setTimeout(function () {
        elementToShow.style.display = 'block';
      }, 5);
    });
  }, []);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        data.results.forEach(element => {
          fetch(element.url).then(response => response.json())
            .then(data => { console.log(data); setPokemons(prevPokemons => [...prevPokemons, data]); })
        });
      })
  }, [])


  const getPokemon = async (name) => {
    const response = await fetch(`${API_URL}${name}`);
    if (!response.ok) {
      alert("Pokemon not found");
      return;
    }
    const data = await response.json();

    setPokemon(data);
  }

  return (
    <Router>
      <div className='big'>
        <div className='container'>
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />

          <div className="search">
            <input type="text" name="" id="" placeholder='Search for pokemon'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') getPokemon(searchTerm) }} />
            <GoSearch id='searchbutton' style={{ color: 'grey' }} size={20} onClick={() => { getPokemon(searchTerm) }} />
          </div>
        </div>

        {searchTerm ? (
        <div className="card">
          <Card pokemon={pokemon} />
        </div>
      ) : (
        <div className="cards">
          {pokemons.map((pokemon) => (
                  <Card pokemon={pokemon} />
                ))}
        </div>
      )}



      </div>


    </Router>
  );


}

export default App;
