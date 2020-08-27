import React, { Component } from 'react';


export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            guesses: 0
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.setState({
            show: true,
            guesses: this.state.guesses + 1
        })
    }
    
    render() {
        let body = <button className="btn btn-primary" onClick={this.handleOnClick}>Revelar</button>;
        if (this.state.show) {
            body = <h5>{this.props.number}</h5>;
        }

        return (
            <div className="card bg-info text-white">
                <div className="card-header">
                    Carta {this.props.id}
                </div>
                <div className="card-body">
                    {body}
                </div>
            </div>
        )
    }
}


export default Card;
