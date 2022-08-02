import React from "react";
import "./Button.css"
import {instance} from "./Util"

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            disabled: false
        }
    }
    onClickHandler = async(event) => {
        event.stopPropagation()
        this.setState({
            disabled: true
        });
        try {
            let resp = await instance.put("/row", {pvi: Number(this.props.PVI), marked: !this.props.done})
            console.log(resp.data)
            this.props.onButtonClickHandler()
        }catch (err){
            
        }
        this.setState({
            disabled: false
        });
    }
    render(){
        return <button 
            onClick={this.onClickHandler} 
            disabled={this.state.disabled} 
            type={"button"}
            className="Button"
            style={{
                "background": this.props.done?"rgba(210, 34, 46, 0.8)":"rgb(35, 136, 35, 0.8)"
            }}
        >
            {this.props.done?"Qaytarish":"Bajarildi"}
        </button>
    }
}

export default Button