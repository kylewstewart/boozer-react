import React from 'react'
import { Link } from 'react-router-dom'

export default function CocktailPage(props){

  if (!props.cocktail) {
    return <div> Loading... </div>
  } else {
    return(
      <div>
        <h4>{props.cocktail.name}</h4>
        <p><b>Description:</b>{props.cocktail.description}</p>
        <p><b>Instructions:</b>{props.cocktail.instructions}</p>
        <p><b>Ingredients:</b></p>
        <ul>
          {props.cocktail.proportions.map(p => <li> {p.amount} of {p.ingredient_name} </li>)}
        </ul>


      </div>
    )
  }




}
