import React, { Component } from 'react';


export class Footer extends Component {
    render() {
        return (
            <footer className="footer sticky-bottom">
                <div className="container-fluid">
                    <h4 className="text-justify">
                        Esta página web la creé como demostración interactiva de los contenidos de <a href="">este video</a>. Te recomiendo que lo mires para entender
                        mejor por qué existe esta página. Si te gusta lo que hago, no dudes en <a href="https://www.youtube.com/channel/UCoa_OZFLlLrrHG8tGeLPm6A?sub_confirmation=1">suscribirte</a>.
                    </h4>
                </div>
            </footer>
        )
    }
}

export default Footer;
