import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand nav-link">React JS</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/counter" className=" nav-link">Counter</Link></li>
                            <li className="nav-item"><Link to="/form" className=" nav-link">Form</Link></li>
                            <li className="nav-item"><Link to="/list" className=" nav-link">List</Link></li>
                            <li className="nav-item"><Link to="/todo" className=" nav-link">Todo</Link></li>
                        </ul>
                    </div>
                </div>
          </nav>
        );
    }
}

