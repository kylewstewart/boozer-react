import React from 'react'
import { Link } from 'react-router-dom'


export default function CocktailList(props) {

  return(
    <div>
      <h4>All Cocktails (click to see details)</h4>
      <ul>
      {props.cocktails.map(cocktail =>
          <Link to={`/cocktails/${cocktail.id}`}>
            <li key={cocktail.id}> {cocktail.name}</li>
          </Link>
      )}
      </ul>
    </div>
  )

}
