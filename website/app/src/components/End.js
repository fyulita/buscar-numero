import React, { Component } from 'react';


export class End extends Component {
    render() {
        let end = '';
        if (this.props.show) {
            end = (
                <div className="modal fade" id="winModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabel">¡Ganaste!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="text-justify">
                                    Te llevó {this.props.guesses} {this.props.guesses === 1 ? 'intento' : 'intentos'}. A la computadora le 
                                    llevó {this.props.computer_guesses} {this.props.computer_guesses === 1 ? 'intento' : 'intentos'} usando el 
                                    algoritmo de búsqueda binaria. {this.props.guesses < this.props.computer_guesses ? '¡Sos mejor que la compu!' :
                                    '¡Seguí intentando para ganarle!'}
                                </p>
                            </div>
                            <div className="modal-footer">
                                <a className="btn btn-secondary" data-dismiss="modal">Cerrar</a>
                                <a className="btn btn-primary" href="/juego">Jugar de vuelta</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return end;
    }
}

export default End;
