import React from "react";
class InputToDo extends React.Component{
    state = {
        title: ""
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.handleSubmit(this.state.title.trim());
            this.setState({
                title: ""
            })
        }
        else alert("Please, write item")
    };
    render(){
        return (
            <form
                onSubmit={this.handleSubmit}
                className="form-container"
            >
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Add Todo..." 
                    value={this.state.title} 
                    onChange={this.onChange}
                    name="title"
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputToDo