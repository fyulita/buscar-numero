import React, { Component } from 'react';


export class Alert extends Component {
    render() {
        return (
            <div className="alert alert-success">
                <h4 className="alert-heading">¡Ganaste!</h4>
                <p>
                    Te llevó {this.state.guesses} {this.state.guesses === 1 ? 'intento' : 'intentos'}. A la computadora le llevaría X
                    intentos en promedio si usa el algoritmo de búsqueda binaria. ¿Querés <a href="/juego">jugar de vuelta</a>?
                </p>
            </div>
        )
    }
}

export default Alert;
