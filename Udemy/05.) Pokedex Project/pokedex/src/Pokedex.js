import React, {Component} from 'react';
import Pokecard from "./Pokecard";
import "./Pokedex.css"



class Pokedex extends Component {
    
  render(){
    let tittle;
    if(this.props.isWinner){
        tittle = <h1 className="Pokedex-winner">Winning Hand!</h1>
    }else{
        tittle = <h1 className="Pokedex-loser">Losing Hand!</h1>
    }
    return (
       
        <div className="Pokedex"> 
            {tittle}
            <h4>Total Experience: {this.props.exp}</h4>
        
            <div className="Pokedex-cards">
                {this.props.pokemon.map((p) =>(
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>
      );
  }
}

export default Pokedex;
