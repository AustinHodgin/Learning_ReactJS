import React, { Component } from 'react'


class Rand extends Component {
    constructor(props){
        super(props);
        this.state = {
            randNum: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({randNum: Math.floor(Math.random() * 10 + 1) });
    }

    render(){
        return(
            <div className="Rand">
                <h1>Number is {this.state.randNum}</h1>
                {this.state.randNum !== 7 
                    ? <button onClick={this.handleClick}>Click Me!</button> 
                    : <h2>You Won!</h2> 
                }
            </div>

        );
    }
}

export default Rand;