import React, { Component, Fragment } from 'react';

import { Navbar } from './Navbar';


export class Info extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>

                <br/>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <h1 className="text-center">Número Escondido</h1>
                            <br/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h2>Instrucciones</h2>
                                </div>
                                <div className="card-body">
                                    <h4 className="text-justify">
                                        Este es un juego que consiste en encontrar un número escondido. Se tienen 100 cartas, cada una con un
                                        número entre el 1 y el 1000. Las cartas están ordenadas de menor a mayor, de tal forma que la Carta 1 tenga
                                        el número más chico y la Carta 100 el número más grande. La computadora va a elegir un número al azar que esté
                                        escondido en alguna carta y el objetivo es encontrarlo revelando la menor cantidad de cartas posibles.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <br/>
                            <a className="btn btn-primary btn-lg btn-block text-center" href="/juego">
                                ¡Jugar!
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="fixed-bottom">
                    <h4>
                        Esta página web la creé como demostración interactiva de los contenidos de <a href="">este video</a>. Te recomiendo que lo mires para entender
                        mejor por qué existe esta página. Si te gusta lo que hago, no dudes en <a href="https://www.youtube.com/channel/UCoa_OZFLlLrrHG8tGeLPm6A?sub_confirmation=1">suscribirte</a>.
                    </h4>
                </footer>
            </Fragment>
        )
    }
}

export default Info;
