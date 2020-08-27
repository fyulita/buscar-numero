import React, { Component } from 'react';
import { Card } from './Card';


export class Cards extends Component {
    render() {
        const array = this.props.array;
        const hidden = this.props.hidden;

        // Creo un array con diez arrays, cada uno con 10 números. Es para dividir fácilmente en 10 filas.
        const arrays = [];
        for (let i = 0; i < 10; i++) {
            let aux = [];
            for (let j = 0; j < 10; j++) {
                aux.push(array[i * 10 + j]);
            }
            arrays.push(aux);
        }

        return (
            <div>
                {arrays.map((array, index) => {
                    return (
                        <div key={index}>
                            <div className="row justify-content-center" key={`row:${index}`}>
                                {array.map((num, idx) => {
                                    return (
                                        <div className="col-1" key={`row:${index} col:${idx}`}>
                                            <Card number={num} id={index * 10 + idx + 1} goal={hidden}
                                            incrementGuesses={this.props.incrementGuesses} checkEnd={this.props.checkEnd}/>
                                        </div>
                                    )
                                })}
                            </div>
                            <br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cards;
