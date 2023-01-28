import './App.css';
import { FcSearch } from "react-icons/fc";
import { useEffect, useState } from 'react';
import Card from './components/Card';
import {BrowserRouter as Router} from 'react-router-dom'

const API_URL="https://pokeapi.co/api/v2/pokemon/";


function App() {

const[searchTerm,setSearchTerm]=useState("");
const[pokemon,setPokemon]=useState({});


const getPokemon=(name)=>{
  try{
  fetch(`${API_URL}${name}`)
  .then(response=>response.json())
  .then(data=>{
  console.log(data);
  setPokemon(data);})
  }
  catch(error){
    if (error.message.includes("Not Found")) {
      console.log("No Pokemon found with that name.");
      // document.querySelector(".cards").innerHTML="<h1>No Pokemon found.</h1>";
    } 
  }
}

  return (
    <Router>
    <div className='container'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
        <div className="search">
          <input type="text" name="" id="" placeholder='Search for pokemon'
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)}
            onKeyDown={(e)=>{if(e.key === 'Enter') getPokemon(searchTerm)}}/>
          <FcSearch size={40}onClick={()=>{getPokemon(searchTerm)}}/>
        </div>
        <div className="cards">
          <Card pokemon={pokemon}/>
        </div>
    </div>
    </Router>
  );
  }

export default App;
