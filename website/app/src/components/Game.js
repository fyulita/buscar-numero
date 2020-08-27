import React, { Component, Fragment } from 'react';

import { Navbar } from './Navbar';
import { Cards } from './Cards';
import { End } from './End';
import { Footer } from './Footer';


export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            hidden: 0,
            guesses: 0,
            end: false
        }
        this.makeArray = this.makeArray.bind(this);
        this.incrementGuesses = this.incrementGuesses.bind(this);
        this.checkEnd = this.checkEnd.bind(this);

        this.endModal = null;
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
            hidden: find_number
        })
    }

    incrementGuesses() {
        let guesses = this.state.guesses;
        guesses++;
        this.setState({
            guesses: guesses
        })
    }

    checkEnd(num) {
        if (num === this.state.hidden) {
            this.setState({
                end: true
            })
        }
    }

    UNSAFE_componentWillMount() {
        this.makeArray();
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <Fragment>
                <Navbar/>

                <br/>

                <End guesses={this.state.guesses} show={this.state.end}/>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col">
                            <h1 className="text-center">Encontrá el número {this.state.hidden}</h1>
                            <br/>
                        </div>
                    </div>
                    <Cards array={this.state.array} hidden={this.state.hidden} incrementGuesses={this.incrementGuesses} checkEnd={this.checkEnd}/>
                </div>

                <br/>

                <Footer/>
            </Fragment>
        )
    }
}

export default Game;
