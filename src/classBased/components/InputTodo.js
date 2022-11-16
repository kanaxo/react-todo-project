// text field that accepts user input
import React, {Component} from "react"

class InputTodo extends Component {
    state = {
        title: ""
    };
    
    onChange = e => { //e is holding information of event
        this.setState({
            [e.target.name]: e.target.value, // name = "title" defined in render
        }) 
    }
    // [e.target.name] allows us to manage many input fields with a single method/function


    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });
        } else {
            alert("Please write item!")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" 
                className="input-text"
                placeholder="Add todo here..." 
                value = {this.state.title}
                name = "title" 
                onChange={this.onChange}/>
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo;