
import {Component} from "react";


class ButtonOK extends Component {


    handleClick() {
        alert('OK');
    }


    render() {

        

        return (
            <button className="btn" onClick={this.handleClick}>OK</button>
        ) 
    }
}

export default ButtonOK