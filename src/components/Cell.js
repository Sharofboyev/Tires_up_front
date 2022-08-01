import Button from "./Button";
import React from "react";

export class Cell extends React.Component {
    render(){
        return (
            <td className="Cell"
                style={{
                    "width": this.props.columnName === "marked"?"100px":(this.props.width?this.props.width:"")
                }}
            >
                {this.props.columnName === "marked"?
                    <Button 
                        done={this.props.done} 
                        onButtonClickHandler={this.props.onButtonClickHandler}
                        PVI={this.props.PVI}
                    />
                    :this.props.value}
            </td>
        )
    }
}