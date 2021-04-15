import React from 'react'
import Pokecard from './Pokecard'

const Pokedex = (props) => {
    return (
        <div className="pokedex">
            {props.hand.map(pokemon => <Pokecard pokemon={pokemon} />)}
            <div className="total-exp">
                {props.totalExp}
            </div>
        </div>
    )
}

export default Pokedex