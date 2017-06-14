import React from 'react'
import { Link } from 'react-router-dom'

export default function CocktailPage(props){

  if (!props.cocktail) {
    return <div> Loading </div>
  } else {
    return(
      <div>
        <p> Cocktail Name: {props.cocktail.name}</p>

      </div>
    )
  }




}
