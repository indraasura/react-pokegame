import React from 'react'

const Pokecard = (props) => {
    const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`
    return (
        <div className="pokecard">
            <h2>{props.pokemon.name}</h2>
            <img src={pokemonImg} alt="pokemon" />
            <div>
                <p><strong>Type: </strong>{props.pokemon.type}</p>
                <p><strong>Exp: </strong>{props.pokemon.exp}</p>
            </div>
        </div>
    )
}

export default Pokecard