import React from "react";
import { Cell } from "./Cell";
import Image from "./Image";

export class Row extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            marked: false,
            done: this.props.row.marked,
            hovered: false,
            collapsed: true
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
            done: !this.state.done,
            marked: false
        })
    }

    handleCollapseClick = (event) => {
        event.stopPropagation()
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render(){
        return [
        <tr 
            className="Row" 
            onClick={this.onClickHandler} 
            style={this.state.marked?{backgroundColor: "rgb(245, 215, 105)"}:(this.state.done?{backgroundColor: "rgb(141, 184, 124)", color: "rgb( 245, 215, 105)"}:{})}
            key={this.props.row.PVI}
        >
            {Object.keys(this.props.row).map((key) => {
                if (key === "marked"){
                    return <Cell 
                        value={this.props.row[key]} 
                        key={this.id++} 
                        done={this.state.done} 
                        onButtonClickHandler={this.onButtonClickHandler} 
                        columnName={key}
                    />
                } else if (key === "Time"){
                    return <Cell
                        value={
                            <Image 
                                handleCollapseClick={this.handleCollapseClick}
                                width="20px"
                                height="20px"
                            />
                        } 
                        key={this.id++} 
                        width="35px"
                        columnName={key}
                    />
                }
                return (
                    <Cell value={this.props.row[key]} key={this.id++} columnName={key}></Cell>
                )
            })}
        </tr>,
            !this.state.collapsed && <tr key={this.props.PVI + "collapser"}>
                <td colSpan={Object.keys(this.props.row).length} key={this.id++} className="Expanded">
                    {this.props.row.Time.toString()}
                </td>
            </tr>
        ]
    }
}