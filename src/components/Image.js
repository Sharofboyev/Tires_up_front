import React from "react"

class Image extends React.Component {
    onClickHandler = (event) => {
        this.setState({ rotated: true})
        this.props.handleCollapseClick(event)
    }

    render() {
  
      return (
        <img
          src={this.props.collapsed ? require("./collapse.png"): require("./collapseRotated.png")}
          alt=">"
          onClick={this.onClickHandler}
          width={this.props.width}
          height={this.props.height}
        />
      );
    }
  }

export default Image