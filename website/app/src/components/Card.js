import React, { Component } from 'react';


export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            show: true
        })
        this.props.incrementGuesses();
        this.props.checkEnd(this.props.number);
    }
    
    render() {
        let body = '';
        if (this.props.number === this.props.goal) {
            body = <button className="btn btn-primary" onClick={this.handleClick} data-toggle="modal" data-target="#winModal">Revelar</button>;
        } else {
            body = <button className="btn btn-primary" onClick={this.handleClick}>Revelar</button>;
        }

        let card_color = 'bg-info';
        if (this.state.show) {
            body = <h4 className="text-center font-weight-bold">{this.props.number}</h4>;
            if (this.props.number === this.props.goal) {
                card_color = 'bg-success';
            }
        }

        return (
            <div className={`card ${card_color} text-white`}>
                <div className="card-header">
                    <p className="text-center">Carta {this.props.id}</p>
                </div>
                <div className="card-body text-center">
                    {body}
                </div>
            </div>
        )
    }
}


export default Card;
