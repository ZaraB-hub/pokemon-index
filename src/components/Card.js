import React from 'react'
import {Link} from 'react-router-dom'

function Card({ pokemon }) {
    return (
    <Link to={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}>

        <div className="pokemon">

        <div>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
        </div>

        <div>
            <span>{pokemon.name}</span>
            <h4>Type: {pokemon.types.map(({type:{name}}) => name.charAt(0).toUpperCase() + name.slice(1) ).join("/")}</h4>
            <h4>Abilities: {pokemon.abilities.map(({ability:{name}}) => name.charAt(0).toUpperCase() + name.slice(1) ).join(", ")}</h4>
        </div>
        </div>
        </Link>
    )
}

export default Card