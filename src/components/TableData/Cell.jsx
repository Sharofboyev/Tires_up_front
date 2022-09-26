import Button from "./Button";
import React from "react";
import Image from "./Image";

export class Cell extends React.Component {
  render() {
    return (
      <td className="Cell">
        {this.props.columnName === "Bajarildi" ? (
          <Button
            done={this.props.done}
            onButtonClickHandler={this.props.onButtonClickHandler}
            id={this.props.id}
            viewName={this.props.viewName}
          />
        ) : this.props.columnName === "Time" ? (
          <Image
            handleCollapseClick={this.props.handleCollapseClick}
            collapsed={this.props.collapsed}
            width="50px"
            height="50px"
          />
        ) : this.props.columnName === "CSN" ? (
          this.props.value.substring(3)
        ) : (
          this.props.value
        )}
      </td>
    );
  }
}
