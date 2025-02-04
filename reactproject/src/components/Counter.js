import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        //this.increment = this.increment.bind(this);
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <div>
                <h3>Count value is :: {this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;