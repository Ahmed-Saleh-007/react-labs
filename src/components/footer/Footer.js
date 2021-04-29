import React from 'react';
import './footer.css';
import Profile from "../profile/Profile";

export default class Footer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name
        }
    }
    render() {
        return (
            <footer className="bg-dark text-center text-lg-start footer">
                <div className="text-center p-3">
                    {this.state.name}  © 2020 Copyright
                </div>
            </footer>
        )
    }
}

Footer.defaultProps = {
    name: "ITI"
}
