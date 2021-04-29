import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    changeCount = (op) => {
        if (op === '+') {
            this.setState({count: this.state.count + 1})
        } else if (op === '-') {
            this.setState({count: this.state.count - 1})
        }
    }

    render() {
        return (
            <div className="container text-center mt-5 py-4">
                <span>Count: {this.state.count}</span>
                <div>
                    <button className="btn btn-success m-3" onClick={ () => this.changeCount("+") }>Increment</button>
                    <button className="btn btn-danger m-3"  onClick={ () => this.changeCount("-") }>Decrement</button>
                </div>
            </div>
        )
    }
}
