import React from "react";
import { Cell } from "./Cell";

export class Row extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            marked: false,
            done: this.props.row.bajarildi,
            hovered: false
        }
    }
    id = 1
    onClickHandler = () => {
        this.setState({
            marked: !this.state.marked
        })
    }

    onButtonClickHandler = () => {
        this.setState({
            done: !this.state.done
        })
    }

    onHoverHandler = (event) => {
        console.log(event)
    }
    render(){
        return (
        <tr 
            className="Row" 
            onClick={this.onClickHandler} 
            style={this.state.marked?{backgroundColor: "rgb(44, 95, 45)", color: "rgb(255, 231, 122)"}:{}}
            onMouseOver={this.onHoverHandler}
        >
            {Object.keys(this.props.row).map((key) => {
                if (key === "bajarildi"){
                    return <Cell value={this.props.row[key]} key={this.id++} done={this.state.done} onButtonClickHandler={this.onButtonClickHandler} columnName={key}></Cell>
                }
                return (
                    <Cell value={this.props.row[key]} key={this.id++} columnName={key}></Cell>
                )
            })}
        </tr>
        )
    }
}