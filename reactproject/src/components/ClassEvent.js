import { Component } from "react";

class ClassEvent extends Component {
    handleClick() {
        console.log('Class Button clicked');
    }
    
    render() {
        return(
            <div>
                This is a class based component
                <button onClick = {this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClassEvent;