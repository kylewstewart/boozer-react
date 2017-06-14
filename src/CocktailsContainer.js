import React, { Component } from 'react'
import CocktailList from './components/CocktailList'
import CocktailPage from './components/CocktailPage'
import { Route } from 'react-router-dom'


export default class CocktailsContainer extends Component {
  constructor(){
    super()

    this.state = {
      cocktails: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/cocktails")
      .then( res => res.json())
      .then( data => this.setState({cocktails: data}))
  }

  getCocktail(id) {
    const cocktail = this.state.cocktails.find(cocktail => cocktail.id === parseInt(id))
    return cocktail
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Route exact path='/cocktails/:id' render={props => {
                const cocktail = this.getCocktail(props.match.params.id)
                return <CocktailPage cocktail={cocktail}/>
              }}/>
          </div>
          <div className="col-sm-4">
            <CocktailList cocktails={this.state.cocktails}/>
          </div>
        </div>
      </div>
    )
  }


}
