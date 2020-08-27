import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Cards } from './Cards';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Cards/>
            </Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
