import Button from "./Button";
import React from "react";

export class Cell extends React.Component {
    render(){
        return (
            <td className="Cell"
                style={{
                    "width": this.props.columnName === "bajarildi"?"100px":""
                }}
            >
                {this.props.columnName === "bajarildi"?
                    <Button 
                        done={this.props.done} 
                        onButtonClickHandler={this.props.onButtonClickHandler}
                    />
                    :this.props.value}
            </td>
        )
    }
}