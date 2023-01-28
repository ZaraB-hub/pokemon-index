import React from 'react'

function Card({pokemon}) {
    return (
        <div>
            <h1>POkemon</h1>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
        </div>
    )
}

export default Card