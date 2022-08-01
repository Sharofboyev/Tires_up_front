import React from "react"

class Image extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rotate: false,
        toggle: false
      };
      this.rotatingDone = this.rotatingDone.bind(this);
    }
    componentDidMount() {
      const elm = this.image;
      elm.addEventListener("animationend", this.rotatingDone);
    }
    componentWillUnmount() {
      const elm = this.image;
      elm.removeEventListener("animationend", this.rotatingDone);
    }

    onClickHandler = (event) => {
        this.setState({ rotate: true })
        this.props.handleCollapseClick(event)
    }
  
    rotatingDone() {
      this.setState(function(state) {
        return {
          toggle: !state.toggle,
          rotate: false
        };
      });
    }
    render() {
      const { rotate } = this.state;
  
      return (
        <img
          src={require("./collapse.png")}
          ref={elm => {
            this.image = elm;
          }}
          alt=">"
          onClick={this.onClickHandler}
          width={this.props.width}
          height={this.props.height}
          className={rotate ? "rotate" : ""}
        />
      );
    }
  }

export default Image