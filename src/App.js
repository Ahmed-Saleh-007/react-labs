import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Form from './components/form/form'
import List from "./components/list/List";
import Todo from "./components/todo/Todo";
import Counter from './components/counter/Counter';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "ITI",
        }
    }

    changeName = () => {
        this.setState({name: 'Ahmed'});
    }


    render() {
        return (
            <Router>
                <Header/>
                <div className="container"><br/>
                    <Switch>
                        <Route path="/counter" component={Counter} />
                        <Route path="/form" component={Form} />
                        <Route path="/list" component={List} />
                        <Route path="/todo" component={Todo} />
                        <Route path="/">
                            <p className="p">Welcome {this.state.name} </p>
                            <button onClick={this.changeName} className="btn btn-primary">change name</button>
                        </Route>
                    </Switch>
                </div>
                <Footer name={this.state.name}/>
            </Router>
        );
    }
}

