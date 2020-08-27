import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Info } from './Info';
import { Game } from './Game';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Info} />
                <Route exact path='/juego' component={Game} />
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
