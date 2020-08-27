import React, { Component } from 'react';
import { Card } from './Card';


export class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            number: 0,
            guesses: 0
        }
        this.makeArray = this.makeArray.bind(this);
    }

    // Devuelve un array de 100 numeros al azar entre 1 1000 ordenados de menor a mayor.
    makeArray() {
        // Creamos un array de numeros del 1 al 1000.
        let long_array = [];
        for (let i = 1; i <= 1000; i++) {
            long_array.push(i);
        }

        function shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array
        }

        // Mezclamos el array usando la función de arriba.
        const shuffled_array = shuffle(long_array);

        // Tomamos los primeros 100 números.
        let short_array = [];
        for (let i = 0; i < 100; i++) {
            short_array.push(shuffled_array[i]);
        }

        // Ordenamos de menor a mayor.
        short_array.sort((num1, num2) => {
            if (num1 < num2) {
                return -1;
            } else {
                return 1;
            }
        });

        // Elegimos un número al azar de la lista.
        const find_number = short_array[Math.floor(Math.random() * short_array.length)];

        // Asignamos el array y el número al estado.
        this.setState({
            array: short_array,
            number: find_number
        })
    }

    UNSAFE_componentWillMount() {
        this.makeArray();
    }
    
    render() {
        const array = this.state.array;
        const number = this.state.number;

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
            <div key="container">
                <h1>Encontrá el número {number}</h1>
                <br/>
                <div>
                    {arrays.map((array, index) => {
                        return (
                            <div key={index}>
                                <div className="row top-buffer" key={`row:${index}`}>
                                    <div className="col-1"></div>
                                    {array.map((number, idx) => {
                                        return (
                                            <div className="col-1" key={`row:${index} col:${idx}`}>
                                                <Card number={number} id={index * 10 + idx + 1}/>
                                            </div>
                                        )
                                    })}
                                    <div className="col-1"></div>
                                </div>
                                <br/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Cards;
