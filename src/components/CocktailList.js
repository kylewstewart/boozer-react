import React from 'react'
import { Link } from 'react-router-dom'


export default function CocktailList(props) {

  return(
    <div>
      <h2>Cocktail List</h2>
      <ul>
      {props.cocktails.map(cocktail =>
          <Link to={`/cocktails/${cocktail.id}`}>
            <li key={cocktail.id}> {cocktail.name} </li>
          </Link>
      )}
      </ul>
    </div>
  )

}
